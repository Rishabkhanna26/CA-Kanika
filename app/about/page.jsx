"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Target,
  Users,
} from "lucide-react";
import "./style.css";

export default function AboutPage() {
  const qualifications = [
    {
      icon: <GraduationCap className="ks-about-qual-icon" />,
      title: "Chartered Accountant",
      description: "Institute of Chartered Accountants of India (ICAI)",
    },
    {
      icon: <BookOpen className="ks-about-qual-icon" />,
      title: "Advanced Taxation",
      description: "Specialized in Direct and Indirect Taxation",
    },
    {
      icon: <Award className="ks-about-qual-icon" />,
      title: "Certified Professional",
      description: "Multiple certifications in finance and compliance",
    },
  ];

  const values = [
    {
      icon: <Target className="ks-about-value-icon" />,
      title: "Integrity",
      description: "Honest and transparent financial practices",
    },
    {
      icon: <Users className="ks-about-value-icon" />,
      title: "Client Focus",
      description: "Personalized attention to every client",
    },
    {
      icon: <Briefcase className="ks-about-value-icon" />,
      title: "Excellence",
      description: "Delivering exceptional service with attention to detail",
    },
  ];

  return (
    <div className="ks-about-root">
      {/* Intro Section */}
      <section className="ks-about-section ks-about-section-light">
        <div className="ks-about-container">
          <div className="ks-about-grid">
            {/* Left text */}
            <div className="ks-about-left">
              <h1 className="ks-about-title">
                About <span className="ks-about-title-highlight">CA Kanika Sharma</span>
              </h1>
              <p className="ks-about-lead">
                With a strong foundation in chartered accountancy and over a
                decade of experience, CA Kanika Sharma has been helping
                individuals and businesses navigate complex financial and
                regulatory landscapes with confidence.
              </p>
              <p className="ks-about-body">
                From tax planning and audit to business advisory and compliance
                management, the focus is always on providing clear, practical,
                and customized solutions that align with your goals.
              </p>

              <ul className="ks-about-bullets">
                <li>✔ Deep expertise in taxation, audit, and financial advisory</li>
                <li>✔ Focus on long-term relationships and consistent support</li>
                <li>✔ Commitment to transparency, ethics, and professionalism</li>
              </ul>
            </div>

            {/* Right card */}
            <div className="ks-about-right">
              <div className="ks-about-right-frame">
                <div className="ks-about-right-card">
                  <h2 className="ks-about-right-title">Professional Profile</h2>
                  <p className="ks-about-right-subtitle">
                    Qualifications & Expertise
                  </p>

                  <div className="ks-about-qual-list">
                    {qualifications.map((qual, index) => (
                      <div key={index} className="ks-about-qual-item">
                        <div className="ks-about-qual-icon-wrap">
                          {qual.icon}
                        </div>
                        <div>
                          <h3 className="ks-about-qual-title">{qual.title}</h3>
                          <p className="ks-about-qual-desc">{qual.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="ks-about-highlight-box">
                    <p className="ks-about-highlight-text">
                      “Our approach is to combine technical expertise with a
                      deep understanding of each client&apos;s unique financial
                      journey.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="ks-about-section ks-about-section-white">
        <div className="ks-about-container">
          <div className="ks-about-values-header">
            <h2 className="ks-about-values-title">
              Core <span className="ks-about-title-highlight">Values</span>
            </h2>
            <p className="ks-about-values-subtitle">
              Every engagement is guided by strong professional ethics and a
              commitment to long-term success for clients.
            </p>
          </div>

          <div className="ks-about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="ks-about-value-card">
                <div className="ks-about-value-icon-wrap">{value.icon}</div>
                <h3 className="ks-about-value-title">{value.title}</h3>
                <p className="ks-about-value-desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
