import React from 'react'
import { connect } from 'react-redux'
import Post from './Post';

 const Posts = ({posts}) => {

    if(!posts.length) {
        return <p className="text-center">Пока постов нет</p>
    }
    return  (
        posts.map(post => <Post post={post} key={post} />)
    )
}

const mapStateToProps = state => {
    console.log(state);

    return state;
}
 
export default connect(mapStateToProps, null)(Posts);