import React from 'react';
import { Check } from 'lucide-react';
import './WhyRVCRPage.css';

export default function WhyRVCRPage() {
  return (
    <div className="why-rvcr-page">
      {/* Hero Banner */}
      <section className="why-rvcr-hero">
        <div className="container why-rvcr-hero-content">
          <div className="why-rvcr-hero-text">
            <h1 className="why-rvcr-hero-title">Why RVCR ?</h1>
            <p className="why-rvcr-hero-subtitle">
              The unprecedented climate challenge needs is beyond the scope of conventional innovations. RVCR enables OEM’s with newer long term strategies for Zero Carbon Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Scenario Section */}
      <section className="why-rvcr-section why-rvcr-scenario-section">
        <div className="container">
          <h2 className="why-rvcr-section-title">Scenario</h2>
          
          <div className="why-rvcr-text-block">
            <p>
              Today we are seeking technological solutions with least damaging impact on the environment. Oil based economic structures are facing pressure from environmental groups and ever stricter regulations. Many governments are now focusing on non-fossil fuel-based energy systems. However, this transformation is not easy for various reasons and the fact remains that the society, industry and the human civilisation at large is hooked on fossil fuel for almost every aspect of life from Energy to pharma, to packaging plastics, garments, chemicals etc.
            </p>
            <p>
              The existing in cycle investments in oil economy and its massive momentum is not easy to overcome and much of our existence today is ruled by structures which are completely dependent on fossil fuel.
            </p>
            <p>
              The solutions devised by scientists, engineers and entrepreneurs are limited to individual segment of a market products like ‘Batteries; Hybrid’ for automotive segment of transport sector or the ‘Solar’ for domestic house-Hold segment of energy sector. Further these conventional technologies have been researched for generations and Global majors have invested Billions through decades. These technologies have reached a saturation point in efficiency & adaptability and are unbale to cope with newer 21st century ecologically Emissions and Green House norms and are stagnating at their current efficiency levels).
            </p>
          </div>

          {/* Problem Grid */}
          <div className="why-rvcr-grid-2col why-rvcr-problem-grid">
            <div className="why-rvcr-img-col">
              <img 
                src="/images/problem.jpg" 
                alt="Problem" 
                className="why-rvcr-featured-img"
              />
            </div>
            <div className="why-rvcr-content-col">
              <h3 className="why-rvcr-subheading-dark">The conventional technologies lack viability to address three main conflicting concerns:</h3>
              <ul className="why-rvcr-check-list">
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Green House Emission v/s Cost viability of compliance to stricter regulations.</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Marginal Efficiency Improvement v/s high cost of development.</span>
                </li>
                <li>
                  <div className="check-icon-wrapper">
                    <Check className="check-icon" size={18} />
                  </div>
                  <span>Marginal Efficiency Improvement v/s high cost of development.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Shortfalls Subsection */}
          <div className="why-rvcr-shortfalls-block">
            <h3 className="why-rvcr-subheading-dark">The short falls of Conventional Green Technologies</h3>
            <ul className="why-rvcr-check-list">
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" size={18} />
                </div>
                <span>
                  <strong>Segmented Technology solutions:</strong> These technologies (Batteries; Biofuel Engines; clean fuel engines; Hybrids and Wind; Hydro-Kinematic, Solar Energy etc.) are either oversaturated due to decades of incremental development, or are premature, and the pressing demands of eco-friendliness, lower Carbon foot-print, Energy Efficiency, requires better product improvements.
                </span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" size={18} />
                </div>
                <span>
                  All conventional technologies displace fossil fuel use and hence conflict with existing economic structures and its various stake-holders. Global economies depend on Fossil fuel value chain for modern way of life and reduction in Fossil-fuel demand directly affects significant section of Populace that resist such change.
                </span>
              </li>
              <li>
                <div className="check-icon-wrapper">
                  <Check className="check-icon" size={18} />
                </div>
                <span>
                  The Levelized Cost of Energy from existing technology solutions compete with plummeting of Fuel prices caused by reduced fossil fuel usage (with active supply lines maintaining abundant supply from Fuel sources), thus rendering them unviable on a large scale.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="why-rvcr-section why-rvcr-solution-section">
        <div className="container">
          <h2 className="why-rvcr-section-title">The solution</h2>
          <p className="why-rvcr-solution-intro">
            To have an effective solution we need a technology which is adaptive to both fossil fuel and green source that satisfies both the conflicting concerns of the fossil fuel dependent economy and the environment concern groups.
          </p>

          <div className="why-rvcr-grid-2col why-rvcr-solution-grid">
            <div className="why-rvcr-img-col">
              <img 
                src="/images/solution.png" 
                alt="The solution" 
                className="why-rvcr-featured-img solution-img-shadow"
              />
            </div>
            <div className="why-rvcr-content-col">
              <p className="why-rvcr-body-p">
                RVCR is the natural solution as it uses fossil fuel ever more efficiently producing lesser carbon emissions and at the same time is flexible towards the usage of green energy sources, hence bridging the gap between the two. VCR feature is empirically known to be ‘the answer’ to the current challenges of efficiency and environment related norms, however it remains elusive for limitation of conventional mechanism used in machines today.
              </p>
              <p className="why-rvcr-bold-lead">
                The RVCR solution the new base kinematic mechanism that makes VCR commercially viable.
              </p>
              <p className="why-rvcr-body-p">
                RVCR allows to unhook dependency from fossil fuel and revert to fossil fuel usage if required, thence avoiding conflict. The RVCR technology enabled products have unique features that makes them compacter and efficient. RVCR products in cost less to manufacture, install and operate.
              </p>
              <p className="why-rvcr-body-p">
                RVCR technology is a game changer and the products appeal to both establishment and requirements. Its varied applications do not require any disruption of existing manufacturing and industrial structures
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
