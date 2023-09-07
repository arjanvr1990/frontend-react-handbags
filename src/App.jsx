import './App.css'
import Button from "./componets/button/button.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import BagItem from "./componets/bagItem/bagItem.jsx"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Tile from "./componets/tile/tile.jsx"

function App() {
  return (

  <>

    <h1>Handbags & Purses</h1>

<nav>
  <Button
  buttonText = "to the collection"
  buttonType="button"
  disabledButton={false}
  />
  <Button
      buttonText = "shop all bags"
      buttonType="button"
      disabledButton={false}
  />
  <Button
      buttonText = "pre-orders"
      buttonType="button"
      disabledButton={true}
  />
</nav>

    <main>

      <BagItem
          bagLabel="Best seller"
          bagImg = {bag1}
          bagDescription = "handy"
          bagPrice = "€400,-"
      />
      <BagItem
          bagLabel="Best seller"
          bagImg = {bag2}
          bagDescription = "stylish"
          bagPrice = "€250,-"
      />
      <BagItem
          bagLabel="New collection"
          bagImg = {bag3}
          bagDescription = "simple"
          bagPrice = "€300,-"
      />
      <BagItem
          bagLabel="New collection"
          bagImg = {bag4}
          bagDescription = "trendy"
          bagPrice = "€150,-"
      />

  </main>

  <footer>
    <Tile
      tileTitle = "the brand"
      tileText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      disabledImg={true}
      // tileImg = {brand}
    />
    <Tile
    tileImg={brand}
    />
    <Tile
    tileImg={ourStory}
    />
    <Tile
    tileTitle="our story"
    tileText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />


  </footer>

</>


  );
}

export default App
