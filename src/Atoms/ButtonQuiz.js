import * as React from "react";
import Button from '@mui/material/Button';

function ButtonQuiz({ buttonLabel }) {
    return (
        <div>
            <Button variant="contained">{buttonLabel}</Button>
        </div>
    );
}

export default ButtonQuiz;

