import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useAppDispatch } from '../../hooks/state/useAppDispatch';
import { useAppSelector } from '../../hooks/state/useAppSelector';
import { setSearchQuery } from '../../features/searchSlice';
import SearchInput from '../SearchInput/SearchInput';
import CartButton from '../UI/Button/CartButton';
import ThemeToggleButton from '../UI/Button/ThemeToggleButton';
import logoLight from '../../assets/images/logo-light.png';
import logoDark from '../../assets/images/logo-dark.png';
import { HEADER_CLASSES } from '../../constants/header';

const Header = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(state => state.search.query);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <header className={HEADER_CLASSES.container}>
      <div className={HEADER_CLASSES.inner}>
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center gap-2 shrink-0"
          aria-label="Go to home"
        >
          <img
            src={logoLight}
            alt="Store"
            className= "hidden sm:block h-6 w-auto object-contain dark:hidden"
          />
          <img
            src={logoDark}
            alt="Store"
            className="hidden sm:hidden dark:sm:block h-6 w-auto object-contain"
          />
        </Link>

        <div className={HEADER_CLASSES.searchWrapper}>
          <SearchInput
            value={searchQuery}
            onChange={(value) => dispatch(setSearchQuery(value))}
            placeholder="Search products…"
          />
        </div>

        <div className={HEADER_CLASSES.controlsWrapper}>
          <ThemeToggleButton />
          <CartButton />

          <div
            className={HEADER_CLASSES.userIcon}
            title="Account (not supported)"
          >
            <FaUser size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;