// moved from App.js
// change from function declaration to arrow function and EXPORT

export const UserMap = (props) => {
  return (
    props.userInfo.map(list => (
      <ul>
        <li>EnglishName of the object: {list.englishName}</li>
        <li>ID of the AdministrativeArea: {list.administrativeArea.ID}</li>
        <li>ID of the Country: {list.country.ID}</li>
      </ul>
    )
    )
  );
};