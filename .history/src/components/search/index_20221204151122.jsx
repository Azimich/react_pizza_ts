import React from 'react';
import debounce from "lodash.debounce";
import { SearchContext } from '../../App';
import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = 
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.search}>
      <svg
        className={styles.search}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_22_237)">
          <path d="M25.1338 23.6291L29.2949 27.7882C29.4891 27.9892 29.5964 28.2582 29.594 28.5375C29.5915 28.8169 29.4795 29.0841 29.282 29.2816C29.0845 29.4791 28.8172 29.5912 28.538 29.5936C28.2585 29.5961 27.9895 29.4886 27.7886 29.2946L23.6274 25.1333C20.9081 27.4631 17.3921 28.6492 13.8172 28.4425C10.2424 28.2359 6.88657 26.6527 4.45387 24.0251C2.02117 21.3975 0.700742 17.9298 0.769658 14.3496C0.838573 10.7695 2.29147 7.35515 4.8235 4.82312C7.35551 2.29111 10.7698 0.838207 14.35 0.769292C17.9301 0.700376 21.3978 2.02081 24.0254 4.45351C26.653 6.88621 28.2362 10.2421 28.4429 13.8169C28.6495 17.3918 27.4635 20.9077 25.1338 23.6269V23.6291ZM14.6167 26.3351C17.7247 26.3351 20.7054 25.1005 22.9031 22.9027C25.1008 20.7051 26.3354 17.7243 26.3354 14.6163C26.3354 11.5083 25.1008 8.52761 22.9031 6.32992C20.7054 4.13223 17.7247 2.89757 14.6167 2.89757C11.5087 2.89757 8.52798 4.13223 6.33029 6.32992C4.1326 8.52761 2.89795 11.5083 2.89795 14.6163C2.89795 17.7243 4.1326 20.7051 6.33029 22.9027C8.52798 25.1005 11.5087 26.3351 14.6167 26.3351Z" fill="#454545"/>
        </g>
        <defs>
          <clipPath id="clip0_22_237">
            <rect width="30" height="30" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <input 
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text" 
        placeholder="Поиск пиццы..." 
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clear}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99931 8.97428L13.0242 14L14 13.0257L8.9737 8L14 2.97565L13.0256 2L7.99931 7.02572L2.97439 2L2 2.97565L7.02492 8L2 13.0243L2.97439 14L7.99931 8.97428Z"
            fill="#505050"
          />
        </svg>
      )}
    </div>
  )
}

export default Search;
