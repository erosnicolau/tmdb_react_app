import './searchForm.css';
import { createRef, useEffect }  from 'react';

export default function SearchForm(props) {
  const { keyword, saveSearch, visible } = props;
  let inputRef = createRef();

  function submitted(ev) {
    ev.preventDefault();
    saveSearch(inputRef.current.value);
  }

  function resetSearchForm(ev){
    ev.preventDefault();
    saveSearch('');
  }

  useEffect(() => {
    inputRef.current.value = keyword;
  }, [keyword, inputRef]);

  return (
    <section className={'searchBar' +  (visible ? '' : ' hidden')}>
      <form onSubmit={submitted}>
        <input
          type="text"
          ref={inputRef}
          name="keyword"
          className="searchText"
          placeholder="keyword"
        />
        <button type="submit" className="searchBtn" name="searchBtn">
          Search
        </button>
        <button type="reset" className="searchBtn" name="resetBtn" onClick={resetSearchForm}>
          Reset
        </button>
      </form>
      {props.keyword && <p>You searched for: "{props.keyword}"</p>}
    </section>
  )
}
