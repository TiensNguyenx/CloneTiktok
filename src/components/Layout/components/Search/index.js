import HeadlessTippy from '@tippyjs/react/headless';
import * as searchServices from '~/apiServices/searchServices';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '../AccounItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500)
    const inputRef = useRef()
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])

        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setSearchResult(result);
            setLoading(false);
        };
        fetchApi()
    }, [debounced]);
    const handleHideResult = () => {
        setShowResult(false)
    }
    return (<HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PropperWrapper>
                    <h4 className={cx('search-title')}>Accounts

                    </h4>
                    {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                    ))}

                </PropperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Tìm kiếm"
                spellCheck={false}
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            >
            </input>
            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={() => {
                    setSearchValue('')
                    inputRef.current.focus()
                    setSearchResult([])
                }}>
                    <AiFillCloseCircle />
                </button>
            )}

            {loading && (<div className={cx('loading')}>
                <AiOutlineLoading3Quarters />
            </div>)}
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    </HeadlessTippy>);
}

export default Search;