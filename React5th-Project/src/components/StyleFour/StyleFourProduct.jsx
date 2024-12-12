import StyleFour from "./StyleFour";
import Hazelnut from "../../assets/lemon.jpg";
import Almond from "../../assets/anar.jpg";

function StyleFourProduct() {
  return (
    <div>
      <div className="one-header">
        <h1>Style 4</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
      </div>
      <div className="custom-container">
        <div class="d-flex">
          <StyleFour
            image={Hazelnut}
            rating="★★★★★"
            ratingtext="(5.0)"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel culpa autem magnam vitae fugiat maxime alias veniam repudiandae facilis suscipit molestias, hic, ratione incidunt delectus deserunt consequatur! Eos, quae maiores."
            name="Fresh organic villa farm lomon
                                        500gm pack"
            discountprice="$145"
            price="$150"
          />
          <StyleFour
            image={Almond}
            rating="★★★★★"
            ratingtext="(5.0)"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel culpa autem magnam vitae fugiat maxime alias veniam repudiandae facilis suscipit molestias, hic, ratione incidunt delectus deserunt consequatur! Eos, quae maiores."
            name="Oraganic Fresh vanila farm"
            discountprice="$120.25"
            price="$123.25"
          />
        </div>
      </div>
    </div>
  );
}

export default StyleFourProduct;