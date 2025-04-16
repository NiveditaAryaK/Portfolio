"use client";
import { MaskContainer } from "./svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            In contemporary discourse, traditional epistemological frameworks are re-evaluated through emergent theories that integrate subjective experiences with objective analyses. This dynamic interplay challenges conventional paradigms, fostering transformative critical inquiry.
          </p>
        }
        className="h-[40rem] rounded-4xl border text-white dark:text-black"
      >
        Frankly,{" "}
        <span className="text-purple-800">my dear,</span>  I don't give a{" "}
        <span className="text-purple-800">damn.</span>.
      </MaskContainer>
    </div>
  );
}

export default SVGMaskEffectDemo;
