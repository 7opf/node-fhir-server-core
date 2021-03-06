/**
 * @name exports
 * @static
 * @summary Arguments for the allergyintolerance query
 */
module.exports = {
	asserter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.asserter',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-asserter',
		description: 'Source of the information about the allergy',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.category',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category',
		description: 'food | medication | environment | biologic',
	},
	'clinical-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.clinicalStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-clinical-status',
		description: 'active | inactive | resolved',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.code',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
		description:
			'Multiple Resources:     * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Procedure](procedure.html): A code to identify a  procedure  * [List](list.html): What the purpose of this list is  * [ProcedureRequest](procedurerequest.html): What is being requested/ordered  * [Observation](observation.html): The code of the observation type  * [DiagnosticReport](diagnosticreport.html): The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [Condition](condition.html): Code for the condition  ',
	},
	criticality: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.criticality',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality',
		description: 'low | high | unable-to-assess',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.assertedDate',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
		description:
			"Multiple Resources:     * [Consent](consent.html): When this Consent was created or indexed  * [SupplyRequest](supplyrequest.html): When the request was made  * [RiskAssessment](riskassessment.html): When was assessment made?  * [CareTeam](careteam.html): Time period team covers  * [FamilyMemberHistory](familymemberhistory.html): When history was captured/updated  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [AllergyIntolerance](allergyintolerance.html): Date record was believed accurate  * [CarePlan](careplan.html): Time period plan covers  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [Procedure](procedure.html): Date/Period the procedure was performed  * [List](list.html): When the list was prepared  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [Flag](flag.html): Time period when flag is active  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Composition](composition.html): Composition editing time  * [DetectedIssue](detectedissue.html): When identified  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  ",
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description:
			'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  ',
	},
	'last-date': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.lastOccurrence',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date',
		description: 'Date(/time) of last known occurrence of a reaction',
	},
	manifestation: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.manifestation',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation',
		description: 'Clinical symptoms/signs associated with the Event',
	},
	onset: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.reaction.onset',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset',
		description: 'Date(/time) when manifestations showed',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  ',
	},
	recorder: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.recorder',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder',
		description: 'Who recorded the sensitivity',
	},
	route: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.exposureRoute',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route',
		description: 'How the subject was exposed to the substance',
	},
	severity: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.severity',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity',
		description: 'mild | moderate | severe (of event as a whole)',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.type',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-type',
		description:
			'Multiple Resources:     * [ReferralRequest](referralrequest.html): The type of the referral  * [DocumentManifest](documentmanifest.html): Kind of document set  * [DocumentReference](documentreference.html): Kind of document (LOINC if possible)  * [Encounter](encounter.html): Specific type of encounter  * [AllergyIntolerance](allergyintolerance.html): allergy | intolerance - Underlying mechanism (if known)  * [EpisodeOfCare](episodeofcare.html): Type/class  - e.g. specialist referral, disease management  * [Composition](composition.html): Kind of composition (LOINC if possible)  ',
	},
	'verification-status': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.verificationStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/AllergyIntolerance-verification-status',
		description: 'unconfirmed | confirmed | refuted | entered-in-error',
	},
};
