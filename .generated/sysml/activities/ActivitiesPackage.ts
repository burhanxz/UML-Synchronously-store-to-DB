/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace sysml.activities {
    /**
     * <!-- begin-user-doc -->
     * The <b>Package</b> for the model.
     * It contains accessors for the meta objects to represent
     * <ul>
     * <li>each class,</li>
     * <li>each feature of each class,</li>
     * <li>each operation of each class,</li>
     * <li>each enum,</li>
     * <li>and each data type</li>
     * </ul>
     * <!-- end-user-doc -->
     * @see sysml.activities.ActivitiesFactory
     * @model kind="package"
     * @generated
     * @class
     */
    export interface ActivitiesPackage extends org.eclipse.emf.ecore.EPackage {
        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Optional</em>'.
         * @see sysml.activities.Optional
         * @generated
         */
        getOptional() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Optional#getBase_Parameter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Parameter</em>'.
         * @see sysml.activities.Optional#getBase_Parameter()
         * @see #getOptional()
         * @generated
         */
        getOptional_Base_Parameter() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Rate</em>'.
         * @see sysml.activities.Rate
         * @generated
         */
        getRate() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Rate#getBase_Parameter}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Parameter</em>'.
         * @see sysml.activities.Rate#getBase_Parameter()
         * @see #getRate()
         * @generated
         */
        getRate_Base_Parameter() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Rate#getBase_ActivityEdge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Activity Edge</em>'.
         * @see sysml.activities.Rate#getBase_ActivityEdge()
         * @see #getRate()
         * @generated
         */
        getRate_Base_ActivityEdge() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Rate#getRate}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Rate</em>'.
         * @see sysml.activities.Rate#getRate()
         * @see #getRate()
         * @generated
         */
        getRate_Rate() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Probability</em>'.
         * @see sysml.activities.Probability
         * @generated
         */
        getProbability() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Probability#getBase_ActivityEdge}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Activity Edge</em>'.
         * @see sysml.activities.Probability#getBase_ActivityEdge()
         * @see #getProbability()
         * @generated
         */
        getProbability_Base_ActivityEdge() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Probability#getBase_ParameterSet}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Parameter Set</em>'.
         * @see sysml.activities.Probability#getBase_ParameterSet()
         * @see #getProbability()
         * @generated
         */
        getProbability_Base_ParameterSet() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Probability#getProbability}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Probability</em>'.
         * @see sysml.activities.Probability#getProbability()
         * @see #getProbability()
         * @generated
         */
        getProbability_Probability() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Continuous</em>'.
         * @see sysml.activities.Continuous
         * @generated
         */
        getContinuous() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Discrete</em>'.
         * @see sysml.activities.Discrete
         * @generated
         */
        getDiscrete() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Control Operator</em>'.
         * @see sysml.activities.ControlOperator
         * @generated
         */
        getControlOperator() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.ControlOperator#getBase_Operation}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Operation</em>'.
         * @see sysml.activities.ControlOperator#getBase_Operation()
         * @see #getControlOperator()
         * @generated
         */
        getControlOperator_Base_Operation() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.ControlOperator#getBase_Behavior}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Behavior</em>'.
         * @see sysml.activities.ControlOperator#getBase_Behavior()
         * @see #getControlOperator()
         * @generated
         */
        getControlOperator_Base_Behavior() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>No Buffer</em>'.
         * @see sysml.activities.NoBuffer
         * @generated
         */
        getNoBuffer() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.NoBuffer#getBase_ObjectNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Object Node</em>'.
         * @see sysml.activities.NoBuffer#getBase_ObjectNode()
         * @see #getNoBuffer()
         * @generated
         */
        getNoBuffer_Base_ObjectNode() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the meta object for class '{@link *}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for class '<em>Overwrite</em>'.
         * @see sysml.activities.Overwrite
         * @generated
         */
        getOverwrite() : org.eclipse.emf.ecore.EClass;

        /**
         * Returns the meta object for the reference '{@link sysml.activities.Overwrite#getBase_ObjectNode}'.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the meta object for the reference '<em>Base Object Node</em>'.
         * @see sysml.activities.Overwrite#getBase_ObjectNode()
         * @see #getOverwrite()
         * @generated
         */
        getOverwrite_Base_ObjectNode() : org.eclipse.emf.ecore.EReference;

        /**
         * Returns the factory that creates the instances of the model.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the factory that creates the instances of the model.
         * @generated
         */
        getActivitiesFactory() : sysml.activities.ActivitiesFactory;
    }

    export namespace ActivitiesPackage {

        /**
         * The package name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNAME : string = "activities";

        /**
         * The package namespace URI.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_URI : string = "http://www.eclipse.org/papyrus/0.7.0/SysML/Activities";

        /**
         * The package namespace name.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eNS_PREFIX : string = "Activities";

        /**
         * The singleton instance of the package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        export let eINSTANCE : ActivitiesPackage = sysml.activities.impl.ActivitiesPackageImpl.init();

        /**
         * The meta object id for the '{@link sysml.activities.impl.OptionalImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.OptionalImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getOptional()
         * @generated
         */
        export let OPTIONAL : number = 0;

        /**
         * The feature id for the '<em><b>Base Parameter</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let OPTIONAL__BASE_PARAMETER : number = 0;

        /**
         * The number of structural features of the '<em>Optional</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let OPTIONAL_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Optional</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let OPTIONAL_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.activities.impl.RateImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.RateImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getRate()
         * @generated
         */
        export let RATE : number = 1;

        /**
         * The feature id for the '<em><b>Base Parameter</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATE__BASE_PARAMETER : number = 0;

        /**
         * The feature id for the '<em><b>Base Activity Edge</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATE__BASE_ACTIVITY_EDGE : number = 1;

        /**
         * The feature id for the '<em><b>Rate</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATE__RATE : number = 2;

        /**
         * The number of structural features of the '<em>Rate</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATE_FEATURE_COUNT : number = 3;

        /**
         * The number of operations of the '<em>Rate</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let RATE_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.activities.impl.ProbabilityImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.ProbabilityImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getProbability()
         * @generated
         */
        export let PROBABILITY : number = 2;

        /**
         * The feature id for the '<em><b>Base Activity Edge</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBABILITY__BASE_ACTIVITY_EDGE : number = 0;

        /**
         * The feature id for the '<em><b>Base Parameter Set</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBABILITY__BASE_PARAMETER_SET : number = 1;

        /**
         * The feature id for the '<em><b>Probability</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBABILITY__PROBABILITY : number = 2;

        /**
         * The number of structural features of the '<em>Probability</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBABILITY_FEATURE_COUNT : number = 3;

        /**
         * The number of operations of the '<em>Probability</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let PROBABILITY_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.activities.impl.ContinuousImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.ContinuousImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getContinuous()
         * @generated
         */
        export let CONTINUOUS : number = 3;

        /**
         * The feature id for the '<em><b>Base Parameter</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTINUOUS__BASE_PARAMETER : number = ActivitiesPackage.RATE__BASE_PARAMETER;

        /**
         * The feature id for the '<em><b>Base Activity Edge</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTINUOUS__BASE_ACTIVITY_EDGE : number = ActivitiesPackage.RATE__BASE_ACTIVITY_EDGE;

        /**
         * The feature id for the '<em><b>Rate</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTINUOUS__RATE : number = ActivitiesPackage.RATE__RATE;

        /**
         * The number of structural features of the '<em>Continuous</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTINUOUS_FEATURE_COUNT : number = ActivitiesPackage.RATE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Continuous</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTINUOUS_OPERATION_COUNT : number = ActivitiesPackage.RATE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link sysml.activities.impl.DiscreteImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.DiscreteImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getDiscrete()
         * @generated
         */
        export let DISCRETE : number = 4;

        /**
         * The feature id for the '<em><b>Base Parameter</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISCRETE__BASE_PARAMETER : number = ActivitiesPackage.RATE__BASE_PARAMETER;

        /**
         * The feature id for the '<em><b>Base Activity Edge</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISCRETE__BASE_ACTIVITY_EDGE : number = ActivitiesPackage.RATE__BASE_ACTIVITY_EDGE;

        /**
         * The feature id for the '<em><b>Rate</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISCRETE__RATE : number = ActivitiesPackage.RATE__RATE;

        /**
         * The number of structural features of the '<em>Discrete</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISCRETE_FEATURE_COUNT : number = ActivitiesPackage.RATE_FEATURE_COUNT + 0;

        /**
         * The number of operations of the '<em>Discrete</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let DISCRETE_OPERATION_COUNT : number = ActivitiesPackage.RATE_OPERATION_COUNT + 0;

        /**
         * The meta object id for the '{@link sysml.activities.impl.ControlOperatorImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.ControlOperatorImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getControlOperator()
         * @generated
         */
        export let CONTROL_OPERATOR : number = 5;

        /**
         * The feature id for the '<em><b>Base Operation</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTROL_OPERATOR__BASE_OPERATION : number = 0;

        /**
         * The feature id for the '<em><b>Base Behavior</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTROL_OPERATOR__BASE_BEHAVIOR : number = 1;

        /**
         * The number of structural features of the '<em>Control Operator</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTROL_OPERATOR_FEATURE_COUNT : number = 2;

        /**
         * The number of operations of the '<em>Control Operator</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let CONTROL_OPERATOR_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.activities.impl.NoBufferImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.NoBufferImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getNoBuffer()
         * @generated
         */
        export let NO_BUFFER : number = 6;

        /**
         * The feature id for the '<em><b>Base Object Node</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let NO_BUFFER__BASE_OBJECT_NODE : number = 0;

        /**
         * The number of structural features of the '<em>No Buffer</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let NO_BUFFER_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>No Buffer</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let NO_BUFFER_OPERATION_COUNT : number = 0;

        /**
         * The meta object id for the '{@link sysml.activities.impl.OverwriteImpl}' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @see sysml.activities.impl.OverwriteImpl
         * @see sysml.activities.impl.ActivitiesPackageImpl#getOverwrite()
         * @generated
         */
        export let OVERWRITE : number = 7;

        /**
         * The feature id for the '<em><b>Base Object Node</b></em>' reference.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let OVERWRITE__BASE_OBJECT_NODE : number = 0;

        /**
         * The number of structural features of the '<em>Overwrite</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let OVERWRITE_FEATURE_COUNT : number = 1;

        /**
         * The number of operations of the '<em>Overwrite</em>' class.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @ordered
         */
        export let OVERWRITE_OPERATION_COUNT : number = 0;
    }


    export namespace ActivitiesPackage {

        /**
         * <!-- begin-user-doc -->
         * Defines literals for the meta objects that represent
         * <ul>
         * <li>each class,</li>
         * <li>each feature of each class,</li>
         * <li>each operation of each class,</li>
         * <li>each enum,</li>
         * <li>and each data type</li>
         * </ul>
         * <!-- end-user-doc -->
         * @generated
         * @class
         */
        export interface Literals {        }

        export namespace Literals {

            /**
             * The meta object literal for the '{@link sysml.activities.impl.OptionalImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.OptionalImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getOptional()
             * @generated
             */
            export let OPTIONAL : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getOptional();

            /**
             * The meta object literal for the '<em><b>Base Parameter</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let OPTIONAL__BASE_PARAMETER : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getOptional_Base_Parameter();

            /**
             * The meta object literal for the '{@link sysml.activities.impl.RateImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.RateImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getRate()
             * @generated
             */
            export let RATE : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getRate();

            /**
             * The meta object literal for the '<em><b>Base Parameter</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let RATE__BASE_PARAMETER : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getRate_Base_Parameter();

            /**
             * The meta object literal for the '<em><b>Base Activity Edge</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let RATE__BASE_ACTIVITY_EDGE : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getRate_Base_ActivityEdge();

            /**
             * The meta object literal for the '<em><b>Rate</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let RATE__RATE : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getRate_Rate();

            /**
             * The meta object literal for the '{@link sysml.activities.impl.ProbabilityImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.ProbabilityImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getProbability()
             * @generated
             */
            export let PROBABILITY : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getProbability();

            /**
             * The meta object literal for the '<em><b>Base Activity Edge</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PROBABILITY__BASE_ACTIVITY_EDGE : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getProbability_Base_ActivityEdge();

            /**
             * The meta object literal for the '<em><b>Base Parameter Set</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PROBABILITY__BASE_PARAMETER_SET : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getProbability_Base_ParameterSet();

            /**
             * The meta object literal for the '<em><b>Probability</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let PROBABILITY__PROBABILITY : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getProbability_Probability();

            /**
             * The meta object literal for the '{@link sysml.activities.impl.ContinuousImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.ContinuousImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getContinuous()
             * @generated
             */
            export let CONTINUOUS : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getContinuous();

            /**
             * The meta object literal for the '{@link sysml.activities.impl.DiscreteImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.DiscreteImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getDiscrete()
             * @generated
             */
            export let DISCRETE : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getDiscrete();

            /**
             * The meta object literal for the '{@link sysml.activities.impl.ControlOperatorImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.ControlOperatorImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getControlOperator()
             * @generated
             */
            export let CONTROL_OPERATOR : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getControlOperator();

            /**
             * The meta object literal for the '<em><b>Base Operation</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CONTROL_OPERATOR__BASE_OPERATION : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getControlOperator_Base_Operation();

            /**
             * The meta object literal for the '<em><b>Base Behavior</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let CONTROL_OPERATOR__BASE_BEHAVIOR : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getControlOperator_Base_Behavior();

            /**
             * The meta object literal for the '{@link sysml.activities.impl.NoBufferImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.NoBufferImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getNoBuffer()
             * @generated
             */
            export let NO_BUFFER : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getNoBuffer();

            /**
             * The meta object literal for the '<em><b>Base Object Node</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let NO_BUFFER__BASE_OBJECT_NODE : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getNoBuffer_Base_ObjectNode();

            /**
             * The meta object literal for the '{@link sysml.activities.impl.OverwriteImpl}' class.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @see sysml.activities.impl.OverwriteImpl
             * @see sysml.activities.impl.ActivitiesPackageImpl#getOverwrite()
             * @generated
             */
            export let OVERWRITE : org.eclipse.emf.ecore.EClass = sysml.activities.ActivitiesPackage.eINSTANCE.getOverwrite();

            /**
             * The meta object literal for the '<em><b>Base Object Node</b></em>' reference feature.
             * <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             * @generated
             */
            export let OVERWRITE__BASE_OBJECT_NODE : org.eclipse.emf.ecore.EReference = sysml.activities.ActivitiesPackage.eINSTANCE.getOverwrite_Base_ObjectNode();
        }

    }

}

