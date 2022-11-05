export const withUser = (Component) => (props) => {
    console.log(props)
  const customUser = { authenticated: true, email: "email@email.com" };
  return <Component customUser={customUser} {...props} />;
};