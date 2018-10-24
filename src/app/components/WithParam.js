import React, {Component} from 'react';

const WithParam = ({match}) => {
    console.log(match)
    return(
        <div>
            This is WithParam Component  --- {match.params.id}
        </div>
    )
}

export default WithParam;