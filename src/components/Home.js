import React, {Component} from "react";
import '../styles/Home.css';

export default class Home extends Component {

    render() {
        let heading = "Afşin Ağcaşar Sitemize Hoş geldiniz";
        let subheading = "Sitemiz daha henüz yapım aşamasındadır. Önümüzdeki Süreçte yeni eklemeler olacaktır. Şimdilik iyi eğlenceler.";

        return (
            <div>
                <section className="section">
                    <div className="section-body">
                        <div className="container">
                            <h1 className="title">{heading}</h1>
                            <div className="is-two-thirds column is-paddingless">
                                <p className="subtitle is-4">{subheading}</p>
                            </div>
                            <a type="button" className="btn is-large text-dark bg-secondary" id="learn">Learn More</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}