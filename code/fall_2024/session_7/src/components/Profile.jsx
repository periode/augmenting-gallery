// this is the minimum version of a component that uses external data to display things correctly
// in general, the component name should be the same as the file name and should be *upper-case*!
function Profile({userName, bio}) {

    // this is where we actually SHOW things
    return (
        <>
            <h1> @{userName} </h1>
            <h2> {bio} </h2>
        </>
    )
}

export default Profile;
