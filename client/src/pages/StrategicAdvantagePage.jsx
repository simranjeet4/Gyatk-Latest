import React from 'react';
import './StrategicAdvantagePage.css';

export default function StrategicAdvantagePage() {
  return (
    <div className="strategic-page-root">
      {/* 1. Hero Section */}
      <section className="strategic-hero">
        <div className="strategic-hero-overlay"></div>
        <div className="container strategic-hero-container">
          <h1 className="strategic-hero-title">STRATEGIC ADVANTAGES</h1>
          <p className="strategic-hero-subtitle">
            Adapting to change is necessary for survival, but choosing right solution is key to thriving with change, when others struggle.
          </p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="strategic-section strategic-overview-section">
        <div className="container strategic-overview-container">
          <div className="overview-logo-col">
            <img 
              src="/images/zero-carbon-badge.png" 
              alt="Zero Carbon Badge" 
              className="zero-carbon-logo-img"
            />
          </div>
          <div className="overview-text-col">
            <h2 className="strategic-heading-title">Overview</h2>
            <p className="overview-lead-text">
              RVCR technology is a long-term strategic option for leading the ‘Zero Carbon’ transition.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Background Section */}
      <section className="strategic-section strategic-background-section">
        <div className="container strategic-background-container">
          <div className="background-text-col">
            <h2 className="strategic-heading-title">Background</h2>
            <p className="background-p">
              Preparedness towards newer stricter climate regulation has seen companies investing in newer green product verticals. The disruption of conventional product line by the pandemic, has further caused companies to move completely towards the new verticals. However, the transition is not easy as the green product solutions are neither mature nor sustainable to be the mainstay of businesses.
            </p>
            <p className="background-p highlight-p">
              In this scenario RVCR helps you lead the change needed and cater to ‘Zero Carbon’ market drivers. The strategic advantages of rvcr.
            </p>
          </div>
          <div className="background-graphics-col">
            <img 
              src="/images/carbon-transition.jpg" 
              alt="Carbon Transition & Emissions Comparison" 
              className="background-transition-img"
            />
          </div>
        </div>
      </section>

      {/* 4. Blue Callout Banner Box */}
      <section className="strategic-section strategic-callout-section">
        <div className="container">
          <div className="callout-banner-card">
            <h3 className="callout-title">EARLY ADOPTION ADVANTAGES</h3>
            <p className="callout-sub">
              Early adoption of superior RVCR technology helps you gain long term strategic advantages.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Early Adoption Advantages 2x2 Grid Section */}
      <section className="strategic-section strategic-advantages-grid-section">
        <div className="container">
          <div className="advantages-2col-grid">
            {/* Column 1 */}
            <div className="adv-grid-col">
              <div className="adv-block">
                <h3 className="adv-block-title">Market entry ease</h3>
                <p className="adv-block-text">
                  RVCR deep tech is a paradigm shift in Technology. It’s about creating newer markets. Products with never before capabilities and functionalities. Early adopters become early learners and take the lead in shaping life cycle management process.
                </p>
                <p className="adv-block-text">
                  The moving inroads into a market before anyone else lets you establish as pioneers and brand leaders. This again makes it easy to capture the imagination of market and gain control over product launch/ further release. The product grounding and sense check results would help in shaping right policies.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="adv-grid-col">
              <div className="adv-block">
                <h3 className="adv-block-title">Creating post entry barriers</h3>
                <p className="adv-block-text">
                  Being an early players gives you the 1 st movers advantage and be in the pole position to shape strategies for leveraging the leadership position. The commercial exclusivity with IPR licensing is a key asset RVCR offers.
                </p>
              </div>

              <div className="adv-block">
                <h3 className="adv-block-title">Core competency</h3>
                <p className="adv-block-text">
                  RVCR is not just about a product- Its about an entire range of products. The key root technology for a product application permits both incremental and disruptive innovation in their respective markets. Hence RVCR isn’t just product technology rather it brings in core competency for a creating an array of customized products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Competitive Advantage Section (Light Blue / Grey Background) */}
      <section className="strategic-section competitive-advantage-section">
        <div className="container">
          <h2 className="strategic-heading-title main-comp-title">The Competitive Advantage</h2>

          {/* Sub-item 1 */}
          <div className="comp-item-row">
            <div className="comp-item-media">
              <img 
                src="/images/influence.jpg" 
                alt="Influence the nature competition" 
                className="comp-item-img"
              />
            </div>
            <div className="comp-item-content">
              <h3 className="comp-item-title">Influence the nature competition</h3>
              <p className="comp-item-text">
                Being a technology leader of a productive change gets one in the position to influence market opinion including the regulating bodies. The advantage of being in the position to define alternative Industrial polices are a key to influencing other stake holders and hence the nature of competition. RVCR hence leads you to shape the market and maximize market share.
              </p>
            </div>
          </div>

          {/* Sub-item 2 */}
          <div className="comp-item-row no-media">
            <div className="comp-item-content full-width">
              <h3 className="comp-item-title">Influence the supply chain</h3>
              <p className="comp-item-text">
                Being in position of influencing the demand also means ability to influence the supplier and distributors. The relationship with supply and value chain partners are key to any business. The RVCR advantage creates FOMO (Fear of missing out) for the technology leader to leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pre-emptive product preparedness Full-Width Background Banner Section */}
      <section className="strategic-section preemptive-section">
        <div className="container preemptive-container">
          <div className="preemptive-content-wrap">
            <h3 className="preemptive-title">Pre-emptive product preparedness</h3>
            <p className="preemptive-text">
              The core-competency allowing to create newer products and plan its schedule launch is a key strength. The leverage you gain from matching product planning and launching with strategic market considerations, is key to retain leadership position. By the time competitor catches up the market landscape is altered with newer product functionalities. RVCR Deep tech is in a unique position to let attain Pre-emptive product preparedness and launch capability.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Leapfrogging Market Leaders Section */}
      <section className="strategic-section leapfrogging-section">
        <div className="container">
          <div className="leapfrogging-header-box">
            <h3 className="leapfrogging-box-title">Leapfrogging Market Leaders</h3>
          </div>

          <div className="leapfrogging-body-text">
            <p>
              RVCR mechanism-based products require high end engineering competencies and Industrial technological base. The stake-holders here are vested in large Industrious facilities built and perfected over generations. The technological leadership here is legacy of business and engineering process refinement through time. Many of them trace back these legacies to the industrial revolution. Hence its nearly impossible to catchup the leader by chasing strategies. By the time one builds competencies the leader has already mover ahead. The only way possible is to leapfrog ahead of the leader with new concept technologies.
            </p>
            <p>
              The in-cycle investments in existing project and deep entrenchments in existing facilities are a major retardant for Industry majors. However, their urge for continued leadership is also formidable. Hence RVCR is an opportunity for both the existing leaders and new ambitious players.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
