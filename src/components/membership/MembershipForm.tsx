"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

export const CATEGORIES = [
  { id: "1", title: "Medical and Dental Doctor", desc: "For MBBS/BDS-qualified physicians and dentists registered with PMDC" },
  { id: "2", title: "Doctor of Physical Therapy (DPT)", desc: "For physiotherapy graduates with recognised DPT & PPTA membership" },
  { id: "3", title: "Allied Health Professional", desc: "For technologists, lab technicians, radiographers, nutritionists, LHVs, etc." },
  { id: "4", title: "Nursing Professional", desc: "For registered nurses licensed with Pakistan Nursing Council (PNC)" },
  { id: "5", title: "Pharmacist", desc: "For qualified pharmacists registered with Pharmacy Council of Pakistan (PPC)" },
  { id: "6", title: "International Member", desc: "For overseas Pakistani health professionals with foreign licensure" },
  { id: "7", title: "Medical Student Member", desc: "For students currently enrolled in an MBBS or BDS programme" },
  { id: "8", title: "Allied Health Student", desc: "For students enrolled in nursing, pharmacy, DPT, or allied health" },
  { id: "9", title: "Volunteer", desc: "For healthcare or non-healthcare supporters giving time and skills" },
] as const;

export const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Gilgit-Baltistan",
  "Azad Jammu & Kashmir",
  "Overseas / International",
];

export const VOLUNTEER_AREAS = [
  "Tarbiah / Dawah",
  "Medical Camps",
  "Disaster Relief",
  "Health Education",
  "Media / Social Media",
  "IT / Data",
  "Event Organisation",
  "Research & Publications",
];

export const HOW_KNOWN_OPTIONS = [
  "Social Media",
  "Friend / Colleague / Family Member",
  "MMM Event / Medical Camp",
  "University / Institution",
  "MMM Website",
  "Other",
];

export function MembershipForm() {
  const [category, setCategory] = useState<string>("1");

  // Section 2: Personal Identification
  const [fullName, setFullName] = useState("");
  const [cnic, setCnic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("Pakistani");
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("Punjab");
  const [countryResidence, setCountryResidence] = useState("");
  const [cityResidence, setCityResidence] = useState("");

  // Section 3: Academic & Professional Qualification (Categories 1-6)
  const [basicQualification, setBasicQualification] = useState("");
  const [institution, setInstitution] = useState("");
  const [yearGraduation, setYearGraduation] = useState("");
  const [postgradQualification, setPostgradQualification] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [designationWorkplace, setDesignationWorkplace] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");

  // Section 4: Student Details (Categories 7-8)
  const [studentInstitution, setStudentInstitution] = useState("");
  const [studentProgram, setStudentProgram] = useState("");
  const [studentYearOfStudy, setStudentYearOfStudy] = useState("");
  const [studentRollNo, setStudentRollNo] = useState("");
  const [studentGradYear, setStudentGradYear] = useState("");
  const [studentIdFileName, setStudentIdFileName] = useState("");

  // Section 5: Regulatory Registration (Categories 1-6)
  // Cat 1: PMDC
  const [pmdcRegNo, setPmdcRegNo] = useState("");
  const [pmdcCategory, setPmdcCategory] = useState("Permanent");
  const [pmdcDate, setPmdcDate] = useState("");
  const [pmdcValidity, setPmdcValidity] = useState("");
  const [cpspNo, setCpspNo] = useState("");

  // Cat 2: PPTA
  const [pptaNo, setPptaNo] = useState("");
  const [pptaDate, setPptaDate] = useState("");
  const [healthcareCommNo, setHealthcareCommNo] = useState("");

  // Cat 3: Allied
  const [alliedCouncilName, setAlliedCouncilName] = useState("");
  const [alliedRegNo, setAlliedRegNo] = useState("");
  const [alliedCadre, setAlliedCadre] = useState("");
  const [alliedDateIssued, setAlliedDateIssued] = useState("");
  const [alliedValidity, setAlliedValidity] = useState("");

  // Cat 4: Nursing
  const [pncRegNo, setPncRegNo] = useState("");
  const [pncProvince, setPncProvince] = useState("");
  const [pncValidity, setPncValidity] = useState("");

  // Cat 5: Pharmacy
  const [ppcRegNo, setPpcRegNo] = useState("");
  const [ppcCategory, setPpcCategory] = useState("Pharmacist-A");
  const [ppcDate, setPpcDate] = useState("");
  const [ppcValidity, setPpcValidity] = useState("");

  // Cat 6: International
  const [intlCountryRegulator, setIntlCountryRegulator] = useState("");
  const [intlRegLicenceNo, setIntlRegLicenceNo] = useState("");
  const [intlDate, setIntlDate] = useState("");
  const [intlValidity, setIntlValidity] = useState("");
  const [intlOriginProof, setIntlOriginProof] = useState("");

  const [regCertFileName, setRegCertFileName] = useState("");

  // Section 6: MMM-Specific
  const [nearestChapter, setNearestChapter] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [howKnown, setHowKnown] = useState("");
  const [howKnownOther, setHowKnownOther] = useState("");
  const [volunteerInterests, setVolunteerInterests] = useState<string[]>([]);
  const [activityAvailability, setActivityAvailability] = useState("");
  const [priorAffiliation, setPriorAffiliation] = useState("");
  const [consentCommunications, setConsentCommunications] = useState(true);
  const [membershipFeeCategory, setMembershipFeeCategory] = useState("");
  const [paymentReferenceNo, setPaymentReferenceNo] = useState("");

  // Section 7: Declaration
  const [declarationAgreed, setDeclarationAgreed] = useState(false);
  const [applicantSignature, setApplicantSignature] = useState("");
  const [declarationDate, setDeclarationDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [countersignature, setCountersignature] = useState("");
  const [countersignatureDate, setCountersignatureDate] = useState("");

  // Validation & Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const isProfessional = ["1", "2", "3", "4", "5", "6"].includes(category);
  const isStudent = ["7", "8"].includes(category);
  const isInternational = category === "6";

  const handleInterestToggle = (area: string) => {
    if (volunteerInterests.includes(area)) {
      setVolunteerInterests(volunteerInterests.filter((item) => item !== area));
    } else {
      setVolunteerInterests([...volunteerInterests, area]);
    }
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFileName: (name: string) => void
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) errs.fullName = "Full name (as per CNIC) is required.";
    if (!cnic.trim()) {
      errs.cnic = "CNIC / B-Form / NICOP No. is required.";
    }
    if (!dob) errs.dob = "Date of birth is required.";
    if (!gender) errs.gender = "Please select your gender.";
    if (!nationality.trim()) errs.nationality = "Nationality is required.";
    if (!mobileNumber.trim()) errs.mobileNumber = "Mobile number is required.";
    if (!whatsappNumber.trim()) errs.whatsappNumber = "WhatsApp number is required.";
    if (!email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!address.trim()) errs.address = "Current mailing address is required.";
    if (!city.trim()) errs.city = "City is required.";
    if (!district.trim()) errs.district = "District is required.";
    if (!province) errs.province = "Please select your province.";

    if (isInternational) {
      if (!countryResidence.trim())
        errs.countryResidence = "Country of residence is required for international members.";
      if (!cityResidence.trim())
        errs.cityResidence = "City of residence is required for international members.";
    }

    if (isProfessional) {
      if (!basicQualification.trim())
        errs.basicQualification = "Basic qualification is required for healthcare professionals.";
      if (!institution.trim())
        errs.institution = "Graduating institution is required.";
      if (!yearGraduation.trim())
        errs.yearGraduation = "Year of graduation is required.";

      // Category-specific required registration numbers
      if (category === "1" && !pmdcRegNo.trim()) {
        errs.pmdcRegNo = "PMDC Registration Number is required.";
      } else if (category === "2" && !pptaNo.trim()) {
        errs.pptaNo = "PPTA Membership Number is required.";
      } else if (category === "3" && !alliedRegNo.trim()) {
        errs.alliedRegNo = "Registration / Certification Number is required.";
      } else if (category === "4" && !pncRegNo.trim()) {
        errs.pncRegNo = "PNC Registration Number is required.";
      } else if (category === "5" && !ppcRegNo.trim()) {
        errs.ppcRegNo = "PPC Registration Number is required.";
      } else if (category === "6") {
        if (!intlCountryRegulator.trim())
          errs.intlCountryRegulator = "Foreign regulator & country is required.";
        if (!intlRegLicenceNo.trim())
          errs.intlRegLicenceNo = "Registration / licence number is required.";
        if (!intlOriginProof.trim())
          errs.intlOriginProof = "Proof of Pakistani origin is required.";
      }
    }

    if (isStudent) {
      if (!studentInstitution.trim())
        errs.studentInstitution = "Institution name & campus is required for student members.";
      if (!studentProgram.trim())
        errs.studentProgram = "Academic programme is required.";
      if (!studentYearOfStudy.trim())
        errs.studentYearOfStudy = "Current year of study is required.";
    }

    if (!nearestChapter.trim()) {
      errs.nearestChapter = "Please specify your nearest MMM Chapter / Activity Centre.";
    }

    if (!declarationAgreed) {
      errs.declarationAgreed = "You must agree to the declaration and code of conduct to apply.";
    }
    if (!applicantSignature.trim()) {
      errs.applicantSignature = "Applicant signature (full legal name) is required.";
    }
    if (!declarationDate) {
      errs.declarationDate = "Date of declaration is required.";
    }

    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to the first error element
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Realistic client-side submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({
        categoryName: CATEGORIES.find((c) => c.id === category)?.title || "Member",
        fullName,
        cnic,
        email,
        mobileNumber,
        city,
        province,
        submissionRef: `MMM-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString("en-PK", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
      // Scroll to top of the confirmation view
      const formTop = document.getElementById("application-form");
      if (formTop) {
        formTop.scrollIntoView({ behavior: "smooth" });
      }
    }, 1200);
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-7 sm:p-10 shadow-soft">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <span className="mt-4 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            Application Received
          </span>

          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-black text-[#0A1020]">
            Jazakallah Khair, {submittedData.fullName}!
          </h3>

          <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-[#4B5563]">
            Your online membership application for <span className="font-semibold text-[#0A1020]">{submittedData.categoryName}</span> has been successfully logged with reference ID <span className="font-mono font-bold text-[#075BD6]">{submittedData.submissionRef}</span>.
          </p>

          <div className="mt-8 w-full max-w-xl overflow-hidden rounded-2xl border border-emerald-200 bg-white p-6 text-left shadow-xs">
            <h4 className="border-b border-slate-100 pb-3 font-display text-base font-bold text-[#0A1020]">
              Submission Summary
            </h4>
            <dl className="mt-3 grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-slate-500">Applicant Name:</dt>
                <dd className="font-semibold text-[#0A1020]">{submittedData.fullName}</dd>
              </div>
              <div>
                <dt className="text-slate-500">CNIC / Identification:</dt>
                <dd className="font-semibold text-[#0A1020]">{submittedData.cnic}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Membership Category:</dt>
                <dd className="font-semibold text-[#0A1020]">{submittedData.categoryName}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Submission Date:</dt>
                <dd className="font-semibold text-[#0A1020]">{submittedData.date}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Contact Email:</dt>
                <dd className="font-semibold text-[#0A1020]">{submittedData.email}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Location:</dt>
                <dd className="font-semibold text-[#0A1020]">{submittedData.city}, {submittedData.province}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 max-w-xl rounded-xl border border-blue-100 bg-[#F0F7FF] p-4 text-left text-xs leading-relaxed text-[#334155]">
            <strong className="font-bold text-[#075BD6]">Next Verification Steps:</strong>
            <p className="mt-1">
              Our membership secretariat in Johar Town, Lahore will review and verify your details with the relevant council or institution. If any additional supporting documents are needed, our coordinator will reach out to you via WhatsApp or email.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setSubmittedData(null);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-5 py-2.5 sm:px-6 sm:py-3 font-display text-[0.84rem] xs:text-sm font-bold text-[#334155] whitespace-nowrap min-h-[44px] max-w-full transition-all hover:border-[#075BD6] hover:text-[#075BD6]"
            >
              Fill Another Application
            </button>
            <a
              href="/MMM_Pakistan_Membership_Application_Form.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#075BD6] px-5 py-2.5 sm:px-6 sm:py-3 font-display text-[0.84rem] xs:text-sm font-bold text-white whitespace-nowrap min-h-[44px] max-w-full shadow-soft transition-all hover:bg-[#0649B8]"
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Offline PDF Form</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      id="membership-form-element"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-10 w-full min-w-0 max-w-full"
      aria-label="MMM Pakistan Membership Application Form"
    >
      {/* Required fields notice */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DCE2EA] pb-5 text-sm text-[#4B5563]">
        <p>
          Please complete all required fields indicated with an asterisk (
          <span className="text-[#EF3B19] font-bold" aria-hidden="true">
            *
          </span>
          ).
        </p>
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#075BD6]">
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>Official Membership Application</span>
        </div>
      </div>

      {/* SECTION 1: MEMBERSHIP CATEGORY */}
      <section aria-labelledby="section-1-heading" className="space-y-4 min-w-0 max-w-full">
        <div className="border-b border-[#DCE2EA] pb-3.5">
          {/* Mobile Section Badge */}
          <div className="sm:hidden mb-2">
            <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-[#075BD6]">
              SECTION 1
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#075BD6] text-xs font-black text-white">
              1
            </span>
            <div>
              <h3 id="section-1-heading" className="font-display text-base sm:text-xl font-black text-[#0A1020] leading-snug">
                <span className="hidden sm:inline">SECTION 1 - </span>MEMBERSHIP CATEGORY (Select one)
              </h3>
              <p className="text-xs text-[#6B7280]">Select the category that corresponds to your profession or status.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 min-w-0 max-w-full">
          {CATEGORIES.map((cat) => {
            const isSelected = category === cat.id;
            return (
              <label
                key={cat.id}
                htmlFor={`cat-${cat.id}`}
                className={`relative flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all duration-200 ${isSelected
                    ? "border-[#075BD6] bg-[#F3F7FF] ring-2 ring-[#075BD6]/30 shadow-xs"
                    : "border-[#DCE2EA] bg-white hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    id={`cat-${cat.id}`}
                    name="membershipCategory"
                    value={cat.id}
                    checked={isSelected}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 h-4 w-4 shrink-0 text-[#075BD6] focus:ring-[#075BD6]"
                  />
                  <div>
                    <span className="font-display text-sm font-black text-[#0A1020]">
                      {cat.id}. {cat.title}
                    </span>
                    <p className="mt-1 text-xs leading-normal text-[#4B5563]">{cat.desc}</p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: PERSONAL IDENTIFICATION */}
      <section aria-labelledby="section-2-heading" className="space-y-5 min-w-0 max-w-full">
        <div className="border-b border-[#DCE2EA] pb-3.5">
          {/* Mobile Section Badge */}
          <div className="sm:hidden mb-2">
            <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-[#075BD6]">
              SECTION 2
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#075BD6] text-xs font-black text-white">
              2
            </span>
            <div>
              <h3 id="section-2-heading" className="font-display text-base sm:text-xl font-black text-[#0A1020] leading-snug">
                <span className="hidden sm:inline">SECTION 2 - </span>PERSONAL IDENTIFICATION
              </h3>
              <p className="text-xs text-[#6B7280]">Accurate personal details as recorded on your national identification.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
          {/* Full Name */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="fullName" className="block text-sm font-bold text-[#0A1020]">
              Full Name (as per CNIC) <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Muhammad Abdullah"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.fullName ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
              aria-invalid={errors.fullName ? "true" : undefined}
            />
            {errors.fullName && <p className="mt-1 text-xs text-[#EF3B19]">{errors.fullName}</p>}
          </div>

          {/* CNIC */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="cnic" className="block text-sm font-bold text-[#0A1020]">
              CNIC / B-Form / NICOP No. <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="text"
              id="cnic"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              placeholder="e.g. 35201-1234567-1"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.cnic ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
              aria-invalid={errors.cnic ? "true" : undefined}
            />
            {errors.cnic && <p className="mt-1 text-xs text-[#EF3B19]">{errors.cnic}</p>}
          </div>

          {/* Date of Birth */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="dob" className="block text-sm font-bold text-[#0A1020]">
              Date of Birth <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.dob ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
              aria-invalid={errors.dob ? "true" : undefined}
            />
            {errors.dob && <p className="mt-1 text-xs text-[#EF3B19]">{errors.dob}</p>}
          </div>

          {/* Gender */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="gender" className="block text-sm font-bold text-[#0A1020]">
              Gender <span className="text-[#EF3B19]">*</span>
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.gender ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Prefer not to say / Other</option>
            </select>
            {errors.gender && <p className="mt-1 text-xs text-[#EF3B19]">{errors.gender}</p>}
          </div>

          {/* Nationality */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="nationality" className="block text-sm font-bold text-[#0A1020]">
              Nationality <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="text"
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder="e.g. Pakistani"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.nationality ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.nationality && <p className="mt-1 text-xs text-[#EF3B19]">{errors.nationality}</p>}
          </div>

          {/* Mobile Number */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="mobileNumber" className="block text-sm font-bold text-[#0A1020]">
              Mobile Number <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="e.g. 0300-1234567"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.mobileNumber ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.mobileNumber && <p className="mt-1 text-xs text-[#EF3B19]">{errors.mobileNumber}</p>}
          </div>

          {/* WhatsApp Number */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="whatsappNumber" className="block text-sm font-bold text-[#0A1020]">
              WhatsApp Number <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="e.g. +92 300 1234567"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.whatsappNumber ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.whatsappNumber && <p className="mt-1 text-xs text-[#EF3B19]">{errors.whatsappNumber}</p>}
          </div>

          {/* Email Address */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="email" className="block text-sm font-bold text-[#0A1020]">
              Email Address <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. doctor@example.com"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.email ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.email && <p className="mt-1 text-xs text-[#EF3B19]">{errors.email}</p>}
          </div>

          {/* Current Mailing Address */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="address" className="block text-sm font-bold text-[#0A1020]">
              Current Mailing Address <span className="text-[#EF3B19]">*</span>
            </label>
            <textarea
              id="address"
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House/Street/Building, Area, Postal Code"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.address ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.address && <p className="mt-1 text-xs text-[#EF3B19]">{errors.address}</p>}
          </div>

          {/* City */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="city" className="block text-sm font-bold text-[#0A1020]">
              City <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Lahore"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.city ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.city && <p className="mt-1 text-xs text-[#EF3B19]">{errors.city}</p>}
          </div>

          {/* District */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="district" className="block text-sm font-bold text-[#0A1020]">
              District <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="text"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="e.g. Lahore / DG Khan / Multan"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.district ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.district && <p className="mt-1 text-xs text-[#EF3B19]">{errors.district}</p>}
          </div>

          {/* Province */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="province" className="block text-sm font-bold text-[#0A1020]">
              Province <span className="text-[#EF3B19]">*</span>
            </label>
            <select
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            >
              {PROVINCES.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>

          {/* International Member Specific Fields */}
          <div className="sm:col-span-2 min-w-0 max-w-full rounded-xl border border-blue-100 bg-[#F8FAFD] p-4">
            <p className="text-xs font-semibold text-[#075BD6]">
              International Members: please also complete the country/city of residence field below.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
              <div className="min-w-0 max-w-full">
                <label htmlFor="countryResidence" className="block text-xs font-bold text-[#0A1020]">
                  Country of Residence (International Members) {isInternational && <span className="text-[#EF3B19]">*</span>}
                </label>
                <input
                  type="text"
                  id="countryResidence"
                  value={countryResidence}
                  onChange={(e) => setCountryResidence(e.target.value)}
                  placeholder="e.g. United Kingdom / USA / Saudi Arabia"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.countryResidence ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.countryResidence && (
                  <p className="mt-1 text-xs text-[#EF3B19]">{errors.countryResidence}</p>
                )}
              </div>
              <div className="min-w-0 max-w-full">
                <label htmlFor="cityResidence" className="block text-xs font-bold text-[#0A1020]">
                  City of Residence (International Members) {isInternational && <span className="text-[#EF3B19]">*</span>}
                </label>
                <input
                  type="text"
                  id="cityResidence"
                  value={cityResidence}
                  onChange={(e) => setCityResidence(e.target.value)}
                  placeholder="e.g. London / Houston / Riyadh"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.cityResidence ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.cityResidence && (
                  <p className="mt-1 text-xs text-[#EF3B19]">{errors.cityResidence}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ACADEMIC & PROFESSIONAL QUALIFICATION (Categories 1-6 only) */}
      <section
        aria-labelledby="section-3-heading"
        className={`min-w-0 max-w-full overflow-hidden space-y-5 rounded-2xl border p-4 xs:p-5 sm:p-6 transition-all ${isProfessional
            ? "border-[#075BD6]/30 bg-white shadow-xs"
            : "border-[#DCE2EA] bg-slate-50/70 opacity-80"
          }`}
      >
        <div className="border-b border-[#DCE2EA] pb-3.5">
          {/* Mobile Section Badge */}
          <div className="sm:hidden mb-2">
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-black uppercase tracking-wider ${isProfessional
                  ? "bg-blue-100 text-[#075BD6]"
                  : "bg-slate-200 text-slate-700"
                }`}
            >
              SECTION 3
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white ${isProfessional ? "bg-[#075BD6]" : "bg-slate-400"
                  }`}
              >
                3
              </span>
              <div>
                <h3 id="section-3-heading" className="font-display text-base sm:text-xl font-black text-[#0A1020] leading-snug">
                  <span className="hidden sm:inline">SECTION 3 - </span>ACADEMIC & PROFESSIONAL QUALIFICATION
                </h3>
                <span className="text-xs font-semibold text-[#075BD6]">
                  (Categories 1-6 only)
                </span>
              </div>
            </div>

            {!isProfessional && (
              <div className="mt-1 sm:mt-0">
                <span className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                  Not required for your category
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs italic text-[#4B5563]">
          Applicants in Categories 7-9 may skip to Section 4 / 5 as applicable.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
          {/* Basic Qualification */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="basicQualification" className="block text-sm font-bold text-[#0A1020]">
              Basic Qualification (e.g. MBBS, BDS, DPT, B.Pharm, Pharm.D, B.Sc. Nursing){" "}
              {isProfessional && <span className="text-[#EF3B19]">*</span>}
            </label>
            <input
              type="text"
              id="basicQualification"
              value={basicQualification}
              onChange={(e) => setBasicQualification(e.target.value)}
              placeholder="e.g. MBBS / BDS / DPT"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.basicQualification ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
            />
            {errors.basicQualification && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.basicQualification}</p>
            )}
          </div>

          {/* Institution */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="institution" className="block text-sm font-bold text-[#0A1020]">
              Institution {isProfessional && <span className="text-[#EF3B19]">*</span>}
            </label>
            <input
              type="text"
              id="institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="e.g. King Edward Medical University"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.institution ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
            />
            {errors.institution && <p className="mt-1 text-xs text-[#EF3B19]">{errors.institution}</p>}
          </div>

          {/* Year of Graduation */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="yearGraduation" className="block text-sm font-bold text-[#0A1020]">
              Year of Graduation {isProfessional && <span className="text-[#EF3B19]">*</span>}
            </label>
            <input
              type="text"
              id="yearGraduation"
              value={yearGraduation}
              onChange={(e) => setYearGraduation(e.target.value)}
              placeholder="e.g. 2018"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.yearGraduation ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
            />
            {errors.yearGraduation && <p className="mt-1 text-xs text-[#EF3B19]">{errors.yearGraduation}</p>}
          </div>

          {/* Postgraduate Qualification */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="postgradQualification" className="block text-sm font-bold text-[#0A1020]">
              Postgraduate Qualification & Awarding Body (if any - e.g. FCPS, MCPS, MD, MS, MPH)
            </label>
            <input
              type="text"
              id="postgradQualification"
              value={postgradQualification}
              onChange={(e) => setPostgradQualification(e.target.value)}
              placeholder="e.g. FCPS (Internal Medicine) - CPSP"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Area of Specialisation / Clinical Interest */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="specialisation" className="block text-sm font-bold text-[#0A1020]">
              Area of Specialisation / Clinical Interest (if any)
            </label>
            <input
              type="text"
              id="specialisation"
              value={specialisation}
              onChange={(e) => setSpecialisation(e.target.value)}
              placeholder="e.g. Emergency Medicine, Paediatrics, Ultrasound, Trauma Triage"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Current Designation & Place of Work */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="designationWorkplace" className="block text-sm font-bold text-[#0A1020]">
              Current Designation & Place of Work
            </label>
            <input
              type="text"
              id="designationWorkplace"
              value={designationWorkplace}
              onChange={(e) => setDesignationWorkplace(e.target.value)}
              placeholder="e.g. Medical Officer, Mayo Hospital Lahore"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Years of Professional Experience */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="yearsExperience" className="block text-sm font-bold text-[#0A1020]">
              Years of Professional Experience
            </label>
            <input
              type="text"
              id="yearsExperience"
              value={yearsExperience}
              onChange={(e) => setYearsExperience(e.target.value)}
              placeholder="e.g. 5 Years"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: ACADEMIC DETAILS - STUDENT MEMBERS (Categories 7-8 only) */}
      <section
        aria-labelledby="section-4-heading"
        className={`min-w-0 max-w-full overflow-hidden space-y-5 rounded-2xl border p-4 xs:p-5 sm:p-6 transition-all ${isStudent
            ? "border-[#075BD6]/30 bg-white shadow-xs"
            : "border-[#DCE2EA] bg-slate-50/70 opacity-80"
          }`}
      >
        <div className="border-b border-[#DCE2EA] pb-3.5">
          {/* Mobile Section Badge */}
          <div className="sm:hidden mb-2">
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-black uppercase tracking-wider ${isStudent
                  ? "bg-blue-100 text-[#075BD6]"
                  : "bg-slate-200 text-slate-700"
                }`}
            >
              SECTION 4
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white ${isStudent ? "bg-[#075BD6]" : "bg-slate-400"
                  }`}
              >
                4
              </span>
              <div>
                <h3 id="section-4-heading" className="font-display text-base sm:text-xl font-black text-[#0A1020] leading-snug">
                  <span className="hidden sm:inline">SECTION 4 - </span>ACADEMIC DETAILS - STUDENT MEMBERS
                </h3>
                <span className="text-xs font-semibold text-[#075BD6]">
                  (Categories 7-8 only)
                </span>
              </div>
            </div>

            {!isStudent && (
              <div className="mt-1 sm:mt-0">
                <span className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                  Not required for your category
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
          {/* Institution Name & Campus */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="studentInstitution" className="block text-sm font-bold text-[#0A1020]">
              Institution Name & Campus {isStudent && <span className="text-[#EF3B19]">*</span>}
            </label>
            <input
              type="text"
              id="studentInstitution"
              value={studentInstitution}
              onChange={(e) => setStudentInstitution(e.target.value)}
              placeholder="e.g. Allama Iqbal Medical College, Lahore"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.studentInstitution ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
            />
            {errors.studentInstitution && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.studentInstitution}</p>
            )}
          </div>

          {/* Programme */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="studentProgram" className="block text-sm font-bold text-[#0A1020]">
              Programme {isStudent && <span className="text-[#EF3B19]">*</span>}
            </label>
            <input
              type="text"
              id="studentProgram"
              value={studentProgram}
              onChange={(e) => setStudentProgram(e.target.value)}
              placeholder="e.g. MBBS / BDS / DPT / Pharm-D"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.studentProgram ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
            />
            {errors.studentProgram && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.studentProgram}</p>
            )}
          </div>

          {/* Current Year of Study */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="studentYearOfStudy" className="block text-sm font-bold text-[#0A1020]">
              Current Year of Study {isStudent && <span className="text-[#EF3B19]">*</span>}
            </label>
            <input
              type="text"
              id="studentYearOfStudy"
              value={studentYearOfStudy}
              onChange={(e) => setStudentYearOfStudy(e.target.value)}
              placeholder="e.g. 3rd Year / Final Year"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.studentYearOfStudy ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
            />
            {errors.studentYearOfStudy && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.studentYearOfStudy}</p>
            )}
          </div>

          {/* Roll / Student Registration No. */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="studentRollNo" className="block text-sm font-bold text-[#0A1020]">
              Roll / Student Registration No.
            </label>
            <input
              type="text"
              id="studentRollNo"
              value={studentRollNo}
              onChange={(e) => setStudentRollNo(e.target.value)}
              placeholder="e.g. 2022-AIMC-042"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Expected Year of Graduation */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="studentGradYear" className="block text-sm font-bold text-[#0A1020]">
              Expected Year of Graduation
            </label>
            <input
              type="text"
              id="studentGradYear"
              value={studentGradYear}
              onChange={(e) => setStudentGradYear(e.target.value)}
              placeholder="e.g. 2027"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Attachment notice */}
          <div className="sm:col-span-2 min-w-0 max-w-full rounded-xl border border-dashed border-[#DCE2EA] bg-slate-50/50 p-4">
            <label htmlFor="studentIdCard" className="block text-xs font-bold text-[#0A1020]">
              Please attach a copy of your valid student / college ID card.
            </label>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <input
                type="file"
                id="studentIdCard"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange(e, setStudentIdFileName)}
                className="text-xs text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-[#075BD6] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#0649B8] max-w-full"
              />
              {studentIdFileName && (
                <span className="text-xs font-semibold text-emerald-700 break-all">
                  Attached: {studentIdFileName}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REGULATORY COUNCIL / PROFESSIONAL BODY REGISTRATION (Categories 1-6 only) */}
      <section
        aria-labelledby="section-5-heading"
        className={`min-w-0 max-w-full overflow-hidden space-y-5 rounded-2xl border p-4 xs:p-5 sm:p-6 transition-all ${isProfessional
            ? "border-[#075BD6]/30 bg-white shadow-xs"
            : "border-[#DCE2EA] bg-slate-50/70 opacity-80"
          }`}
      >
        <div className="border-b border-[#DCE2EA] pb-3.5">
          {/* Mobile Section Badge */}
          <div className="sm:hidden mb-2">
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-black uppercase tracking-wider ${isProfessional
                  ? "bg-blue-100 text-[#075BD6]"
                  : "bg-slate-200 text-slate-700"
                }`}
            >
              SECTION 5
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white ${isProfessional ? "bg-[#075BD6]" : "bg-slate-400"
                  }`}
              >
                5
              </span>
              <div>
                <h3 id="section-5-heading" className="font-display text-base sm:text-xl font-black text-[#0A1020] leading-snug">
                  <span className="hidden sm:inline">SECTION 5 - </span>REGULATORY COUNCIL / PROFESSIONAL BODY REGISTRATION
                </h3>
                <span className="text-xs font-semibold text-[#075BD6]">
                  (Categories 1-6 only)
                </span>
              </div>
            </div>

            {!isProfessional && (
              <div className="mt-1 sm:mt-0">
                <span className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                  Not required for your category
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Subsection Based on Selected Category */}
        {category === "1" && (
          <div className="space-y-4 rounded-xl border border-blue-100 bg-[#F9FBFE] p-4 min-w-0 max-w-full">
            <h4 className="font-display text-sm font-black text-[#0A1020]">
              Category 1 - Medical and Dental Doctor: PMDC Registration
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
              <div className="min-w-0 max-w-full">
                <label htmlFor="pmdcRegNo" className="block text-xs font-bold text-[#0A1020]">
                  PMDC Registration No. <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="pmdcRegNo"
                  value={pmdcRegNo}
                  onChange={(e) => setPmdcRegNo(e.target.value)}
                  placeholder="e.g. 12345-P"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.pmdcRegNo ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.pmdcRegNo && <p className="mt-1 text-xs text-[#EF3B19]">{errors.pmdcRegNo}</p>}
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="pmdcCategory" className="block text-xs font-bold text-[#0A1020]">
                  Category (Provisional / Permanent)
                </label>
                <select
                  id="pmdcCategory"
                  value={pmdcCategory}
                  onChange={(e) => setPmdcCategory(e.target.value)}
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                >
                  <option value="Permanent">Permanent</option>
                  <option value="Provisional">Provisional</option>
                </select>
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="pmdcDate" className="block text-xs font-bold text-[#0A1020]">
                  Date of Registration
                </label>
                <input
                  type="date"
                  id="pmdcDate"
                  value={pmdcDate}
                  onChange={(e) => setPmdcDate(e.target.value)}
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="pmdcValidity" className="block text-xs font-bold text-[#0A1020]">
                  Validity / Renewal Status
                </label>
                <input
                  type="text"
                  id="pmdcValidity"
                  value={pmdcValidity}
                  onChange={(e) => setPmdcValidity(e.target.value)}
                  placeholder="e.g. Valid until Dec 2026"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="sm:col-span-2 min-w-0 max-w-full">
                <label htmlFor="cpspNo" className="block text-xs font-bold text-[#0A1020]">
                  CPSP Fellow / Member No. (if in postgraduate training)
                </label>
                <input
                  type="text"
                  id="cpspNo"
                  value={cpspNo}
                  onChange={(e) => setCpspNo(e.target.value)}
                  placeholder="e.g. CPSP-12345 (Optional)"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>
            </div>
          </div>
        )}

        {category === "2" && (
          <div className="space-y-4 rounded-xl border border-blue-100 bg-[#F9FBFE] p-4 min-w-0 max-w-full">
            <h4 className="font-display text-sm font-black text-[#0A1020]">
              Category 2 - Doctor of Physical Therapy (DPT): PPTA Membership
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
              <div className="min-w-0 max-w-full">
                <label htmlFor="pptaNo" className="block text-xs font-bold text-[#0A1020]">
                  PPTA Membership No. <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="pptaNo"
                  value={pptaNo}
                  onChange={(e) => setPptaNo(e.target.value)}
                  placeholder="e.g. PPTA-9876"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.pptaNo ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.pptaNo && <p className="mt-1 text-xs text-[#EF3B19]">{errors.pptaNo}</p>}
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="pptaDate" className="block text-xs font-bold text-[#0A1020]">
                  Date Issued
                </label>
                <input
                  type="date"
                  id="pptaDate"
                  value={pptaDate}
                  onChange={(e) => setPptaDate(e.target.value)}
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="sm:col-span-2 min-w-0 max-w-full">
                <label htmlFor="healthcareCommNo" className="block text-xs font-bold text-[#0A1020]">
                  Healthcare Commission Registration No. (if applicable)
                </label>
                <input
                  type="text"
                  id="healthcareCommNo"
                  value={healthcareCommNo}
                  onChange={(e) => setHealthcareCommNo(e.target.value)}
                  placeholder="e.g. PHC-12345"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>
            </div>
          </div>
        )}

        {category === "3" && (
          <div className="space-y-4 rounded-xl border border-blue-100 bg-[#F9FBFE] p-4 min-w-0 max-w-full">
            <h4 className="font-display text-sm font-black text-[#0A1020]">
              Category 3 - Allied Health Professional
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
              <div className="sm:col-span-2 min-w-0 max-w-full">
                <label htmlFor="alliedCouncilName" className="block text-xs font-bold text-[#0A1020]">
                  Council / Professional Body Name (e.g. PNC for midwives/LHVs; Healthcare Commission; institutional certification)
                </label>
                <input
                  type="text"
                  id="alliedCouncilName"
                  value={alliedCouncilName}
                  onChange={(e) => setAlliedCouncilName(e.target.value)}
                  placeholder="e.g. Punjab Healthcare Commission / PNC / Institutional"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="alliedRegNo" className="block text-xs font-bold text-[#0A1020]">
                  Registration / Certification No. <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="alliedRegNo"
                  value={alliedRegNo}
                  onChange={(e) => setAlliedRegNo(e.target.value)}
                  placeholder="e.g. AHP-5678"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.alliedRegNo ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.alliedRegNo && <p className="mt-1 text-xs text-[#EF3B19]">{errors.alliedRegNo}</p>}
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="alliedCadre" className="block text-xs font-bold text-[#0A1020]">
                  Category / Cadre
                </label>
                <input
                  type="text"
                  id="alliedCadre"
                  value={alliedCadre}
                  onChange={(e) => setAlliedCadre(e.target.value)}
                  placeholder="e.g. Medical Technologist / Radiographer / Nutritionist"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="alliedDateIssued" className="block text-xs font-bold text-[#0A1020]">
                  Date Issued
                </label>
                <input
                  type="date"
                  id="alliedDateIssued"
                  value={alliedDateIssued}
                  onChange={(e) => setAlliedDateIssued(e.target.value)}
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="alliedValidity" className="block text-xs font-bold text-[#0A1020]">
                  Validity Status
                </label>
                <input
                  type="text"
                  id="alliedValidity"
                  value={alliedValidity}
                  onChange={(e) => setAlliedValidity(e.target.value)}
                  placeholder="e.g. Active / Valid"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>
            </div>
          </div>
        )}

        {category === "4" && (
          <div className="space-y-4 rounded-xl border border-blue-100 bg-[#F9FBFE] p-4 min-w-0 max-w-full">
            <h4 className="font-display text-sm font-black text-[#0A1020]">
              Category 4 - Nursing Professional: PNC Registration
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
              <div className="min-w-0 max-w-full">
                <label htmlFor="pncRegNo" className="block text-xs font-bold text-[#0A1020]">
                  PNC Registration No. <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="pncRegNo"
                  value={pncRegNo}
                  onChange={(e) => setPncRegNo(e.target.value)}
                  placeholder="e.g. PNC-12345"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.pncRegNo ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.pncRegNo && <p className="mt-1 text-xs text-[#EF3B19]">{errors.pncRegNo}</p>}
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="pncProvince" className="block text-xs font-bold text-[#0A1020]">
                  Province of Registration
                </label>
                <input
                  type="text"
                  id="pncProvince"
                  value={pncProvince}
                  onChange={(e) => setPncProvince(e.target.value)}
                  placeholder="e.g. Punjab"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="sm:col-span-2 min-w-0 max-w-full">
                <label htmlFor="pncValidity" className="block text-xs font-bold text-[#0A1020]">
                  Validity Status
                </label>
                <input
                  type="text"
                  id="pncValidity"
                  value={pncValidity}
                  onChange={(e) => setPncValidity(e.target.value)}
                  placeholder="e.g. Valid through 2027"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>
            </div>
          </div>
        )}

        {category === "5" && (
          <div className="space-y-4 rounded-xl border border-blue-100 bg-[#F9FBFE] p-4 min-w-0 max-w-full">
            <h4 className="font-display text-sm font-black text-[#0A1020]">
              Category 5 - Pharmacist: PPC Registration
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
              <div className="min-w-0 max-w-full">
                <label htmlFor="ppcRegNo" className="block text-xs font-bold text-[#0A1020]">
                  PPC Registration No. <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="ppcRegNo"
                  value={ppcRegNo}
                  onChange={(e) => setPpcRegNo(e.target.value)}
                  placeholder="e.g. PPC-4321"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.ppcRegNo ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.ppcRegNo && <p className="mt-1 text-xs text-[#EF3B19]">{errors.ppcRegNo}</p>}
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="ppcCategory" className="block text-xs font-bold text-[#0A1020]">
                  Category (Pharmacist-A / Pharmacist-B)
                </label>
                <select
                  id="ppcCategory"
                  value={ppcCategory}
                  onChange={(e) => setPpcCategory(e.target.value)}
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                >
                  <option value="Pharmacist-A">Pharmacist-A</option>
                  <option value="Pharmacist-B">Pharmacist-B</option>
                </select>
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="ppcDate" className="block text-xs font-bold text-[#0A1020]">
                  Date of Registration
                </label>
                <input
                  type="date"
                  id="ppcDate"
                  value={ppcDate}
                  onChange={(e) => setPpcDate(e.target.value)}
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="ppcValidity" className="block text-xs font-bold text-[#0A1020]">
                  Validity Status
                </label>
                <input
                  type="text"
                  id="ppcValidity"
                  value={ppcValidity}
                  onChange={(e) => setPpcValidity(e.target.value)}
                  placeholder="e.g. Valid / Up to date"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>
            </div>
          </div>
        )}

        {category === "6" && (
          <div className="space-y-4 rounded-xl border border-blue-100 bg-[#F9FBFE] p-4 min-w-0 max-w-full">
            <h4 className="font-display text-sm font-black text-[#0A1020]">
              Category 6 - International Member: Foreign Regulator Registration
            </h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
              <div className="sm:col-span-2 min-w-0 max-w-full">
                <label htmlFor="intlCountryRegulator" className="block text-xs font-bold text-[#0A1020]">
                  Country of Practice & Name of Foreign Regulator (e.g. GMC/UK, US state board, DHA/HAAD/SCFHS/MOH-Gulf, AHPRA/Australia) <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="intlCountryRegulator"
                  value={intlCountryRegulator}
                  onChange={(e) => setIntlCountryRegulator(e.target.value)}
                  placeholder="e.g. General Medical Council (GMC), United Kingdom"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.intlCountryRegulator ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.intlCountryRegulator && (
                  <p className="mt-1 text-xs text-[#EF3B19]">{errors.intlCountryRegulator}</p>
                )}
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="intlRegLicenceNo" className="block text-xs font-bold text-[#0A1020]">
                  Registration / Licence No. <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="intlRegLicenceNo"
                  value={intlRegLicenceNo}
                  onChange={(e) => setIntlRegLicenceNo(e.target.value)}
                  placeholder="e.g. GMC-7654321"
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.intlRegLicenceNo ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.intlRegLicenceNo && (
                  <p className="mt-1 text-xs text-[#EF3B19]">{errors.intlRegLicenceNo}</p>
                )}
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="intlDate" className="block text-xs font-bold text-[#0A1020]">
                  Date of Registration
                </label>
                <input
                  type="date"
                  id="intlDate"
                  value={intlDate}
                  onChange={(e) => setIntlDate(e.target.value)}
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="intlValidity" className="block text-xs font-bold text-[#0A1020]">
                  Validity Status
                </label>
                <input
                  type="text"
                  id="intlValidity"
                  value={intlValidity}
                  onChange={(e) => setIntlValidity(e.target.value)}
                  placeholder="e.g. Current Full Licence"
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>

              <div className="min-w-0 max-w-full">
                <label htmlFor="intlOriginProof" className="block text-xs font-bold text-[#0A1020]">
                  Proof of Pakistani Origin (CNIC / NICOP / Passport No.) <span className="text-[#EF3B19]">*</span>
                </label>
                <input
                  type="text"
                  id="intlOriginProof"
                  value={intlOriginProof}
                  onChange={(e) => setIntlOriginProof(e.target.value)}
                  placeholder="e.g. NICOP No. or Pakistani Passport No."
                  className={`mt-1 block w-full min-w-0 max-w-full rounded-lg border px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.intlOriginProof ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                    }`}
                />
                {errors.intlOriginProof && (
                  <p className="mt-1 text-xs text-[#EF3B19]">{errors.intlOriginProof}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Categories 7-9 fallback reminder */}
        {!isProfessional && (
          <p className="text-xs text-slate-500">
            Regulatory council registration details are only applicable for practicing clinical professionals (Categories 1-6).
          </p>
        )}

        {/* Certificate Attachment Notice */}
        {isProfessional && (
          <div className="rounded-xl border border-dashed border-[#DCE2EA] bg-slate-50/50 p-4 min-w-0 max-w-full">
            <label htmlFor="regCertificateFile" className="block text-xs font-bold text-[#0A1020]">
              Please attach a scanned copy of the relevant registration/membership certificate.
            </label>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <input
                type="file"
                id="regCertificateFile"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange(e, setRegCertFileName)}
                className="text-xs text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-[#075BD6] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#0649B8] max-w-full"
              />
              {regCertFileName && (
                <span className="text-xs font-semibold text-emerald-700 break-all">
                  Attached: {regCertFileName}
                </span>
              )}
            </div>
          </div>
        )}
      </section>

      {/* SECTION 6: MMM-SPECIFIC & ORGANISATIONAL DATA */}
      <section aria-labelledby="section-6-heading" className="space-y-5 min-w-0 max-w-full">
        <div className="border-b border-[#DCE2EA] pb-3.5">
          {/* Mobile Section Badge */}
          <div className="sm:hidden mb-2">
            <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-[#075BD6]">
              SECTION 6
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#075BD6] text-xs font-black text-white">
              6
            </span>
            <div>
              <h3 id="section-6-heading" className="font-display text-base sm:text-xl font-black text-[#0A1020] leading-snug">
                <span className="hidden sm:inline">SECTION 6 - </span>MMM-SPECIFIC & ORGANISATIONAL DATA
              </h3>
              <p className="text-xs text-[#6B7280]">Connect with local teams and declare your volunteer focus.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
          {/* Nearest Chapter */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="nearestChapter" className="block text-sm font-bold text-[#0A1020]">
              Nearest MMM Chapter / Activity Centre (e.g. Lahore, DG Khan, Multan, Sialkot, Vehari){" "}
              <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="text"
              id="nearestChapter"
              value={nearestChapter}
              onChange={(e) => setNearestChapter(e.target.value)}
              placeholder="e.g. Lahore / Multan / Overseas"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.nearestChapter ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.nearestChapter && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.nearestChapter}</p>
            )}
          </div>

          {/* Referred By */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="referredBy" className="block text-sm font-bold text-[#0A1020]">
              Referred By (existing member name/ID, if any)
            </label>
            <input
              type="text"
              id="referredBy"
              value={referredBy}
              onChange={(e) => setReferredBy(e.target.value)}
              placeholder="e.g. Dr. Salman / ID-204"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* How did you come to know about MMM? (tick one) */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <fieldset>
              <legend className="block text-sm font-bold text-[#0A1020]">
                How did you come to know about MMM? (tick one)
              </legend>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 min-w-0 max-w-full">
                {HOW_KNOWN_OPTIONS.map((opt) => (
                  <label
                    key={opt}
                    htmlFor={`howKnown-${opt}`}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-xl border p-3 text-xs transition-colors ${howKnown === opt
                        ? "border-[#075BD6] bg-[#F3F7FF] font-bold text-[#075BD6]"
                        : "border-[#DCE2EA] bg-white hover:bg-slate-50 text-[#334155]"
                      }`}
                  >
                    <input
                      type="radio"
                      id={`howKnown-${opt}`}
                      name="howKnown"
                      value={opt}
                      checked={howKnown === opt}
                      onChange={(e) => setHowKnown(e.target.value)}
                      className="h-4 w-4 text-[#075BD6] focus:ring-[#075BD6]"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {howKnown === "Other" && (
              <div className="mt-3">
                <label htmlFor="howKnownOther" className="block text-xs font-bold text-[#0A1020]">
                  Please specify other source:
                </label>
                <input
                  type="text"
                  id="howKnownOther"
                  value={howKnownOther}
                  onChange={(e) => setHowKnownOther(e.target.value)}
                  placeholder="Please specify..."
                  className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
                />
              </div>
            )}
          </div>

          {/* Areas of Volunteer Interest (tick all that apply) */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <fieldset>
              <legend className="block text-sm font-bold text-[#0A1020]">
                Areas of Volunteer Interest (tick all that apply)
              </legend>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4 min-w-0 max-w-full">
                {VOLUNTEER_AREAS.map((area) => {
                  const isChecked = volunteerInterests.includes(area);
                  return (
                    <label
                      key={area}
                      htmlFor={`vol-${area}`}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-xl border p-3 text-xs transition-colors ${isChecked
                          ? "border-[#075BD6] bg-[#F3F7FF] font-bold text-[#075BD6]"
                          : "border-[#DCE2EA] bg-white hover:bg-slate-50 text-[#334155]"
                        }`}
                    >
                      <input
                        type="checkbox"
                        id={`vol-${area}`}
                        value={area}
                        checked={isChecked}
                        onChange={() => handleInterestToggle(area)}
                        className="h-4 w-4 rounded text-[#075BD6] focus:ring-[#075BD6]"
                      />
                      <span>{area}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {/* Availability */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="activityAvailability" className="block text-sm font-bold text-[#0A1020]">
              Availability for Monthly Activities / Annual Medical Conference
            </label>
            <input
              type="text"
              id="activityAvailability"
              value={activityAvailability}
              onChange={(e) => setActivityAvailability(e.target.value)}
              placeholder="e.g. Weekends, 1 Saturday per month, Annual Conference attendance"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Prior/Concurrent Affiliation */}
          <div className="sm:col-span-2 min-w-0 max-w-full">
            <label htmlFor="priorAffiliation" className="block text-sm font-bold text-[#0A1020]">
              Prior/Concurrent Affiliation with Other Bodies (e.g. PIMA, FIMA, PPTA, provincial associations)
            </label>
            <input
              type="text"
              id="priorAffiliation"
              value={priorAffiliation}
              onChange={(e) => setPriorAffiliation(e.target.value)}
              placeholder="e.g. Member of PIMA / PPTA / PMA"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="sm:col-span-2 min-w-0 max-w-full rounded-xl bg-slate-50 p-4 border border-[#DCE2EA]">
            <label htmlFor="consentCommunications" className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                id="consentCommunications"
                checked={consentCommunications}
                onChange={(e) => setConsentCommunications(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded text-[#075BD6] focus:ring-[#075BD6]"
              />
              <span className="text-xs sm:text-sm text-[#0A1020] font-medium">
                I consent to receive WhatsApp / email communications from MMM Pakistan
              </span>
            </label>
          </div>

          {/* Membership Fee Category */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="membershipFeeCategory" className="block text-sm font-bold text-[#0A1020]">
              Membership Fee Category
            </label>
            <input
              type="text"
              id="membershipFeeCategory"
              value={membershipFeeCategory}
              onChange={(e) => setMembershipFeeCategory(e.target.value)}
              placeholder="e.g. Regular / Student / Life / Patron"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          {/* Payment Reference No. */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="paymentReferenceNo" className="block text-sm font-bold text-[#0A1020]">
              Payment Reference No.
            </label>
            <input
              type="text"
              id="paymentReferenceNo"
              value={paymentReferenceNo}
              onChange={(e) => setPaymentReferenceNo(e.target.value)}
              placeholder="e.g. Bank slip / TxID / Cash receipt (if paid)"
              className="mt-1.5 block w-full min-w-0 max-w-full rounded-xl border border-[#DCE2EA] bg-white px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: DECLARATION & UNDERTAKING */}
      <section aria-labelledby="section-7-heading" className="space-y-6 min-w-0 max-w-full">
        <div className="border-b border-[#DCE2EA] pb-3.5">
          {/* Mobile Section Badge */}
          <div className="sm:hidden mb-2">
            <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-[#075BD6]">
              SECTION 7
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#075BD6] text-xs font-black text-white">
              7
            </span>
            <div>
              <h3 id="section-7-heading" className="font-display text-base sm:text-xl font-black text-[#0A1020] leading-snug">
                <span className="hidden sm:inline">SECTION 7 - </span>DECLARATION & UNDERTAKING
              </h3>
              <p className="text-xs text-[#6B7280]">Please read carefully and provide your digital signature.</p>
            </div>
          </div>
        </div>

        {/* Verbatim Declaration Box */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6 min-w-0 max-w-full">
          <p className="font-serif text-[0.93rem] sm:text-[0.98rem] leading-relaxed text-[#0A1020]">
            “I hereby declare that the information provided in this form, including my regulatory registration or student-enrolment details, is true and accurate to the best of my knowledge. I undertake to abide by the constitution, code of conduct, and Islamic professional ethics of Muslim Medical Mission (MMM) Pakistan. I consent to MMM verifying my registration/enrolment status with PMDC, PNC, PPC, PPTA, the relevant council or professional body, or my institution, as applicable.”
          </p>

          <div className="mt-4 border-t border-blue-200/80 pt-4">
            <label htmlFor="declarationAgreed" className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                id="declarationAgreed"
                checked={declarationAgreed}
                onChange={(e) => setDeclarationAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded text-[#075BD6] focus:ring-[#075BD6]"
                aria-required="true"
              />
              <span className="text-xs sm:text-sm font-bold text-[#0A1020]">
                I agree to the declaration, code of conduct, and verification terms above.{" "}
                <span className="text-[#EF3B19]">*</span>
              </span>
            </label>
            {errors.declarationAgreed && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.declarationAgreed}</p>
            )}
          </div>
        </div>

        {/* Signature & Date */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-w-0 max-w-full">
          <div className="min-w-0 max-w-full">
            <label htmlFor="applicantSignature" className="block text-sm font-bold text-[#0A1020]">
              Signature of Applicant (Full Name) <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="text"
              id="applicantSignature"
              value={applicantSignature}
              onChange={(e) => setApplicantSignature(e.target.value)}
              placeholder="Type legal name as digital signature"
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.applicantSignature ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.applicantSignature && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.applicantSignature}</p>
            )}
          </div>

          <div className="min-w-0 max-w-full">
            <label htmlFor="declarationDate" className="block text-sm font-bold text-[#0A1020]">
              Date <span className="text-[#EF3B19]">*</span>
            </label>
            <input
              type="date"
              id="declarationDate"
              value={declarationDate}
              onChange={(e) => setDeclarationDate(e.target.value)}
              className={`mt-1.5 block w-full min-w-0 max-w-full rounded-xl border px-3.5 py-2.5 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20 ${errors.declarationDate ? "border-[#EF3B19] bg-red-50/20" : "border-[#DCE2EA] bg-white"
                }`}
              aria-required="true"
            />
            {errors.declarationDate && (
              <p className="mt-1 text-xs text-[#EF3B19]">{errors.declarationDate}</p>
            )}
          </div>

          {/* Countersignature info */}
          <div className="min-w-0 max-w-full">
            <label htmlFor="countersignature" className="block text-xs font-bold text-[#0A1020]">
              Countersignature (Chapter Coordinator / Proposer, where required)
            </label>
            <input
              type="text"
              id="countersignature"
              value={countersignature}
              onChange={(e) => setCountersignature(e.target.value)}
              placeholder="Coordinator Name / ID (if provided by chapter)"
              className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] placeholder-slate-400 placeholder:truncate transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>

          <div className="min-w-0 max-w-full">
            <label htmlFor="countersignatureDate" className="block text-xs font-bold text-[#0A1020]">
              Countersignature Date
            </label>
            <input
              type="date"
              id="countersignatureDate"
              value={countersignatureDate}
              onChange={(e) => setCountersignatureDate(e.target.value)}
              className="mt-1 block w-full min-w-0 max-w-full rounded-lg border border-[#DCE2EA] bg-white px-3 py-2 text-sm text-[#0A1020] transition-colors focus:border-[#075BD6] focus:outline-none focus:ring-2 focus:ring-[#075BD6]/20"
            />
          </div>
        </div>

        {/* Office Use Ledger Box */}
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-4 text-xs text-slate-500">
          <span className="font-bold uppercase tracking-wider text-slate-600">
            For office use only:
          </span>
          <p className="mt-1 font-mono text-[0.8rem] text-slate-600">
            Application received on ____________ | Verified by ____________ | Membership No. assigned ____________
          </p>
        </div>
      </section>

      {/* Global Form Error Message if any */}
      {Object.keys(errors).length > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-[#EF3B19]">
          <div className="flex items-center gap-2 font-bold">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>Please correct the highlighted fields before submitting:</span>
          </div>
          <ul className="mt-2 list-inside list-disc text-xs space-y-0.5">
            {Object.values(errors).slice(0, 4).map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
            {Object.keys(errors).length > 4 && (
              <li>...and {Object.keys(errors).length - 4} more field(s) require attention.</li>
            )}
          </ul>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 w-full">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-[#046BD2] px-6 py-3 xs:px-7 xs:py-3.5 sm:px-9 sm:py-4 font-display text-[0.88rem] xs:text-[0.94rem] sm:text-base font-bold text-white whitespace-nowrap min-h-[44px] max-w-full shadow-[0_10px_24px_-8px_rgba(4,107,210,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e53935] hover:shadow-[0_10px_24px_-8px_rgba(229,57,53,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <svg className="h-5 w-5 shrink-0 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <span>Submit Application</span>
              <svg className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <a
          href="/MMM_Pakistan_Membership_Application_Form.pdf"
          download
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 px-5 py-2.5 xs:px-6 xs:py-3 sm:py-3.5 font-display text-[0.84rem] xs:text-sm font-bold text-[#334155] whitespace-nowrap min-h-[44px] max-w-full transition-all duration-300 hover:border-[#e53935] hover:bg-[#e53935] hover:text-white"
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Download Offline PDF Form</span>
        </a>
      </div>
    </form>
  );
}
