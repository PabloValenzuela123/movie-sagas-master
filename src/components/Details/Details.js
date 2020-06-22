import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

//Details view
class Details extends Component {

  //send user back to the homepage
    goBrowse = () => {
        this.props.history.push('/');
    }

    goEdit = () => {
        this.props.history.push('/edit');
    }

    render() {
        return (
            <>
                <h3>{this.props.details.title}</h3>
                <img src={this.props.details.poster} />
                <p>{this.props.details.description}</p>
                <h4>Genre</h4>
                {/*Here I'm mapping through the array to capture all associated genres*/}
                {this.props.genres.map((genre) => {
                    return (
                        <p>{genre.name}</p>
                    );
                })}
                <Button variant="contained" color="secondary" onClick={this.goBrowse}>Browse Movies</Button>
                <Button variant="contained" color="secondary" onClick={this.goEdit}>Edit Movie</Button>
            </>
        );
    }
}

//reducers
const putPropsOnReduxStore = (reduxStore) => ({
    details: reduxStore.detailsReducer,
    genres: reduxStore.genresReducer,
});


export default withStyles()(connect(putPropsOnReduxStore)(Details));