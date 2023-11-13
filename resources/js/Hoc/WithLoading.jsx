import { Pre_img } from "@/App/Theme/images";
import { router } from "@inertiajs/react";
import React, { Component } from "react";

const withLoading = (WrappedComponent) => {
    return class WithLoading extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isLoading: false,
            };
        }

        componentDidMount() {
            router.on("start", (event) => {
                this.setState({
                    isLoading: true,
                });
            });

            router.on("finish", (event) => {
                this.setState({
                    isLoading: false,
                });
            });
        }

        render() {
            return false ? (
                <div id="back__preloader">
                    <div id="back__circle_loader"></div>
                    <div class="back__loader_logo">
                        <img
                            src={Pre_img}
                            alt="Preload"
                        />
                    </div>
                </div>
            ) : (
                <WrappedComponent {...this.props} />
            );
        }
    };
};

export default withLoading;
