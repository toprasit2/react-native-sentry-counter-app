import React from 'react'
import Sentry from 'sentry-expo'

export default class SentryVoundary extends React.Component{
    
    componentDidCatch(error){
        Sentry.captureException(error)
    }

    render(){
        return this.props.children;
    }
}