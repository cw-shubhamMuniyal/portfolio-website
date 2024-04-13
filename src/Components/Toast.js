import bootstrap, { Toast } from "bootstrap"
import { useEffect, useRef, useState } from "react";

const ToastMessage = ({ message, shouldShow }) => {
    var [toast, setToast] = useState(shouldShow);
    const toastRef = useRef();

    useEffect(() => {
        var myToast = toastRef.current
        var bsToast = Toast.getInstance(myToast)

        if (!bsToast) {
            // initialize Toast
            bsToast = new Toast(myToast, { autohide: false })
            // hide after init
            bsToast.hide()
            setToast(false)
        }
        toast ? bsToast.show() : bsToast.hide()
    })
    return (
        <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center">
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef}>
                <div className="toast-header">
                    <button type="button" className="ml-200 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default ToastMessage;