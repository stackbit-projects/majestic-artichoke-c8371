import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header container">
                <Link href={withPrefix('/')} className="logo">{_.get(this.props, 'data.config.header.title', null)}</Link>
                {(_.get(this.props, 'data.config.header.nav_links', null) && _.get(this.props, 'data.config.header.has_nav', null)) && (
                <nav>
                    {_.map(_.get(this.props, 'data.config.header.nav_links', null), (item, item_idx) => {
                        let pageUrl = _.trim(_.get(this.props, 'page.stackbit_url_path', null), '/');
                        let itemUrl = _.trim(_.get(item, 'url', null), '/');
                        return (
                            <Link key={item_idx} href={(_.get(item, 'url', null).startsWith('#') ? (_.get(item, 'url', null)) : withPrefix(_.get(item, 'url', null)))}
                                {...(_.get(item, 'new_window', null) ? ({target: '_blank'}) : null)}
                                {...((_.get(item, 'new_window', null) || _.get(item, 'no_follow', null)) ? ({rel: (_.get(item, 'new_window', null) ? ('noopener ') : '') + (_.get(item, 'no_follow', null) ? ('nofollow') : '')}) : null)}
                                className={classNames('nav-link', {'active': pageUrl === itemUrl})}>{_.get(item, 'label', null)}</Link>
                        )
                    })}
                </nav>
                )}
            </header>
        );
    }
}
