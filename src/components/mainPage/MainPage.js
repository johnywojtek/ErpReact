import React from 'react';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

import Post from './Post';
import User2 from '../User2';
import FastChat from './FastChat';
import Loading from '../common/Spinner';

import {
    FaCamera,
    FaPaperclip,
    FaSmile,
    FaEllipsisV,
    FaRegPaperPlane,
    FaRegEdit
} from 'react-icons/fa';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0'
    }
};
export default class MainPage extends React.Component {
    state = { users: [], loading: true, data: [], modalIsOpen: false };

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .all([
                axios.get(`https://5dd8f525505c590014d3be77.mockapi.io/post`),
                axios.get('https://randomuser.me/api/', {
                    params: {
                        results: 20
                    }
                })
            ])
            .then(
                axios.spread((posts, users) => {
                    console.log(posts, users);

                    this.setState({
                        data: posts.data,
                        users: users.data.results,
                        loading: false
                    });
                })
            )
            .catch((googleErr, appleErr) => {
                console.log(googleErr, appleErr);
            });
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };
    render() {
        return (
            <div>
                {/* <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="modal-header">
                                <h6 class="modal-title">Send</h6>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span
                                        aria-hidden="true"
                                        onClick={this.closeModal}
                                    >
                                        &times;
                                    </span>
                                </button>
                            </div>
                            <form>
                                <div class="form-group">
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary">
                                    Post
                                </button>
                            </form>
                        </div>
                    </div>
                </Modal> */}
                <div class="az-content-body">
                    <div class="az-content-body-posts">
                        <div id="azChatBody" class="az-chat-body-main">
                            <Scrollbars style={{ height: '100%' }}>
                                <div class="az-chat-footer-main">
                                    {/* <div className="az-img-user-post online">
                                        <img
                                            src="https://via.placeholder.com/500x500"
                                            alt=""
                                        />
                                    </div> */}
                                    <div>
                                        <span
                                            className="create-post"
                                            onClick={() =>
                                                this.setState({
                                                    modalIsOpen: true
                                                })
                                            }
                                        >
                                            <FaRegEdit className="mr-2" />
                                            Create a post
                                        </span>
                                    </div>
                                    <nav class="nav">
                                        <a
                                            href=""
                                            class="nav-link"
                                            data-toggle="tooltip"
                                            title="Add Photo"
                                        >
                                            <FaCamera />
                                        </a>
                                        <a
                                            href=""
                                            class="nav-link"
                                            data-toggle="tooltip"
                                            title="Attach a File"
                                        >
                                            <FaPaperclip />
                                        </a>
                                        <a
                                            href=""
                                            class="nav-link"
                                            data-toggle="tooltip"
                                            title="Add Emoticons"
                                        >
                                            <FaSmile />
                                        </a>
                                        <a href="" class="nav-link">
                                            <FaEllipsisV />
                                        </a>
                                    </nav>
                                </div>
                                <div class="content-inner">
                                    {this.state.data.map(e => (
                                        <Post
                                            username={e.username}
                                            avatar={e.avatar}
                                            date={e.date}
                                            desc={e.desc}
                                            img={e.img}
                                        />
                                    ))}
                                </div>
                            </Scrollbars>
                        </div>
                    </div>
                    <div class="az-content-right-chat-main">
                        <FastChat />
                        <Scrollbars style={{ height: '100%' }}>
                            <div id="azChatList" class="az-chat-list">
                                {this.state.loading ? (
                                    <Loading />
                                ) : (
                                    <User2
                                        people={this.state.users}
                                        emial={true}
                                    />
                                )}
                            </div>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        );
    }
}
