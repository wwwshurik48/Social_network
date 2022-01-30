import React from "react";
import s from './ProfileInfo.module.css'
import yes from '../../../assets/image/yes.png'
import no from '../../../assets/image/no.png'

type rootType = {
    profile: propsType
    setUserProfile?: (profile: string) => void
}

type propsType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosType
}

type contactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

type photosType = {
    small: string
    large: string
}



const ProfileInfo = (props: rootType) => {
    return (
        <div className={s.profileBox}>
            <div className={s.profile}>
                <img src="https://tipik.ru/wp-content/uploads/2018/11/1316796242_67_www.nevseoboi.com_.ua_.jpg"
                     alt="img"/>
                <div className={s.avaBox}>
                    <img className={s.avaBoxPhoto} src={props.profile.photos?.large}/>
                </div>
                <div>
                    <div className={s.capitalLetter}>ABOUT ME: </div>
                    <span className={s.aboutMe}>{props.profile.aboutMe}</span>
                </div>
                <div className={s.contacts}>
                    <div className={s.capitalLetter}> CONTACTS: </div>
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>vk: {props.profile.contacts.vk}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>github: {props.profile.contacts.github}</div>
                </div>
                <div className={s.capitalLetter}>looking for a Job: </div>
                <div className={s.lookingForAJob}>{props.profile.lookingForAJob ? <img src={yes} style={{width: '100px', height: '100px'}}/> : <img src={no}/> }</div>
            </div>
        </div>
    )
}


export default ProfileInfo;