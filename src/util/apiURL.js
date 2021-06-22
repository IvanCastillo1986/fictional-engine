
export const apiURL = () => {
    if (window.location.hostname === 'localhost') {
        return 'http://localhost:8080'
    } else {
        return 'https://hidden-woodland-48757.herokuapp.com'
    }
}
