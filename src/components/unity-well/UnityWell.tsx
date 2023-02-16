import { Unity, useUnityContext } from "react-unity-webgl";

export const UnityWell = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "unity/Build/unity.loader.js",
    dataUrl: "unity/Build/unity.data.unityweb",
    frameworkUrl: "unity/Build/unity.framework.js.unityweb",
    codeUrl: "unity/Build/unity.wasm.unityweb",
  });

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      <div>Project</div>
      {isLoaded === false && (
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" style={{ width: "1200px", height: "800px" }} unityProvider={unityProvider} />
    </div>
  );
};