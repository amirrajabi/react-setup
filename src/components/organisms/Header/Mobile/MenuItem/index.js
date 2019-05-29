import React, { PureComponent, Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';

import MenuItemList from '../MenuItemList';
import { Link } from 'react-router-dom';
import { IMenuItemProps, IMenuItemState } from './types';
import domains from '../../../../../configuration/domains';
import { trackEvent } from '../../../../../helpers/Tracking';
import { eventCategory, eventAction_Tier2 } from '../../trackingConfig';

const s = require('./styles.scss');

class MenuItem extends PureComponent<IMenuItemProps, IMenuItemState> {
    state = {
        showDropdown: false
    };

    toggleDropdown = (): void => {
        this.setState(state => ({
            showDropdown: !state.showDropdown
        }));
    };

    closeMenu = (): void => {
        this.setState({
            showDropdown: false
        });
        this.props.toggle();
    };

    withTracking = (action: () => void) => (): void => {
        action();
        trackEvent(eventCategory, eventAction_Tier2, this.props.link.title)();
    };

    render(): JSX.Element {
        const { activeMenuItemIndex, index, link, isLoggedIn } = this.props;
        const { showDropdown } = this.state;
        let title = link.title;

        if (title === 'Log in' && isLoggedIn) {
            title = 'Account';
        }
        return (
            <li className={s.menuItem}>
                {!link.children &&
                    (link.isExternal ? (
                        <a
                            className={s.menuItemLink}
                            onClick={this.withTracking(this.closeMenu)}
                            href={`${domains.baseUrl}${link.href}`}
                        >
                            {title}
                        </a>
                    ) : (
                        <Link
                            className={s.menuItemLink}
                            onClick={this.withTracking(this.closeMenu)}
                            to={link.href}
                        >
                            {title}
                        </Link>
                    ))}

                {link.children && (
                    <Fragment>
                        <div
                            className={s.menuItemLink}
                            onClick={this.withTracking(() => {
                                this.toggleDropdown();
                            })}
                        >
                            {title}
                            <span
                                className={classnames(s.arrow, {
                                    [s.up]: showDropdown,
                                    [s.down]: !showDropdown
                                })}
                            />
                        </div>
                        {activeMenuItemIndex === index && (
                            <MenuItemList
                                link={link}
                                showDropdown={showDropdown}
                                toggle={this.closeMenu}
                            />
                        )}
                    </Fragment>
                )}
            </li>
        );
    }
}

export default withStyles(s)(MenuItem);
