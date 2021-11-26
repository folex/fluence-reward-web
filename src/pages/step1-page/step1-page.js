import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import DefinitionList from '../../components/DefinitionList/DefinitionList';
import Dashboard from '../../components/Dashboard/Dashboard';
import Footer from '../../components/Footer/Footer';

import styles from './step1-page.module.css';

const FirstStepPage = () => {
    return (
        <div className={styles.background}>
            <Header />
            <div className="container">
                <main className="main">
                    <div className={styles.progress}>
                        <Progress />
                    </div>
                    <div className={styles.title}>
                        <Title type="h1" size="large" text="You are in! " icon="" />
                    </div>
                    <div className={styles.dashboard}>
                        <Dashboard>
                            <div className={styles["dashboard__flex-container"]}>
                                <div className={styles.dashboard__logo}/>
                                <DefinitionList dd="500 FLT" dt="ready to be claimed" colorD="orange" colorT="black"/>
                            </div>
                            <div className={styles.dashboard__text}>
                                <Text color="black" type="large">
                                    Claiming will require an Ethereum wallet and performing basic tasks with terminal on your computer. :name_badge:
                                </Text>
                            </div>
                            <ol className={styles.dashboard__list}>
                                <li className={styles.dashboard__item}>
                                    Connect an Ethereum wallet
                                </li>
                                <li className={styles.dashboard__item}>
                                    Generate proof of Github account ownership
                                </li>
                                <li className={styles.dashboard__item}>
                                    Delegate or self-delegate DAO voting power
                                </li>
                                <li className={styles.dashboard__item}>
                                    Receive the tokens
                                </li>
                            </ol>
                            <div className={styles.dashboard__caption}>
                                <Text color="grey" type="small">
                                    Two Ethereum transactions of 0.001 ETH & 0.002 ETH gas fees will be involved on steps 3 & 4
                                </Text>
                            </div>
                            <div className={styles.dashboard__button}>
                                <Button type="large" text="Connect a wallet"/>
                            </div>
                            <p className={styles.dashboard__paragraph}>
                                If you are an advanced Ethereum user, you can claim directly from the smart contract.  <Link to='/' className={styles.dashboard__link}>Learn how to do it</Link>
                            </p>
                        </Dashboard>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default FirstStepPage;