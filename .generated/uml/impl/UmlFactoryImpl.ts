/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.impl {
    /**
     * Creates an instance of the factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.impl.EFactoryImpl
     */
    export class UmlFactoryImpl extends org.eclipse.emf.ecore.impl.EFactoryImpl implements uml.UmlFactory {
        /**
         * Creates the default factory implementation.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public static init() : uml.UmlFactory {
            try {
                let theUmlFactory : uml.UmlFactory = <uml.UmlFactory><any>org.eclipse.emf.ecore.EPackage.Registry.INSTANCE.getEFactory(uml.UmlPackage.eNS_URI);
                if(theUmlFactory != null) {
                    return theUmlFactory;
                }
            } catch(exception) {
                org.eclipse.emf.ecore.plugin.EcorePlugin.INSTANCE.log(exception);
            };
            return new UmlFactoryImpl();
        }

        public constructor() {
            super();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public createGen(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            switch((eClass.getClassifierID())) {
            case uml.UmlPackage.ACTIVITY:
                return this.createActivity();
            case uml.UmlPackage.CLASS:
                return this.createClass();
            case uml.UmlPackage.COMMENT:
                return this.createComment();
            case uml.UmlPackage.STEREOTYPE:
                return this.createStereotype();
            case uml.UmlPackage.IMAGE:
                return this.createImage();
            case uml.UmlPackage.PROFILE:
                return this.createProfile();
            case uml.UmlPackage.PACKAGE:
                return this.createPackage();
            case uml.UmlPackage.TEMPLATE_PARAMETER:
                return this.createTemplateParameter();
            case uml.UmlPackage.TEMPLATE_SIGNATURE:
                return this.createTemplateSignature();
            case uml.UmlPackage.TEMPLATE_BINDING:
                return this.createTemplateBinding();
            case uml.UmlPackage.TEMPLATE_PARAMETER_SUBSTITUTION:
                return this.createTemplateParameterSubstitution();
            case uml.UmlPackage.ASSOCIATION:
                return this.createAssociation();
            case uml.UmlPackage.PROPERTY:
                return this.createProperty();
            case uml.UmlPackage.CONNECTOR_END:
                return this.createConnectorEnd();
            case uml.UmlPackage.CONNECTABLE_ELEMENT_TEMPLATE_PARAMETER:
                return this.createConnectableElementTemplateParameter();
            case uml.UmlPackage.DEPLOYMENT:
                return this.createDeployment();
            case uml.UmlPackage.DEPENDENCY:
                return this.createDependency();
            case uml.UmlPackage.DEPLOYMENT_SPECIFICATION:
                return this.createDeploymentSpecification();
            case uml.UmlPackage.ARTIFACT:
                return this.createArtifact();
            case uml.UmlPackage.MANIFESTATION:
                return this.createManifestation();
            case uml.UmlPackage.ABSTRACTION:
                return this.createAbstraction();
            case uml.UmlPackage.OPAQUE_EXPRESSION:
                return this.createOpaqueExpression();
            case uml.UmlPackage.PARAMETER:
                return this.createParameter();
            case uml.UmlPackage.OPERATION:
                return this.createOperation();
            case uml.UmlPackage.PARAMETER_SET:
                return this.createParameterSet();
            case uml.UmlPackage.CONSTRAINT:
                return this.createConstraint();
            case uml.UmlPackage.DATA_TYPE:
                return this.createDataType();
            case uml.UmlPackage.INTERFACE:
                return this.createInterface();
            case uml.UmlPackage.RECEPTION:
                return this.createReception();
            case uml.UmlPackage.SIGNAL:
                return this.createSignal();
            case uml.UmlPackage.PROTOCOL_STATE_MACHINE:
                return this.createProtocolStateMachine();
            case uml.UmlPackage.STATE_MACHINE:
                return this.createStateMachine();
            case uml.UmlPackage.PSEUDOSTATE:
                return this.createPseudostate();
            case uml.UmlPackage.REGION:
                return this.createRegion();
            case uml.UmlPackage.STATE:
                return this.createState();
            case uml.UmlPackage.CONNECTION_POINT_REFERENCE:
                return this.createConnectionPointReference();
            case uml.UmlPackage.TRIGGER:
                return this.createTrigger();
            case uml.UmlPackage.PORT:
                return this.createPort();
            case uml.UmlPackage.TRANSITION:
                return this.createTransition();
            case uml.UmlPackage.PROTOCOL_CONFORMANCE:
                return this.createProtocolConformance();
            case uml.UmlPackage.OPERATION_TEMPLATE_PARAMETER:
                return this.createOperationTemplateParameter();
            case uml.UmlPackage.PACKAGE_MERGE:
                return this.createPackageMerge();
            case uml.UmlPackage.PROFILE_APPLICATION:
                return this.createProfileApplication();
            case uml.UmlPackage.ENUMERATION:
                return this.createEnumeration();
            case uml.UmlPackage.ENUMERATION_LITERAL:
                return this.createEnumerationLiteral();
            case uml.UmlPackage.INSTANCE_SPECIFICATION:
                return this.createInstanceSpecification();
            case uml.UmlPackage.SLOT:
                return this.createSlot();
            case uml.UmlPackage.PRIMITIVE_TYPE:
                return this.createPrimitiveType();
            case uml.UmlPackage.ELEMENT_IMPORT:
                return this.createElementImport();
            case uml.UmlPackage.PACKAGE_IMPORT:
                return this.createPackageImport();
            case uml.UmlPackage.EXTENSION:
                return this.createExtension();
            case uml.UmlPackage.EXTENSION_END:
                return this.createExtensionEnd();
            case uml.UmlPackage.MODEL:
                return this.createModel();
            case uml.UmlPackage.STRING_EXPRESSION:
                return this.createStringExpression();
            case uml.UmlPackage.EXPRESSION:
                return this.createExpression();
            case uml.UmlPackage.USAGE:
                return this.createUsage();
            case uml.UmlPackage.COLLABORATION_USE:
                return this.createCollaborationUse();
            case uml.UmlPackage.COLLABORATION:
                return this.createCollaboration();
            case uml.UmlPackage.CONNECTOR:
                return this.createConnector();
            case uml.UmlPackage.GENERALIZATION:
                return this.createGeneralization();
            case uml.UmlPackage.GENERALIZATION_SET:
                return this.createGeneralizationSet();
            case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE:
                return this.createRedefinableTemplateSignature();
            case uml.UmlPackage.USE_CASE:
                return this.createUseCase();
            case uml.UmlPackage.EXTEND:
                return this.createExtend();
            case uml.UmlPackage.EXTENSION_POINT:
                return this.createExtensionPoint();
            case uml.UmlPackage.INCLUDE:
                return this.createInclude();
            case uml.UmlPackage.SUBSTITUTION:
                return this.createSubstitution();
            case uml.UmlPackage.REALIZATION:
                return this.createRealization();
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER:
                return this.createClassifierTemplateParameter();
            case uml.UmlPackage.INTERFACE_REALIZATION:
                return this.createInterfaceRealization();
            case uml.UmlPackage.ACTIVITY_PARTITION:
                return this.createActivityPartition();
            case uml.UmlPackage.INTERRUPTIBLE_ACTIVITY_REGION:
                return this.createInterruptibleActivityRegion();
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE:
                return this.createStructuredActivityNode();
            case uml.UmlPackage.EXCEPTION_HANDLER:
                return this.createExceptionHandler();
            case uml.UmlPackage.INPUT_PIN:
                return this.createInputPin();
            case uml.UmlPackage.OUTPUT_PIN:
                return this.createOutputPin();
            case uml.UmlPackage.VARIABLE:
                return this.createVariable();
            case uml.UmlPackage.VALUE_SPECIFICATION_ACTION:
                return this.createValueSpecificationAction();
            case uml.UmlPackage.LINK_END_DATA:
                return this.createLinkEndData();
            case uml.UmlPackage.QUALIFIER_VALUE:
                return this.createQualifierValue();
            case uml.UmlPackage.ACCEPT_CALL_ACTION:
                return this.createAcceptCallAction();
            case uml.UmlPackage.ACCEPT_EVENT_ACTION:
                return this.createAcceptEventAction();
            case uml.UmlPackage.ACTION_INPUT_PIN:
                return this.createActionInputPin();
            case uml.UmlPackage.ADD_STRUCTURAL_FEATURE_VALUE_ACTION:
                return this.createAddStructuralFeatureValueAction();
            case uml.UmlPackage.ADD_VARIABLE_VALUE_ACTION:
                return this.createAddVariableValueAction();
            case uml.UmlPackage.BROADCAST_SIGNAL_ACTION:
                return this.createBroadcastSignalAction();
            case uml.UmlPackage.CALL_BEHAVIOR_ACTION:
                return this.createCallBehaviorAction();
            case uml.UmlPackage.CALL_OPERATION_ACTION:
                return this.createCallOperationAction();
            case uml.UmlPackage.CLAUSE:
                return this.createClause();
            case uml.UmlPackage.CLEAR_ASSOCIATION_ACTION:
                return this.createClearAssociationAction();
            case uml.UmlPackage.CLEAR_STRUCTURAL_FEATURE_ACTION:
                return this.createClearStructuralFeatureAction();
            case uml.UmlPackage.CLEAR_VARIABLE_ACTION:
                return this.createClearVariableAction();
            case uml.UmlPackage.CONDITIONAL_NODE:
                return this.createConditionalNode();
            case uml.UmlPackage.CREATE_LINK_ACTION:
                return this.createCreateLinkAction();
            case uml.UmlPackage.LINK_END_CREATION_DATA:
                return this.createLinkEndCreationData();
            case uml.UmlPackage.CREATE_LINK_OBJECT_ACTION:
                return this.createCreateLinkObjectAction();
            case uml.UmlPackage.CREATE_OBJECT_ACTION:
                return this.createCreateObjectAction();
            case uml.UmlPackage.DESTROY_LINK_ACTION:
                return this.createDestroyLinkAction();
            case uml.UmlPackage.LINK_END_DESTRUCTION_DATA:
                return this.createLinkEndDestructionData();
            case uml.UmlPackage.DESTROY_OBJECT_ACTION:
                return this.createDestroyObjectAction();
            case uml.UmlPackage.EXPANSION_NODE:
                return this.createExpansionNode();
            case uml.UmlPackage.EXPANSION_REGION:
                return this.createExpansionRegion();
            case uml.UmlPackage.LOOP_NODE:
                return this.createLoopNode();
            case uml.UmlPackage.OPAQUE_ACTION:
                return this.createOpaqueAction();
            case uml.UmlPackage.RAISE_EXCEPTION_ACTION:
                return this.createRaiseExceptionAction();
            case uml.UmlPackage.READ_EXTENT_ACTION:
                return this.createReadExtentAction();
            case uml.UmlPackage.READ_IS_CLASSIFIED_OBJECT_ACTION:
                return this.createReadIsClassifiedObjectAction();
            case uml.UmlPackage.READ_LINK_ACTION:
                return this.createReadLinkAction();
            case uml.UmlPackage.READ_LINK_OBJECT_END_ACTION:
                return this.createReadLinkObjectEndAction();
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION:
                return this.createReadLinkObjectEndQualifierAction();
            case uml.UmlPackage.READ_SELF_ACTION:
                return this.createReadSelfAction();
            case uml.UmlPackage.READ_STRUCTURAL_FEATURE_ACTION:
                return this.createReadStructuralFeatureAction();
            case uml.UmlPackage.READ_VARIABLE_ACTION:
                return this.createReadVariableAction();
            case uml.UmlPackage.RECLASSIFY_OBJECT_ACTION:
                return this.createReclassifyObjectAction();
            case uml.UmlPackage.REDUCE_ACTION:
                return this.createReduceAction();
            case uml.UmlPackage.REMOVE_STRUCTURAL_FEATURE_VALUE_ACTION:
                return this.createRemoveStructuralFeatureValueAction();
            case uml.UmlPackage.REMOVE_VARIABLE_VALUE_ACTION:
                return this.createRemoveVariableValueAction();
            case uml.UmlPackage.REPLY_ACTION:
                return this.createReplyAction();
            case uml.UmlPackage.SEND_OBJECT_ACTION:
                return this.createSendObjectAction();
            case uml.UmlPackage.SEND_SIGNAL_ACTION:
                return this.createSendSignalAction();
            case uml.UmlPackage.SEQUENCE_NODE:
                return this.createSequenceNode();
            case uml.UmlPackage.START_CLASSIFIER_BEHAVIOR_ACTION:
                return this.createStartClassifierBehaviorAction();
            case uml.UmlPackage.START_OBJECT_BEHAVIOR_ACTION:
                return this.createStartObjectBehaviorAction();
            case uml.UmlPackage.TEST_IDENTITY_ACTION:
                return this.createTestIdentityAction();
            case uml.UmlPackage.UNMARSHALL_ACTION:
                return this.createUnmarshallAction();
            case uml.UmlPackage.VALUE_PIN:
                return this.createValuePin();
            case uml.UmlPackage.ACTIVITY_FINAL_NODE:
                return this.createActivityFinalNode();
            case uml.UmlPackage.ACTIVITY_PARAMETER_NODE:
                return this.createActivityParameterNode();
            case uml.UmlPackage.CENTRAL_BUFFER_NODE:
                return this.createCentralBufferNode();
            case uml.UmlPackage.CONTROL_FLOW:
                return this.createControlFlow();
            case uml.UmlPackage.DATA_STORE_NODE:
                return this.createDataStoreNode();
            case uml.UmlPackage.DECISION_NODE:
                return this.createDecisionNode();
            case uml.UmlPackage.OBJECT_FLOW:
                return this.createObjectFlow();
            case uml.UmlPackage.FLOW_FINAL_NODE:
                return this.createFlowFinalNode();
            case uml.UmlPackage.FORK_NODE:
                return this.createForkNode();
            case uml.UmlPackage.INITIAL_NODE:
                return this.createInitialNode();
            case uml.UmlPackage.JOIN_NODE:
                return this.createJoinNode();
            case uml.UmlPackage.MERGE_NODE:
                return this.createMergeNode();
            case uml.UmlPackage.INSTANCE_VALUE:
                return this.createInstanceValue();
            case uml.UmlPackage.ANY_RECEIVE_EVENT:
                return this.createAnyReceiveEvent();
            case uml.UmlPackage.CALL_EVENT:
                return this.createCallEvent();
            case uml.UmlPackage.CHANGE_EVENT:
                return this.createChangeEvent();
            case uml.UmlPackage.FUNCTION_BEHAVIOR:
                return this.createFunctionBehavior();
            case uml.UmlPackage.OPAQUE_BEHAVIOR:
                return this.createOpaqueBehavior();
            case uml.UmlPackage.SIGNAL_EVENT:
                return this.createSignalEvent();
            case uml.UmlPackage.TIME_EVENT:
                return this.createTimeEvent();
            case uml.UmlPackage.TIME_EXPRESSION:
                return this.createTimeExpression();
            case uml.UmlPackage.COMMUNICATION_PATH:
                return this.createCommunicationPath();
            case uml.UmlPackage.DEVICE:
                return this.createDevice();
            case uml.UmlPackage.NODE:
                return this.createNode();
            case uml.UmlPackage.EXECUTION_ENVIRONMENT:
                return this.createExecutionEnvironment();
            case uml.UmlPackage.INFORMATION_FLOW:
                return this.createInformationFlow();
            case uml.UmlPackage.MESSAGE:
                return this.createMessage();
            case uml.UmlPackage.INTERACTION:
                return this.createInteraction();
            case uml.UmlPackage.LIFELINE:
                return this.createLifeline();
            case uml.UmlPackage.PART_DECOMPOSITION:
                return this.createPartDecomposition();
            case uml.UmlPackage.INTERACTION_USE:
                return this.createInteractionUse();
            case uml.UmlPackage.GATE:
                return this.createGate();
            case uml.UmlPackage.INTERACTION_OPERAND:
                return this.createInteractionOperand();
            case uml.UmlPackage.INTERACTION_CONSTRAINT:
                return this.createInteractionConstraint();
            case uml.UmlPackage.GENERAL_ORDERING:
                return this.createGeneralOrdering();
            case uml.UmlPackage.OCCURRENCE_SPECIFICATION:
                return this.createOccurrenceSpecification();
            case uml.UmlPackage.INFORMATION_ITEM:
                return this.createInformationItem();
            case uml.UmlPackage.ACTION_EXECUTION_SPECIFICATION:
                return this.createActionExecutionSpecification();
            case uml.UmlPackage.BEHAVIOR_EXECUTION_SPECIFICATION:
                return this.createBehaviorExecutionSpecification();
            case uml.UmlPackage.COMBINED_FRAGMENT:
                return this.createCombinedFragment();
            case uml.UmlPackage.CONSIDER_IGNORE_FRAGMENT:
                return this.createConsiderIgnoreFragment();
            case uml.UmlPackage.CONTINUATION:
                return this.createContinuation();
            case uml.UmlPackage.DESTRUCTION_OCCURRENCE_SPECIFICATION:
                return this.createDestructionOccurrenceSpecification();
            case uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION:
                return this.createMessageOccurrenceSpecification();
            case uml.UmlPackage.EXECUTION_OCCURRENCE_SPECIFICATION:
                return this.createExecutionOccurrenceSpecification();
            case uml.UmlPackage.STATE_INVARIANT:
                return this.createStateInvariant();
            case uml.UmlPackage.FINAL_STATE:
                return this.createFinalState();
            case uml.UmlPackage.PROTOCOL_TRANSITION:
                return this.createProtocolTransition();
            case uml.UmlPackage.ASSOCIATION_CLASS:
                return this.createAssociationClass();
            case uml.UmlPackage.COMPONENT:
                return this.createComponent();
            case uml.UmlPackage.COMPONENT_REALIZATION:
                return this.createComponentRealization();
            case uml.UmlPackage.ACTOR:
                return this.createActor();
            case uml.UmlPackage.DURATION:
                return this.createDuration();
            case uml.UmlPackage.DURATION_CONSTRAINT:
                return this.createDurationConstraint();
            case uml.UmlPackage.INTERVAL_CONSTRAINT:
                return this.createIntervalConstraint();
            case uml.UmlPackage.INTERVAL:
                return this.createInterval();
            case uml.UmlPackage.DURATION_INTERVAL:
                return this.createDurationInterval();
            case uml.UmlPackage.DURATION_OBSERVATION:
                return this.createDurationObservation();
            case uml.UmlPackage.LITERAL_BOOLEAN:
                return this.createLiteralBoolean();
            case uml.UmlPackage.LITERAL_INTEGER:
                return this.createLiteralInteger();
            case uml.UmlPackage.LITERAL_NULL:
                return this.createLiteralNull();
            case uml.UmlPackage.LITERAL_REAL:
                return this.createLiteralReal();
            case uml.UmlPackage.LITERAL_STRING:
                return this.createLiteralString();
            case uml.UmlPackage.LITERAL_UNLIMITED_NATURAL:
                return this.createLiteralUnlimitedNatural();
            case uml.UmlPackage.TIME_CONSTRAINT:
                return this.createTimeConstraint();
            case uml.UmlPackage.TIME_INTERVAL:
                return this.createTimeInterval();
            case uml.UmlPackage.TIME_OBSERVATION:
                return this.createTimeObservation();
            default:
                throw Object.defineProperty(new Error("The class \'" + eClass.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eClass
         * @return {*}
         */
        public create(eClass : org.eclipse.emf.ecore.EClass) : org.eclipse.emf.ecore.EObject {
            let newObject : org.eclipse.emf.ecore.InternalEObject = <org.eclipse.emf.ecore.InternalEObject><any>this.createGen(eClass);
            newObject.eSetStore(a.store.MyStore.INSTANCE_$LI$());
            return newObject;
        }

        /**
         * 
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {*}
         */
        public createFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : any {
            switch((eDataType.getClassifierID())) {
            case uml.UmlPackage.VISIBILITY_KIND:
                return this.createVisibilityKindFromString(eDataType, initialValue);
            case uml.UmlPackage.PARAMETER_DIRECTION_KIND:
                return this.createParameterDirectionKindFromString(eDataType, initialValue);
            case uml.UmlPackage.PARAMETER_EFFECT_KIND:
                return this.createParameterEffectKindFromString(eDataType, initialValue);
            case uml.UmlPackage.CALL_CONCURRENCY_KIND:
                return this.createCallConcurrencyKindFromString(eDataType, initialValue);
            case uml.UmlPackage.TRANSITION_KIND:
                return this.createTransitionKindFromString(eDataType, initialValue);
            case uml.UmlPackage.PSEUDOSTATE_KIND:
                return this.createPseudostateKindFromString(eDataType, initialValue);
            case uml.UmlPackage.AGGREGATION_KIND:
                return this.createAggregationKindFromString(eDataType, initialValue);
            case uml.UmlPackage.CONNECTOR_KIND:
                return this.createConnectorKindFromString(eDataType, initialValue);
            case uml.UmlPackage.OBJECT_NODE_ORDERING_KIND:
                return this.createObjectNodeOrderingKindFromString(eDataType, initialValue);
            case uml.UmlPackage.EXPANSION_KIND:
                return this.createExpansionKindFromString(eDataType, initialValue);
            case uml.UmlPackage.MESSAGE_KIND:
                return this.createMessageKindFromString(eDataType, initialValue);
            case uml.UmlPackage.MESSAGE_SORT:
                return this.createMessageSortFromString(eDataType, initialValue);
            case uml.UmlPackage.INTERACTION_OPERATOR_KIND:
                return this.createInteractionOperatorKindFromString(eDataType, initialValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            switch((eDataType.getClassifierID())) {
            case uml.UmlPackage.VISIBILITY_KIND:
                return this.convertVisibilityKindToString(eDataType, instanceValue);
            case uml.UmlPackage.PARAMETER_DIRECTION_KIND:
                return this.convertParameterDirectionKindToString(eDataType, instanceValue);
            case uml.UmlPackage.PARAMETER_EFFECT_KIND:
                return this.convertParameterEffectKindToString(eDataType, instanceValue);
            case uml.UmlPackage.CALL_CONCURRENCY_KIND:
                return this.convertCallConcurrencyKindToString(eDataType, instanceValue);
            case uml.UmlPackage.TRANSITION_KIND:
                return this.convertTransitionKindToString(eDataType, instanceValue);
            case uml.UmlPackage.PSEUDOSTATE_KIND:
                return this.convertPseudostateKindToString(eDataType, instanceValue);
            case uml.UmlPackage.AGGREGATION_KIND:
                return this.convertAggregationKindToString(eDataType, instanceValue);
            case uml.UmlPackage.CONNECTOR_KIND:
                return this.convertConnectorKindToString(eDataType, instanceValue);
            case uml.UmlPackage.OBJECT_NODE_ORDERING_KIND:
                return this.convertObjectNodeOrderingKindToString(eDataType, instanceValue);
            case uml.UmlPackage.EXPANSION_KIND:
                return this.convertExpansionKindToString(eDataType, instanceValue);
            case uml.UmlPackage.MESSAGE_KIND:
                return this.convertMessageKindToString(eDataType, instanceValue);
            case uml.UmlPackage.MESSAGE_SORT:
                return this.convertMessageSortToString(eDataType, instanceValue);
            case uml.UmlPackage.INTERACTION_OPERATOR_KIND:
                return this.convertInteractionOperatorKindToString(eDataType, instanceValue);
            default:
                throw Object.defineProperty(new Error("The datatype \'" + eDataType.getName() + "\' is not a valid classifier"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createActivity() : uml.Activity {
            let activity : uml.impl.ActivityImpl = new uml.impl.ActivityImpl();
            return activity;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createClass() : uml.Class {
            let class_ : uml.impl.ClassImpl = new uml.impl.ClassImpl();
            return class_;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createComment() : uml.Comment {
            let comment : uml.impl.CommentImpl = new uml.impl.CommentImpl();
            return comment;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createStereotype() : uml.Stereotype {
            let stereotype : uml.impl.StereotypeImpl = new uml.impl.StereotypeImpl();
            return stereotype;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createImage() : uml.Image {
            let image : uml.impl.ImageImpl = new uml.impl.ImageImpl();
            return image;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProfile() : uml.Profile {
            let profile : uml.impl.ProfileImpl = new uml.impl.ProfileImpl();
            return profile;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPackage() : uml.Package {
            let package_ : uml.impl.PackageImpl = new uml.impl.PackageImpl();
            return package_;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTemplateParameter() : uml.TemplateParameter {
            let templateParameter : uml.impl.TemplateParameterImpl = new uml.impl.TemplateParameterImpl();
            return templateParameter;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTemplateSignature() : uml.TemplateSignature {
            let templateSignature : uml.impl.TemplateSignatureImpl = new uml.impl.TemplateSignatureImpl();
            return templateSignature;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTemplateBinding() : uml.TemplateBinding {
            let templateBinding : uml.impl.TemplateBindingImpl = new uml.impl.TemplateBindingImpl();
            return templateBinding;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTemplateParameterSubstitution() : uml.TemplateParameterSubstitution {
            let templateParameterSubstitution : uml.impl.TemplateParameterSubstitutionImpl = new uml.impl.TemplateParameterSubstitutionImpl();
            return templateParameterSubstitution;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAssociation() : uml.Association {
            let association : uml.impl.AssociationImpl = new uml.impl.AssociationImpl();
            return association;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProperty() : uml.Property {
            let property : uml.impl.PropertyImpl = new uml.impl.PropertyImpl();
            return property;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConnectorEnd() : uml.ConnectorEnd {
            let connectorEnd : uml.impl.ConnectorEndImpl = new uml.impl.ConnectorEndImpl();
            return connectorEnd;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConnectableElementTemplateParameter() : uml.ConnectableElementTemplateParameter {
            let connectableElementTemplateParameter : uml.impl.ConnectableElementTemplateParameterImpl = new uml.impl.ConnectableElementTemplateParameterImpl();
            return connectableElementTemplateParameter;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDeployment() : uml.Deployment {
            let deployment : uml.impl.DeploymentImpl = new uml.impl.DeploymentImpl();
            return deployment;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDependency() : uml.Dependency {
            let dependency : uml.impl.DependencyImpl = new uml.impl.DependencyImpl();
            return dependency;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDeploymentSpecification() : uml.DeploymentSpecification {
            let deploymentSpecification : uml.impl.DeploymentSpecificationImpl = new uml.impl.DeploymentSpecificationImpl();
            return deploymentSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createArtifact() : uml.Artifact {
            let artifact : uml.impl.ArtifactImpl = new uml.impl.ArtifactImpl();
            return artifact;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createManifestation() : uml.Manifestation {
            let manifestation : uml.impl.ManifestationImpl = new uml.impl.ManifestationImpl();
            return manifestation;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAbstraction() : uml.Abstraction {
            let abstraction : uml.impl.AbstractionImpl = new uml.impl.AbstractionImpl();
            return abstraction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOpaqueExpression() : uml.OpaqueExpression {
            let opaqueExpression : uml.impl.OpaqueExpressionImpl = new uml.impl.OpaqueExpressionImpl();
            return opaqueExpression;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createParameter() : uml.Parameter {
            let parameter : uml.impl.ParameterImpl = new uml.impl.ParameterImpl();
            return parameter;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOperation() : uml.Operation {
            let operation : uml.impl.OperationImpl = new uml.impl.OperationImpl();
            return operation;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createParameterSet() : uml.ParameterSet {
            let parameterSet : uml.impl.ParameterSetImpl = new uml.impl.ParameterSetImpl();
            return parameterSet;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConstraint() : uml.Constraint {
            let constraint : uml.impl.ConstraintImpl = new uml.impl.ConstraintImpl();
            return constraint;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDataType() : uml.DataType {
            let dataType : uml.impl.DataTypeImpl = new uml.impl.DataTypeImpl();
            return dataType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInterface() : uml.Interface {
            let interface_ : uml.impl.InterfaceImpl = new uml.impl.InterfaceImpl();
            return interface_;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReception() : uml.Reception {
            let reception : uml.impl.ReceptionImpl = new uml.impl.ReceptionImpl();
            return reception;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSignal() : uml.Signal {
            let signal : uml.impl.SignalImpl = new uml.impl.SignalImpl();
            return signal;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProtocolStateMachine() : uml.ProtocolStateMachine {
            let protocolStateMachine : uml.impl.ProtocolStateMachineImpl = new uml.impl.ProtocolStateMachineImpl();
            return protocolStateMachine;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createStateMachine() : uml.StateMachine {
            let stateMachine : uml.impl.StateMachineImpl = new uml.impl.StateMachineImpl();
            return stateMachine;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPseudostate() : uml.Pseudostate {
            let pseudostate : uml.impl.PseudostateImpl = new uml.impl.PseudostateImpl();
            return pseudostate;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRegion() : uml.Region {
            let region : uml.impl.RegionImpl = new uml.impl.RegionImpl();
            return region;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createState() : uml.State {
            let state : uml.impl.StateImpl = new uml.impl.StateImpl();
            return state;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConnectionPointReference() : uml.ConnectionPointReference {
            let connectionPointReference : uml.impl.ConnectionPointReferenceImpl = new uml.impl.ConnectionPointReferenceImpl();
            return connectionPointReference;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTrigger() : uml.Trigger {
            let trigger : uml.impl.TriggerImpl = new uml.impl.TriggerImpl();
            return trigger;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPort() : uml.Port {
            let port : uml.impl.PortImpl = new uml.impl.PortImpl();
            return port;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTransition() : uml.Transition {
            let transition : uml.impl.TransitionImpl = new uml.impl.TransitionImpl();
            return transition;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProtocolConformance() : uml.ProtocolConformance {
            let protocolConformance : uml.impl.ProtocolConformanceImpl = new uml.impl.ProtocolConformanceImpl();
            return protocolConformance;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOperationTemplateParameter() : uml.OperationTemplateParameter {
            let operationTemplateParameter : uml.impl.OperationTemplateParameterImpl = new uml.impl.OperationTemplateParameterImpl();
            return operationTemplateParameter;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPackageMerge() : uml.PackageMerge {
            let packageMerge : uml.impl.PackageMergeImpl = new uml.impl.PackageMergeImpl();
            return packageMerge;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProfileApplication() : uml.ProfileApplication {
            let profileApplication : uml.impl.ProfileApplicationImpl = new uml.impl.ProfileApplicationImpl();
            return profileApplication;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createEnumeration() : uml.Enumeration {
            let enumeration : uml.impl.EnumerationImpl = new uml.impl.EnumerationImpl();
            return enumeration;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createEnumerationLiteral() : uml.EnumerationLiteral {
            let enumerationLiteral : uml.impl.EnumerationLiteralImpl = new uml.impl.EnumerationLiteralImpl();
            return enumerationLiteral;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInstanceSpecification() : uml.InstanceSpecification {
            let instanceSpecification : uml.impl.InstanceSpecificationImpl = new uml.impl.InstanceSpecificationImpl();
            return instanceSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSlot() : uml.Slot {
            let slot : uml.impl.SlotImpl = new uml.impl.SlotImpl();
            return slot;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPrimitiveType() : uml.PrimitiveType {
            let primitiveType : uml.impl.PrimitiveTypeImpl = new uml.impl.PrimitiveTypeImpl();
            return primitiveType;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createElementImport() : uml.ElementImport {
            let elementImport : uml.impl.ElementImportImpl = new uml.impl.ElementImportImpl();
            return elementImport;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPackageImport() : uml.PackageImport {
            let packageImport : uml.impl.PackageImportImpl = new uml.impl.PackageImportImpl();
            return packageImport;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExtension() : uml.Extension {
            let extension : uml.impl.ExtensionImpl = new uml.impl.ExtensionImpl();
            return extension;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExtensionEnd() : uml.ExtensionEnd {
            let extensionEnd : uml.impl.ExtensionEndImpl = new uml.impl.ExtensionEndImpl();
            return extensionEnd;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createModel() : uml.Model {
            let model : uml.impl.ModelImpl = new uml.impl.ModelImpl();
            return model;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createStringExpression() : uml.StringExpression {
            let stringExpression : uml.impl.StringExpressionImpl = new uml.impl.StringExpressionImpl();
            return stringExpression;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExpression() : uml.Expression {
            let expression : uml.impl.ExpressionImpl = new uml.impl.ExpressionImpl();
            return expression;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createUsage() : uml.Usage {
            let usage : uml.impl.UsageImpl = new uml.impl.UsageImpl();
            return usage;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCollaborationUse() : uml.CollaborationUse {
            let collaborationUse : uml.impl.CollaborationUseImpl = new uml.impl.CollaborationUseImpl();
            return collaborationUse;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCollaboration() : uml.Collaboration {
            let collaboration : uml.impl.CollaborationImpl = new uml.impl.CollaborationImpl();
            return collaboration;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConnector() : uml.Connector {
            let connector : uml.impl.ConnectorImpl = new uml.impl.ConnectorImpl();
            return connector;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createGeneralization() : uml.Generalization {
            let generalization : uml.impl.GeneralizationImpl = new uml.impl.GeneralizationImpl();
            return generalization;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createGeneralizationSet() : uml.GeneralizationSet {
            let generalizationSet : uml.impl.GeneralizationSetImpl = new uml.impl.GeneralizationSetImpl();
            return generalizationSet;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRedefinableTemplateSignature() : uml.RedefinableTemplateSignature {
            let redefinableTemplateSignature : uml.impl.RedefinableTemplateSignatureImpl = new uml.impl.RedefinableTemplateSignatureImpl();
            return redefinableTemplateSignature;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createUseCase() : uml.UseCase {
            let useCase : uml.impl.UseCaseImpl = new uml.impl.UseCaseImpl();
            return useCase;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExtend() : uml.Extend {
            let extend : uml.impl.ExtendImpl = new uml.impl.ExtendImpl();
            return extend;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExtensionPoint() : uml.ExtensionPoint {
            let extensionPoint : uml.impl.ExtensionPointImpl = new uml.impl.ExtensionPointImpl();
            return extensionPoint;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInclude() : uml.Include {
            let include : uml.impl.IncludeImpl = new uml.impl.IncludeImpl();
            return include;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSubstitution() : uml.Substitution {
            let substitution : uml.impl.SubstitutionImpl = new uml.impl.SubstitutionImpl();
            return substitution;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRealization() : uml.Realization {
            let realization : uml.impl.RealizationImpl = new uml.impl.RealizationImpl();
            return realization;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createClassifierTemplateParameter() : uml.ClassifierTemplateParameter {
            let classifierTemplateParameter : uml.impl.ClassifierTemplateParameterImpl = new uml.impl.ClassifierTemplateParameterImpl();
            return classifierTemplateParameter;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInterfaceRealization() : uml.InterfaceRealization {
            let interfaceRealization : uml.impl.InterfaceRealizationImpl = new uml.impl.InterfaceRealizationImpl();
            return interfaceRealization;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createActivityPartition() : uml.ActivityPartition {
            let activityPartition : uml.impl.ActivityPartitionImpl = new uml.impl.ActivityPartitionImpl();
            return activityPartition;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInterruptibleActivityRegion() : uml.InterruptibleActivityRegion {
            let interruptibleActivityRegion : uml.impl.InterruptibleActivityRegionImpl = new uml.impl.InterruptibleActivityRegionImpl();
            return interruptibleActivityRegion;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createStructuredActivityNode() : uml.StructuredActivityNode {
            let structuredActivityNode : uml.impl.StructuredActivityNodeImpl = new uml.impl.StructuredActivityNodeImpl();
            return structuredActivityNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExceptionHandler() : uml.ExceptionHandler {
            let exceptionHandler : uml.impl.ExceptionHandlerImpl = new uml.impl.ExceptionHandlerImpl();
            return exceptionHandler;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInputPin() : uml.InputPin {
            let inputPin : uml.impl.InputPinImpl = new uml.impl.InputPinImpl();
            return inputPin;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOutputPin() : uml.OutputPin {
            let outputPin : uml.impl.OutputPinImpl = new uml.impl.OutputPinImpl();
            return outputPin;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createVariable() : uml.Variable {
            let variable : uml.impl.VariableImpl = new uml.impl.VariableImpl();
            return variable;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createValueSpecificationAction() : uml.ValueSpecificationAction {
            let valueSpecificationAction : uml.impl.ValueSpecificationActionImpl = new uml.impl.ValueSpecificationActionImpl();
            return valueSpecificationAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLinkEndData() : uml.LinkEndData {
            let linkEndData : uml.impl.LinkEndDataImpl = new uml.impl.LinkEndDataImpl();
            return linkEndData;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createQualifierValue() : uml.QualifierValue {
            let qualifierValue : uml.impl.QualifierValueImpl = new uml.impl.QualifierValueImpl();
            return qualifierValue;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAcceptCallAction() : uml.AcceptCallAction {
            let acceptCallAction : uml.impl.AcceptCallActionImpl = new uml.impl.AcceptCallActionImpl();
            return acceptCallAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAcceptEventAction() : uml.AcceptEventAction {
            let acceptEventAction : uml.impl.AcceptEventActionImpl = new uml.impl.AcceptEventActionImpl();
            return acceptEventAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createActionInputPin() : uml.ActionInputPin {
            let actionInputPin : uml.impl.ActionInputPinImpl = new uml.impl.ActionInputPinImpl();
            return actionInputPin;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAddStructuralFeatureValueAction() : uml.AddStructuralFeatureValueAction {
            let addStructuralFeatureValueAction : uml.impl.AddStructuralFeatureValueActionImpl = new uml.impl.AddStructuralFeatureValueActionImpl();
            return addStructuralFeatureValueAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAddVariableValueAction() : uml.AddVariableValueAction {
            let addVariableValueAction : uml.impl.AddVariableValueActionImpl = new uml.impl.AddVariableValueActionImpl();
            return addVariableValueAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createBroadcastSignalAction() : uml.BroadcastSignalAction {
            let broadcastSignalAction : uml.impl.BroadcastSignalActionImpl = new uml.impl.BroadcastSignalActionImpl();
            return broadcastSignalAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCallBehaviorAction() : uml.CallBehaviorAction {
            let callBehaviorAction : uml.impl.CallBehaviorActionImpl = new uml.impl.CallBehaviorActionImpl();
            return callBehaviorAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCallOperationAction() : uml.CallOperationAction {
            let callOperationAction : uml.impl.CallOperationActionImpl = new uml.impl.CallOperationActionImpl();
            return callOperationAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createClause() : uml.Clause {
            let clause : uml.impl.ClauseImpl = new uml.impl.ClauseImpl();
            return clause;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createClearAssociationAction() : uml.ClearAssociationAction {
            let clearAssociationAction : uml.impl.ClearAssociationActionImpl = new uml.impl.ClearAssociationActionImpl();
            return clearAssociationAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createClearStructuralFeatureAction() : uml.ClearStructuralFeatureAction {
            let clearStructuralFeatureAction : uml.impl.ClearStructuralFeatureActionImpl = new uml.impl.ClearStructuralFeatureActionImpl();
            return clearStructuralFeatureAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createClearVariableAction() : uml.ClearVariableAction {
            let clearVariableAction : uml.impl.ClearVariableActionImpl = new uml.impl.ClearVariableActionImpl();
            return clearVariableAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConditionalNode() : uml.ConditionalNode {
            let conditionalNode : uml.impl.ConditionalNodeImpl = new uml.impl.ConditionalNodeImpl();
            return conditionalNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCreateLinkAction() : uml.CreateLinkAction {
            let createLinkAction : uml.impl.CreateLinkActionImpl = new uml.impl.CreateLinkActionImpl();
            return createLinkAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLinkEndCreationData() : uml.LinkEndCreationData {
            let linkEndCreationData : uml.impl.LinkEndCreationDataImpl = new uml.impl.LinkEndCreationDataImpl();
            return linkEndCreationData;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCreateLinkObjectAction() : uml.CreateLinkObjectAction {
            let createLinkObjectAction : uml.impl.CreateLinkObjectActionImpl = new uml.impl.CreateLinkObjectActionImpl();
            return createLinkObjectAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCreateObjectAction() : uml.CreateObjectAction {
            let createObjectAction : uml.impl.CreateObjectActionImpl = new uml.impl.CreateObjectActionImpl();
            return createObjectAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDestroyLinkAction() : uml.DestroyLinkAction {
            let destroyLinkAction : uml.impl.DestroyLinkActionImpl = new uml.impl.DestroyLinkActionImpl();
            return destroyLinkAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLinkEndDestructionData() : uml.LinkEndDestructionData {
            let linkEndDestructionData : uml.impl.LinkEndDestructionDataImpl = new uml.impl.LinkEndDestructionDataImpl();
            return linkEndDestructionData;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDestroyObjectAction() : uml.DestroyObjectAction {
            let destroyObjectAction : uml.impl.DestroyObjectActionImpl = new uml.impl.DestroyObjectActionImpl();
            return destroyObjectAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExpansionNode() : uml.ExpansionNode {
            let expansionNode : uml.impl.ExpansionNodeImpl = new uml.impl.ExpansionNodeImpl();
            return expansionNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExpansionRegion() : uml.ExpansionRegion {
            let expansionRegion : uml.impl.ExpansionRegionImpl = new uml.impl.ExpansionRegionImpl();
            return expansionRegion;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLoopNode() : uml.LoopNode {
            let loopNode : uml.impl.LoopNodeImpl = new uml.impl.LoopNodeImpl();
            return loopNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOpaqueAction() : uml.OpaqueAction {
            let opaqueAction : uml.impl.OpaqueActionImpl = new uml.impl.OpaqueActionImpl();
            return opaqueAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRaiseExceptionAction() : uml.RaiseExceptionAction {
            let raiseExceptionAction : uml.impl.RaiseExceptionActionImpl = new uml.impl.RaiseExceptionActionImpl();
            return raiseExceptionAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadExtentAction() : uml.ReadExtentAction {
            let readExtentAction : uml.impl.ReadExtentActionImpl = new uml.impl.ReadExtentActionImpl();
            return readExtentAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadIsClassifiedObjectAction() : uml.ReadIsClassifiedObjectAction {
            let readIsClassifiedObjectAction : uml.impl.ReadIsClassifiedObjectActionImpl = new uml.impl.ReadIsClassifiedObjectActionImpl();
            return readIsClassifiedObjectAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadLinkAction() : uml.ReadLinkAction {
            let readLinkAction : uml.impl.ReadLinkActionImpl = new uml.impl.ReadLinkActionImpl();
            return readLinkAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadLinkObjectEndAction() : uml.ReadLinkObjectEndAction {
            let readLinkObjectEndAction : uml.impl.ReadLinkObjectEndActionImpl = new uml.impl.ReadLinkObjectEndActionImpl();
            return readLinkObjectEndAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadLinkObjectEndQualifierAction() : uml.ReadLinkObjectEndQualifierAction {
            let readLinkObjectEndQualifierAction : uml.impl.ReadLinkObjectEndQualifierActionImpl = new uml.impl.ReadLinkObjectEndQualifierActionImpl();
            return readLinkObjectEndQualifierAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadSelfAction() : uml.ReadSelfAction {
            let readSelfAction : uml.impl.ReadSelfActionImpl = new uml.impl.ReadSelfActionImpl();
            return readSelfAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadStructuralFeatureAction() : uml.ReadStructuralFeatureAction {
            let readStructuralFeatureAction : uml.impl.ReadStructuralFeatureActionImpl = new uml.impl.ReadStructuralFeatureActionImpl();
            return readStructuralFeatureAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReadVariableAction() : uml.ReadVariableAction {
            let readVariableAction : uml.impl.ReadVariableActionImpl = new uml.impl.ReadVariableActionImpl();
            return readVariableAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReclassifyObjectAction() : uml.ReclassifyObjectAction {
            let reclassifyObjectAction : uml.impl.ReclassifyObjectActionImpl = new uml.impl.ReclassifyObjectActionImpl();
            return reclassifyObjectAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReduceAction() : uml.ReduceAction {
            let reduceAction : uml.impl.ReduceActionImpl = new uml.impl.ReduceActionImpl();
            return reduceAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRemoveStructuralFeatureValueAction() : uml.RemoveStructuralFeatureValueAction {
            let removeStructuralFeatureValueAction : uml.impl.RemoveStructuralFeatureValueActionImpl = new uml.impl.RemoveStructuralFeatureValueActionImpl();
            return removeStructuralFeatureValueAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createRemoveVariableValueAction() : uml.RemoveVariableValueAction {
            let removeVariableValueAction : uml.impl.RemoveVariableValueActionImpl = new uml.impl.RemoveVariableValueActionImpl();
            return removeVariableValueAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createReplyAction() : uml.ReplyAction {
            let replyAction : uml.impl.ReplyActionImpl = new uml.impl.ReplyActionImpl();
            return replyAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSendObjectAction() : uml.SendObjectAction {
            let sendObjectAction : uml.impl.SendObjectActionImpl = new uml.impl.SendObjectActionImpl();
            return sendObjectAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSendSignalAction() : uml.SendSignalAction {
            let sendSignalAction : uml.impl.SendSignalActionImpl = new uml.impl.SendSignalActionImpl();
            return sendSignalAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSequenceNode() : uml.SequenceNode {
            let sequenceNode : uml.impl.SequenceNodeImpl = new uml.impl.SequenceNodeImpl();
            return sequenceNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createStartClassifierBehaviorAction() : uml.StartClassifierBehaviorAction {
            let startClassifierBehaviorAction : uml.impl.StartClassifierBehaviorActionImpl = new uml.impl.StartClassifierBehaviorActionImpl();
            return startClassifierBehaviorAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createStartObjectBehaviorAction() : uml.StartObjectBehaviorAction {
            let startObjectBehaviorAction : uml.impl.StartObjectBehaviorActionImpl = new uml.impl.StartObjectBehaviorActionImpl();
            return startObjectBehaviorAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTestIdentityAction() : uml.TestIdentityAction {
            let testIdentityAction : uml.impl.TestIdentityActionImpl = new uml.impl.TestIdentityActionImpl();
            return testIdentityAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createUnmarshallAction() : uml.UnmarshallAction {
            let unmarshallAction : uml.impl.UnmarshallActionImpl = new uml.impl.UnmarshallActionImpl();
            return unmarshallAction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createValuePin() : uml.ValuePin {
            let valuePin : uml.impl.ValuePinImpl = new uml.impl.ValuePinImpl();
            return valuePin;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createActivityFinalNode() : uml.ActivityFinalNode {
            let activityFinalNode : uml.impl.ActivityFinalNodeImpl = new uml.impl.ActivityFinalNodeImpl();
            return activityFinalNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createActivityParameterNode() : uml.ActivityParameterNode {
            let activityParameterNode : uml.impl.ActivityParameterNodeImpl = new uml.impl.ActivityParameterNodeImpl();
            return activityParameterNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCentralBufferNode() : uml.CentralBufferNode {
            let centralBufferNode : uml.impl.CentralBufferNodeImpl = new uml.impl.CentralBufferNodeImpl();
            return centralBufferNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createControlFlow() : uml.ControlFlow {
            let controlFlow : uml.impl.ControlFlowImpl = new uml.impl.ControlFlowImpl();
            return controlFlow;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDataStoreNode() : uml.DataStoreNode {
            let dataStoreNode : uml.impl.DataStoreNodeImpl = new uml.impl.DataStoreNodeImpl();
            return dataStoreNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDecisionNode() : uml.DecisionNode {
            let decisionNode : uml.impl.DecisionNodeImpl = new uml.impl.DecisionNodeImpl();
            return decisionNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createObjectFlow() : uml.ObjectFlow {
            let objectFlow : uml.impl.ObjectFlowImpl = new uml.impl.ObjectFlowImpl();
            return objectFlow;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFlowFinalNode() : uml.FlowFinalNode {
            let flowFinalNode : uml.impl.FlowFinalNodeImpl = new uml.impl.FlowFinalNodeImpl();
            return flowFinalNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createForkNode() : uml.ForkNode {
            let forkNode : uml.impl.ForkNodeImpl = new uml.impl.ForkNodeImpl();
            return forkNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInitialNode() : uml.InitialNode {
            let initialNode : uml.impl.InitialNodeImpl = new uml.impl.InitialNodeImpl();
            return initialNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createJoinNode() : uml.JoinNode {
            let joinNode : uml.impl.JoinNodeImpl = new uml.impl.JoinNodeImpl();
            return joinNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createMergeNode() : uml.MergeNode {
            let mergeNode : uml.impl.MergeNodeImpl = new uml.impl.MergeNodeImpl();
            return mergeNode;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInstanceValue() : uml.InstanceValue {
            let instanceValue : uml.impl.InstanceValueImpl = new uml.impl.InstanceValueImpl();
            return instanceValue;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAnyReceiveEvent() : uml.AnyReceiveEvent {
            let anyReceiveEvent : uml.impl.AnyReceiveEventImpl = new uml.impl.AnyReceiveEventImpl();
            return anyReceiveEvent;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCallEvent() : uml.CallEvent {
            let callEvent : uml.impl.CallEventImpl = new uml.impl.CallEventImpl();
            return callEvent;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createChangeEvent() : uml.ChangeEvent {
            let changeEvent : uml.impl.ChangeEventImpl = new uml.impl.ChangeEventImpl();
            return changeEvent;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFunctionBehavior() : uml.FunctionBehavior {
            let functionBehavior : uml.impl.FunctionBehaviorImpl = new uml.impl.FunctionBehaviorImpl();
            return functionBehavior;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOpaqueBehavior() : uml.OpaqueBehavior {
            let opaqueBehavior : uml.impl.OpaqueBehaviorImpl = new uml.impl.OpaqueBehaviorImpl();
            return opaqueBehavior;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createSignalEvent() : uml.SignalEvent {
            let signalEvent : uml.impl.SignalEventImpl = new uml.impl.SignalEventImpl();
            return signalEvent;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTimeEvent() : uml.TimeEvent {
            let timeEvent : uml.impl.TimeEventImpl = new uml.impl.TimeEventImpl();
            return timeEvent;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTimeExpression() : uml.TimeExpression {
            let timeExpression : uml.impl.TimeExpressionImpl = new uml.impl.TimeExpressionImpl();
            return timeExpression;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCommunicationPath() : uml.CommunicationPath {
            let communicationPath : uml.impl.CommunicationPathImpl = new uml.impl.CommunicationPathImpl();
            return communicationPath;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDevice() : uml.Device {
            let device : uml.impl.DeviceImpl = new uml.impl.DeviceImpl();
            return device;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createNode() : uml.Node {
            let node : uml.impl.NodeImpl = new uml.impl.NodeImpl();
            return node;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExecutionEnvironment() : uml.ExecutionEnvironment {
            let executionEnvironment : uml.impl.ExecutionEnvironmentImpl = new uml.impl.ExecutionEnvironmentImpl();
            return executionEnvironment;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInformationFlow() : uml.InformationFlow {
            let informationFlow : uml.impl.InformationFlowImpl = new uml.impl.InformationFlowImpl();
            return informationFlow;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createMessage() : uml.Message {
            let message : uml.impl.MessageImpl = new uml.impl.MessageImpl();
            return message;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInteraction() : uml.Interaction {
            let interaction : uml.impl.InteractionImpl = new uml.impl.InteractionImpl();
            return interaction;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLifeline() : uml.Lifeline {
            let lifeline : uml.impl.LifelineImpl = new uml.impl.LifelineImpl();
            return lifeline;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createPartDecomposition() : uml.PartDecomposition {
            let partDecomposition : uml.impl.PartDecompositionImpl = new uml.impl.PartDecompositionImpl();
            return partDecomposition;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInteractionUse() : uml.InteractionUse {
            let interactionUse : uml.impl.InteractionUseImpl = new uml.impl.InteractionUseImpl();
            return interactionUse;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createGate() : uml.Gate {
            let gate : uml.impl.GateImpl = new uml.impl.GateImpl();
            return gate;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInteractionOperand() : uml.InteractionOperand {
            let interactionOperand : uml.impl.InteractionOperandImpl = new uml.impl.InteractionOperandImpl();
            return interactionOperand;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInteractionConstraint() : uml.InteractionConstraint {
            let interactionConstraint : uml.impl.InteractionConstraintImpl = new uml.impl.InteractionConstraintImpl();
            return interactionConstraint;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createGeneralOrdering() : uml.GeneralOrdering {
            let generalOrdering : uml.impl.GeneralOrderingImpl = new uml.impl.GeneralOrderingImpl();
            return generalOrdering;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createOccurrenceSpecification() : uml.OccurrenceSpecification {
            let occurrenceSpecification : uml.impl.OccurrenceSpecificationImpl = new uml.impl.OccurrenceSpecificationImpl();
            return occurrenceSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInformationItem() : uml.InformationItem {
            let informationItem : uml.impl.InformationItemImpl = new uml.impl.InformationItemImpl();
            return informationItem;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createActionExecutionSpecification() : uml.ActionExecutionSpecification {
            let actionExecutionSpecification : uml.impl.ActionExecutionSpecificationImpl = new uml.impl.ActionExecutionSpecificationImpl();
            return actionExecutionSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createBehaviorExecutionSpecification() : uml.BehaviorExecutionSpecification {
            let behaviorExecutionSpecification : uml.impl.BehaviorExecutionSpecificationImpl = new uml.impl.BehaviorExecutionSpecificationImpl();
            return behaviorExecutionSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createCombinedFragment() : uml.CombinedFragment {
            let combinedFragment : uml.impl.CombinedFragmentImpl = new uml.impl.CombinedFragmentImpl();
            return combinedFragment;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createConsiderIgnoreFragment() : uml.ConsiderIgnoreFragment {
            let considerIgnoreFragment : uml.impl.ConsiderIgnoreFragmentImpl = new uml.impl.ConsiderIgnoreFragmentImpl();
            return considerIgnoreFragment;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createContinuation() : uml.Continuation {
            let continuation : uml.impl.ContinuationImpl = new uml.impl.ContinuationImpl();
            return continuation;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDestructionOccurrenceSpecification() : uml.DestructionOccurrenceSpecification {
            let destructionOccurrenceSpecification : uml.impl.DestructionOccurrenceSpecificationImpl = new uml.impl.DestructionOccurrenceSpecificationImpl();
            return destructionOccurrenceSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createMessageOccurrenceSpecification() : uml.MessageOccurrenceSpecification {
            let messageOccurrenceSpecification : uml.impl.MessageOccurrenceSpecificationImpl = new uml.impl.MessageOccurrenceSpecificationImpl();
            return messageOccurrenceSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createExecutionOccurrenceSpecification() : uml.ExecutionOccurrenceSpecification {
            let executionOccurrenceSpecification : uml.impl.ExecutionOccurrenceSpecificationImpl = new uml.impl.ExecutionOccurrenceSpecificationImpl();
            return executionOccurrenceSpecification;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createStateInvariant() : uml.StateInvariant {
            let stateInvariant : uml.impl.StateInvariantImpl = new uml.impl.StateInvariantImpl();
            return stateInvariant;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createFinalState() : uml.FinalState {
            let finalState : uml.impl.FinalStateImpl = new uml.impl.FinalStateImpl();
            return finalState;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createProtocolTransition() : uml.ProtocolTransition {
            let protocolTransition : uml.impl.ProtocolTransitionImpl = new uml.impl.ProtocolTransitionImpl();
            return protocolTransition;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createAssociationClass() : uml.AssociationClass {
            let associationClass : uml.impl.AssociationClassImpl = new uml.impl.AssociationClassImpl();
            return associationClass;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createComponent() : uml.Component {
            let component : uml.impl.ComponentImpl = new uml.impl.ComponentImpl();
            return component;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createComponentRealization() : uml.ComponentRealization {
            let componentRealization : uml.impl.ComponentRealizationImpl = new uml.impl.ComponentRealizationImpl();
            return componentRealization;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createActor() : uml.Actor {
            let actor : uml.impl.ActorImpl = new uml.impl.ActorImpl();
            return actor;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDuration() : uml.Duration {
            let duration : uml.impl.DurationImpl = new uml.impl.DurationImpl();
            return duration;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDurationConstraint() : uml.DurationConstraint {
            let durationConstraint : uml.impl.DurationConstraintImpl = new uml.impl.DurationConstraintImpl();
            return durationConstraint;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createIntervalConstraint() : uml.IntervalConstraint {
            let intervalConstraint : uml.impl.IntervalConstraintImpl = new uml.impl.IntervalConstraintImpl();
            return intervalConstraint;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createInterval() : uml.Interval {
            let interval : uml.impl.IntervalImpl = new uml.impl.IntervalImpl();
            return interval;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDurationInterval() : uml.DurationInterval {
            let durationInterval : uml.impl.DurationIntervalImpl = new uml.impl.DurationIntervalImpl();
            return durationInterval;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createDurationObservation() : uml.DurationObservation {
            let durationObservation : uml.impl.DurationObservationImpl = new uml.impl.DurationObservationImpl();
            return durationObservation;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLiteralBoolean() : uml.LiteralBoolean {
            let literalBoolean : uml.impl.LiteralBooleanImpl = new uml.impl.LiteralBooleanImpl();
            return literalBoolean;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLiteralInteger() : uml.LiteralInteger {
            let literalInteger : uml.impl.LiteralIntegerImpl = new uml.impl.LiteralIntegerImpl();
            return literalInteger;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLiteralNull() : uml.LiteralNull {
            let literalNull : uml.impl.LiteralNullImpl = new uml.impl.LiteralNullImpl();
            return literalNull;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLiteralReal() : uml.LiteralReal {
            let literalReal : uml.impl.LiteralRealImpl = new uml.impl.LiteralRealImpl();
            return literalReal;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLiteralString() : uml.LiteralString {
            let literalString : uml.impl.LiteralStringImpl = new uml.impl.LiteralStringImpl();
            return literalString;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createLiteralUnlimitedNatural() : uml.LiteralUnlimitedNatural {
            let literalUnlimitedNatural : uml.impl.LiteralUnlimitedNaturalImpl = new uml.impl.LiteralUnlimitedNaturalImpl();
            return literalUnlimitedNatural;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTimeConstraint() : uml.TimeConstraint {
            let timeConstraint : uml.impl.TimeConstraintImpl = new uml.impl.TimeConstraintImpl();
            return timeConstraint;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTimeInterval() : uml.TimeInterval {
            let timeInterval : uml.impl.TimeIntervalImpl = new uml.impl.TimeIntervalImpl();
            return timeInterval;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public createTimeObservation() : uml.TimeObservation {
            let timeObservation : uml.impl.TimeObservationImpl = new uml.impl.TimeObservationImpl();
            return timeObservation;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.VisibilityKind}
         */
        public createVisibilityKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.VisibilityKind {
            let result : uml.VisibilityKind = uml.VisibilityKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertVisibilityKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.ParameterDirectionKind}
         */
        public createParameterDirectionKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.ParameterDirectionKind {
            let result : uml.ParameterDirectionKind = uml.ParameterDirectionKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertParameterDirectionKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.ParameterEffectKind}
         */
        public createParameterEffectKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.ParameterEffectKind {
            let result : uml.ParameterEffectKind = uml.ParameterEffectKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertParameterEffectKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.CallConcurrencyKind}
         */
        public createCallConcurrencyKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.CallConcurrencyKind {
            let result : uml.CallConcurrencyKind = uml.CallConcurrencyKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertCallConcurrencyKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.TransitionKind}
         */
        public createTransitionKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.TransitionKind {
            let result : uml.TransitionKind = uml.TransitionKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertTransitionKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.PseudostateKind}
         */
        public createPseudostateKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.PseudostateKind {
            let result : uml.PseudostateKind = uml.PseudostateKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertPseudostateKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.AggregationKind}
         */
        public createAggregationKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.AggregationKind {
            let result : uml.AggregationKind = uml.AggregationKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertAggregationKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.ConnectorKind}
         */
        public createConnectorKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.ConnectorKind {
            let result : uml.ConnectorKind = uml.ConnectorKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertConnectorKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.ObjectNodeOrderingKind}
         */
        public createObjectNodeOrderingKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.ObjectNodeOrderingKind {
            let result : uml.ObjectNodeOrderingKind = uml.ObjectNodeOrderingKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertObjectNodeOrderingKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.ExpansionKind}
         */
        public createExpansionKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.ExpansionKind {
            let result : uml.ExpansionKind = uml.ExpansionKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertExpansionKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.MessageKind}
         */
        public createMessageKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.MessageKind {
            let result : uml.MessageKind = uml.MessageKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertMessageKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.MessageSort}
         */
        public createMessageSortFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.MessageSort {
            let result : uml.MessageSort = uml.MessageSort_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertMessageSortToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {string} initialValue
         * @return {uml.InteractionOperatorKind}
         */
        public createInteractionOperatorKindFromString(eDataType : org.eclipse.emf.ecore.EDataType, initialValue : string) : uml.InteractionOperatorKind {
            let result : uml.InteractionOperatorKind = uml.InteractionOperatorKind_$WRAPPER.get(initialValue);
            if(result == null) throw Object.defineProperty(new Error("The value \'" + initialValue + "\' is not a valid enumerator of \'" + eDataType.getName() + "\'"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            return result;
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @param {*} eDataType
         * @param {*} instanceValue
         * @return {string}
         */
        public convertInteractionOperatorKindToString(eDataType : org.eclipse.emf.ecore.EDataType, instanceValue : any) : string {
            return instanceValue == null?null:instanceValue.toString();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         * @return {*}
         */
        public getUmlPackage() : uml.UmlPackage {
            return <uml.UmlPackage><any>this.getEPackage();
        }

        /**
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @deprecated
         * @generated
         * @return {*}
         */
        public static getPackage() : uml.UmlPackage {
            return uml.UmlPackage.eINSTANCE;
        }
    }
    UmlFactoryImpl["__class"] = "uml.impl.UmlFactoryImpl";
    UmlFactoryImpl["__interfaces"] = ["org.eclipse.emf.ecore.EModelElement","uml.UmlFactory","org.eclipse.emf.ecore.EFactory","org.eclipse.emf.ecore.EStructuralFeature.Internal.DynamicValueHolder","org.eclipse.emf.ecore.EObject","org.eclipse.emf.common.notify.Notifier","org.eclipse.emf.ecore.InternalEObject","org.eclipse.emf.ecore.resource.impl.BinaryResourceImpl.DataConverter.Factory"];


}

