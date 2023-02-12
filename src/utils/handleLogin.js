export const signIn = (e, auth, emailRef, passwordRef) => {
	auth
		.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
		.then((user) => {
			window.location.href = "/admin";
		})
		.catch((err) => {
			alert("Feil brukernavn og/eller passord");
		});
};
