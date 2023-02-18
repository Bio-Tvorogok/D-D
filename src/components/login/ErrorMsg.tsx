import * as React from 'react';

type ErrorMsgProps = {
    msg?: string;
};

function ErrorMsg({ msg }: ErrorMsgProps) {
    return (
        <p
            id="outlined_error_help"
            className="mt-2 text-xs text-red-600 dark:text-red-400">
            {msg}
        </p>
    );
}

export default ErrorMsg;
