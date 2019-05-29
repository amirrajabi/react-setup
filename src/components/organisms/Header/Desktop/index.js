import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { CountryDropdown } from '../../../atoms';
import { PropertySearch } from '../../../molecules';
import NavItem from './NavItem';
import MainNavItem from './MainNavItem';

import { IMainNavItemProps } from './MainNavItem/types';
import { IDesktopProps, IDesktopState } from './types';
import withUser from '../../../abstracts/User';
import VisuallyHidden from '../../../atoms/VisuallyHidden';
import TopNav from './TopNav';
import { trackEvent } from '../../../../helpers/Tracking';
import {
    eventAction_Tier1,
    eventCategory,
    eventAction_Tier2
} from '../trackingConfig';

const s = require('./styles.scss');

const { main } = require('../headerConfig.json');

class Desktop extends React.Component<IDesktopProps, IDesktopState> {
    state = {
        scrolled: false,
        expanded: false
    };

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', this.watchScroll);
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', this.watchScroll);
        }
    }

    watchScroll = (): void => {
        if (!this.state.scrolled && window.pageYOffset > 320) {
            this.setState({ scrolled: true, expanded: false });
        }
        if (this.state.scrolled && window.pageYOffset <= 320) {
            this.setState({ scrolled: false, expanded: false });
        }
    };

    toggleMain = (): void => {
        this.setState(state => ({
            expanded: !state.expanded
        }));
    };

    render() {
        const { scrolled, expanded } = this.state;

        return (
            <header
                className={classNames(s.header, {
                    [s.isScrolled]: scrolled,
                    [s.isCollapsed]: scrolled && !expanded
                })}
            >
                <div className={s.top}>
                    <div className={classNames(s.container, s.inner)}>
                        <div className={s.topLeft}>
                            <Link
                                data-testid="nav-desktop-purplebricks"
                                to="/"
                                className={classNames(s.logo, s.topLogo)}
                                onClick={trackEvent(
                                    eventCategory,
                                    eventAction_Tier1,
                                    'Main-logo'
                                )}
                            >
                                Purplebricks
                            </Link>

                            <button
                                className={classNames(s.topToggle, {
                                    [s.isOpen]: scrolled && expanded
                                })}
                                onClick={this.toggleMain}
                            >
                                <span className={s.burger} />
                                <VisuallyHidden>
                                    {expanded ? 'Close' : 'Open'} Menu
                                </VisuallyHidden>
                            </button>

                            <TopNav />
                        </div>

                        <div className={s.topActions}>
                            <NavItem
                                title={
                                    this.props.isLoggedIn ? 'Account' : 'Log in'
                                }
                                href="/account/login"
                                isExternal={true}
                                onClick={trackEvent(
                                    eventCategory,
                                    eventAction_Tier1,
                                    this.props.isLoggedIn ? 'Account' : 'Log in'
                                )}
                            />

                            <CountryDropdown
                                eventCategory={eventCategory}
                                eventAction={eventAction_Tier1}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.main}>
                    <div className={classNames(s.container, s.inner)}>
                        <Link
                            to="/"
                            className={classNames(s.logo, s.mainLogo)}
                            onClick={trackEvent(
                                eventCategory,
                                eventAction_Tier2,
                                'Main-logo'
                            )}
                        >
                            Purplebricks
                        </Link>

                        <nav className={s.mainNav}>
                            {main.menu &&
                                main.menu.map(
                                    (
                                        item: IMainNavItemProps,
                                        index: number
                                    ) => (
                                        <MainNavItem
                                            className={s.mainNavItem}
                                            key={index}
                                            {...item}
                                        />
                                    )
                                )}
                        </nav>

                        <PropertySearch
                            testId="nav-desktop-property-search"
                            device="desktop"
                            placeholder="Location or postcode"
                            className={s.mainSearch}
                            onSubmit={trackEvent(
                                eventCategory,
                                eventAction_Tier2,
                                'Property-search'
                            )}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

export default withUser(withStyles(s)(Desktop));
