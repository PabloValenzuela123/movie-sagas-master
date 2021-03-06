import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../MovieCard/MovieCard';
import { connect } from 'react-redux';

//UI material
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});


class GuttersGrid extends React.Component {
    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid container className={classes.root} spacing={16}>

                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {this.props.movies.map(movie => (
                            <MovieCard movie={movie} />
                        ))}


                    </Grid>

                </Grid>

            </Grid>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

const putPropsOnReduxStore = (reduxStore) => ({
    movies: reduxStore.moviesReducer,
});


export default withStyles(styles, GuttersGrid)(connect(putPropsOnReduxStore)(GuttersGrid));
