const imageBoxStyles = `relative w-full h-[500px] bg-contain bg-no-repeat bg-center transition-all duration-700`;

function Coaches() {
  return (
    <div className="grid gap-10 xl:grid-cols-2 2xl:grid-cols-5">
      {/* Image 01 */}
      <div className="flex cursor-pointer flex-col">
        <div
          className={`${imageBoxStyles} bg-[url('./images/our-services/track.png')]`}
        ></div>
      </div>

      {/* Image 02 */}
      <div className="flex cursor-pointer flex-col">
        <div
          className={`${imageBoxStyles} bg-[url('./images/our-services/analyse.png')]`}
        ></div>
      </div>

      {/* Image 03 */}
      <div className="flex cursor-pointer flex-col">
        <div
          className={`${imageBoxStyles} bg-[url('./images/our-services/train.png')]`}
        ></div>
      </div>

      {/* Image 04 */}
      <div className="flex cursor-pointer flex-col">
        <div
          className={`${imageBoxStyles} bg-[url('./images/our-services/connect.png')]`}
        ></div>
      </div>

      {/* Image 05 */}
      <div className="flex cursor-pointer flex-col">
        <div
          className={`${imageBoxStyles} bg-[url('./images/our-services/challenge.png')]`}
        ></div>
      </div>
    </div>
  );
}

export default Coaches;
