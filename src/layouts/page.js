import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section className="page">
                <header className="hero">
                    <div className="copy">
                        <h1>{_.get(this.props, 'page.title', null)}</h1>
                        {_.get(this.props, 'page.subtitle', null) && (
                        <h3>{htmlToReact(_.get(this.props, 'page.subtitle', null))}</h3>
                        )}
                    </div>
                </header>
                <div className="content">
                    {markdownify(_.get(this.props, 'page.content', null))}
                </div>
            </section>
            </Layout>
        );
    }
}
