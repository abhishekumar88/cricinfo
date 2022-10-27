import React from 'react';

class TopBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { image="https://lbb.in/shahar/images/web-copy-2-p-1600.png", title } = this.props;
        console.log('top-banner image: ', image, title);

        return (
            <div className="top-banner">
                {title ? (
                    <h2>{title}</h2>
                ) : ""}
                <img src={image} alt="top-banner" />
            </div>
        );
    }
}

export default TopBanner