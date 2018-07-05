/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.util {
    /**
     * Creates an instance of the adapter factory.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl
     */
    export class UmlAdapterFactory extends org.eclipse.emf.common.notify.impl.AdapterFactoryImpl {
        /**
         * The cached model package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : uml.UmlPackage = null;

        public constructor() {
            super();
            if(UmlAdapterFactory.modelPackage == null) {
                UmlAdapterFactory.modelPackage = uml.UmlPackage.eINSTANCE;
            }
        }

        /**
         * Returns whether this factory is applicable for the type of the object.
         * <!-- begin-user-doc -->
         * This implementation returns <code>true</code> if the object is either the model's package or is an instance object of the model.
         * <!-- end-user-doc -->
         * @return {boolean} whether this factory is applicable for the type of the object.
         * @generated
         * @param {*} object
         */
        public isFactoryForType(object : any) : boolean {
            if(object === UmlAdapterFactory.modelPackage) {
                return true;
            }
            if(object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("org.eclipse.emf.ecore.EObject") >= 0)) {
                return (<org.eclipse.emf.ecore.EObject><any>object).eClass().getEPackage() === UmlAdapterFactory.modelPackage;
            }
            return false;
        }

        /**
         * The switch that delegates to the <code>createXXX</code> methods.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        modelSwitch : uml.util.UmlSwitch<org.eclipse.emf.common.notify.Adapter> = new UmlAdapterFactory.UmlAdapterFactory$0(this);

        /**
         * Creates an adapter for the <code>target</code>.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} target the object to adapt.
         * @return {*} the adapter for the <code>target</code>.
         * @generated
         */
        public createAdapter(target : org.eclipse.emf.common.notify.Notifier) : org.eclipse.emf.common.notify.Adapter {
            return this.modelSwitch.doSwitch(<org.eclipse.emf.ecore.EObject><any>target);
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActivityContent
         * @generated
         */
        public createActivityContentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Activity
         * @generated
         */
        public createActivityAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Behavior
         * @generated
         */
        public createBehaviorAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Class
         * @generated
         */
        public createClassAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.BehavioredClassifier
         * @generated
         */
        public createBehavioredClassifierAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Classifier
         * @generated
         */
        public createClassifierAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Namespace
         * @generated
         */
        public createNamespaceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.NamedElement
         * @generated
         */
        public createNamedElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Element
         * @generated
         */
        public createElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Comment
         * @generated
         */
        public createCommentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Stereotype
         * @generated
         */
        public createStereotypeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Image
         * @generated
         */
        public createImageAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Profile
         * @generated
         */
        public createProfileAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Package
         * @generated
         */
        public createPackageAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.PackageableElement
         * @generated
         */
        public createPackageableElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ParameterableElement
         * @generated
         */
        public createParameterableElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TemplateParameter
         * @generated
         */
        public createTemplateParameterAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TemplateSignature
         * @generated
         */
        public createTemplateSignatureAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TemplateableElement
         * @generated
         */
        public createTemplateableElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TemplateBinding
         * @generated
         */
        public createTemplateBindingAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DirectedRelationship
         * @generated
         */
        public createDirectedRelationshipAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Relationship
         * @generated
         */
        public createRelationshipAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TemplateParameterSubstitution
         * @generated
         */
        public createTemplateParameterSubstitutionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Type
         * @generated
         */
        public createTypeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Association
         * @generated
         */
        public createAssociationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Property
         * @generated
         */
        public createPropertyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ConnectableElement
         * @generated
         */
        public createConnectableElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TypedElement
         * @generated
         */
        public createTypedElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ConnectorEnd
         * @generated
         */
        public createConnectorEndAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.MultiplicityElement
         * @generated
         */
        public createMultiplicityElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ValueSpecification
         * @generated
         */
        public createValueSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ConnectableElementTemplateParameter
         * @generated
         */
        public createConnectableElementTemplateParameterAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DeploymentTarget
         * @generated
         */
        public createDeploymentTargetAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Deployment
         * @generated
         */
        public createDeploymentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Dependency
         * @generated
         */
        public createDependencyAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DeploymentSpecification
         * @generated
         */
        public createDeploymentSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Artifact
         * @generated
         */
        public createArtifactAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DeployedArtifact
         * @generated
         */
        public createDeployedArtifactAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Manifestation
         * @generated
         */
        public createManifestationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Abstraction
         * @generated
         */
        public createAbstractionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.OpaqueExpression
         * @generated
         */
        public createOpaqueExpressionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Parameter
         * @generated
         */
        public createParameterAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Operation
         * @generated
         */
        public createOperationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.BehavioralFeature
         * @generated
         */
        public createBehavioralFeatureAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Feature
         * @generated
         */
        public createFeatureAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.RedefinableElement
         * @generated
         */
        public createRedefinableElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ParameterSet
         * @generated
         */
        public createParameterSetAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Constraint
         * @generated
         */
        public createConstraintAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DataType
         * @generated
         */
        public createDataTypeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Interface
         * @generated
         */
        public createInterfaceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Reception
         * @generated
         */
        public createReceptionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Signal
         * @generated
         */
        public createSignalAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ProtocolStateMachine
         * @generated
         */
        public createProtocolStateMachineAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StateMachine
         * @generated
         */
        public createStateMachineAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Pseudostate
         * @generated
         */
        public createPseudostateAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Vertex
         * @generated
         */
        public createVertexAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Region
         * @generated
         */
        public createRegionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.State
         * @generated
         */
        public createStateAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ConnectionPointReference
         * @generated
         */
        public createConnectionPointReferenceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Trigger
         * @generated
         */
        public createTriggerAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Event
         * @generated
         */
        public createEventAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Port
         * @generated
         */
        public createPortAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Transition
         * @generated
         */
        public createTransitionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ProtocolConformance
         * @generated
         */
        public createProtocolConformanceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.OperationTemplateParameter
         * @generated
         */
        public createOperationTemplateParameterAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StructuralFeature
         * @generated
         */
        public createStructuralFeatureAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.PackageMerge
         * @generated
         */
        public createPackageMergeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ProfileApplication
         * @generated
         */
        public createProfileApplicationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Enumeration
         * @generated
         */
        public createEnumerationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.EnumerationLiteral
         * @generated
         */
        public createEnumerationLiteralAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InstanceSpecification
         * @generated
         */
        public createInstanceSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Slot
         * @generated
         */
        public createSlotAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.PrimitiveType
         * @generated
         */
        public createPrimitiveTypeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ElementImport
         * @generated
         */
        public createElementImportAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.PackageImport
         * @generated
         */
        public createPackageImportAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Extension
         * @generated
         */
        public createExtensionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExtensionEnd
         * @generated
         */
        public createExtensionEndAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Model
         * @generated
         */
        public createModelAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StringExpression
         * @generated
         */
        public createStringExpressionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Expression
         * @generated
         */
        public createExpressionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Usage
         * @generated
         */
        public createUsageAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CollaborationUse
         * @generated
         */
        public createCollaborationUseAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Collaboration
         * @generated
         */
        public createCollaborationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StructuredClassifier
         * @generated
         */
        public createStructuredClassifierAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Connector
         * @generated
         */
        public createConnectorAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Generalization
         * @generated
         */
        public createGeneralizationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.GeneralizationSet
         * @generated
         */
        public createGeneralizationSetAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.RedefinableTemplateSignature
         * @generated
         */
        public createRedefinableTemplateSignatureAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.UseCase
         * @generated
         */
        public createUseCaseAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Extend
         * @generated
         */
        public createExtendAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExtensionPoint
         * @generated
         */
        public createExtensionPointAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Include
         * @generated
         */
        public createIncludeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Substitution
         * @generated
         */
        public createSubstitutionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Realization
         * @generated
         */
        public createRealizationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ClassifierTemplateParameter
         * @generated
         */
        public createClassifierTemplateParameterAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InterfaceRealization
         * @generated
         */
        public createInterfaceRealizationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.EncapsulatedClassifier
         * @generated
         */
        public createEncapsulatedClassifierAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActivityGroup
         * @generated
         */
        public createActivityGroupAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActivityEdge
         * @generated
         */
        public createActivityEdgeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActivityPartition
         * @generated
         */
        public createActivityPartitionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActivityNode
         * @generated
         */
        public createActivityNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InterruptibleActivityRegion
         * @generated
         */
        public createInterruptibleActivityRegionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StructuredActivityNode
         * @generated
         */
        public createStructuredActivityNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Action
         * @generated
         */
        public createActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExecutableNode
         * @generated
         */
        public createExecutableNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExceptionHandler
         * @generated
         */
        public createExceptionHandlerAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ObjectNode
         * @generated
         */
        public createObjectNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InputPin
         * @generated
         */
        public createInputPinAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Pin
         * @generated
         */
        public createPinAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.OutputPin
         * @generated
         */
        public createOutputPinAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Variable
         * @generated
         */
        public createVariableAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ValueSpecificationAction
         * @generated
         */
        public createValueSpecificationActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.VariableAction
         * @generated
         */
        public createVariableActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.WriteLinkAction
         * @generated
         */
        public createWriteLinkActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LinkAction
         * @generated
         */
        public createLinkActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LinkEndData
         * @generated
         */
        public createLinkEndDataAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.QualifierValue
         * @generated
         */
        public createQualifierValueAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.WriteStructuralFeatureAction
         * @generated
         */
        public createWriteStructuralFeatureActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StructuralFeatureAction
         * @generated
         */
        public createStructuralFeatureActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.WriteVariableAction
         * @generated
         */
        public createWriteVariableActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.AcceptCallAction
         * @generated
         */
        public createAcceptCallActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.AcceptEventAction
         * @generated
         */
        public createAcceptEventActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActionInputPin
         * @generated
         */
        public createActionInputPinAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.AddStructuralFeatureValueAction
         * @generated
         */
        public createAddStructuralFeatureValueActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.AddVariableValueAction
         * @generated
         */
        public createAddVariableValueActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.BroadcastSignalAction
         * @generated
         */
        public createBroadcastSignalActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InvocationAction
         * @generated
         */
        public createInvocationActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CallAction
         * @generated
         */
        public createCallActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CallBehaviorAction
         * @generated
         */
        public createCallBehaviorActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CallOperationAction
         * @generated
         */
        public createCallOperationActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Clause
         * @generated
         */
        public createClauseAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ClearAssociationAction
         * @generated
         */
        public createClearAssociationActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ClearStructuralFeatureAction
         * @generated
         */
        public createClearStructuralFeatureActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ClearVariableAction
         * @generated
         */
        public createClearVariableActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ConditionalNode
         * @generated
         */
        public createConditionalNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CreateLinkAction
         * @generated
         */
        public createCreateLinkActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LinkEndCreationData
         * @generated
         */
        public createLinkEndCreationDataAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CreateLinkObjectAction
         * @generated
         */
        public createCreateLinkObjectActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CreateObjectAction
         * @generated
         */
        public createCreateObjectActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DestroyLinkAction
         * @generated
         */
        public createDestroyLinkActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LinkEndDestructionData
         * @generated
         */
        public createLinkEndDestructionDataAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DestroyObjectAction
         * @generated
         */
        public createDestroyObjectActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExpansionNode
         * @generated
         */
        public createExpansionNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExpansionRegion
         * @generated
         */
        public createExpansionRegionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LoopNode
         * @generated
         */
        public createLoopNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.OpaqueAction
         * @generated
         */
        public createOpaqueActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.RaiseExceptionAction
         * @generated
         */
        public createRaiseExceptionActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadExtentAction
         * @generated
         */
        public createReadExtentActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadIsClassifiedObjectAction
         * @generated
         */
        public createReadIsClassifiedObjectActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadLinkAction
         * @generated
         */
        public createReadLinkActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadLinkObjectEndAction
         * @generated
         */
        public createReadLinkObjectEndActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadLinkObjectEndQualifierAction
         * @generated
         */
        public createReadLinkObjectEndQualifierActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadSelfAction
         * @generated
         */
        public createReadSelfActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadStructuralFeatureAction
         * @generated
         */
        public createReadStructuralFeatureActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReadVariableAction
         * @generated
         */
        public createReadVariableActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReclassifyObjectAction
         * @generated
         */
        public createReclassifyObjectActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReduceAction
         * @generated
         */
        public createReduceActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.RemoveStructuralFeatureValueAction
         * @generated
         */
        public createRemoveStructuralFeatureValueActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.RemoveVariableValueAction
         * @generated
         */
        public createRemoveVariableValueActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ReplyAction
         * @generated
         */
        public createReplyActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.SendObjectAction
         * @generated
         */
        public createSendObjectActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.SendSignalAction
         * @generated
         */
        public createSendSignalActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.SequenceNode
         * @generated
         */
        public createSequenceNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StartClassifierBehaviorAction
         * @generated
         */
        public createStartClassifierBehaviorActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StartObjectBehaviorAction
         * @generated
         */
        public createStartObjectBehaviorActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TestIdentityAction
         * @generated
         */
        public createTestIdentityActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.UnmarshallAction
         * @generated
         */
        public createUnmarshallActionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ValuePin
         * @generated
         */
        public createValuePinAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActivityFinalNode
         * @generated
         */
        public createActivityFinalNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.FinalNode
         * @generated
         */
        public createFinalNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ControlNode
         * @generated
         */
        public createControlNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActivityParameterNode
         * @generated
         */
        public createActivityParameterNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CentralBufferNode
         * @generated
         */
        public createCentralBufferNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ControlFlow
         * @generated
         */
        public createControlFlowAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DataStoreNode
         * @generated
         */
        public createDataStoreNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DecisionNode
         * @generated
         */
        public createDecisionNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ObjectFlow
         * @generated
         */
        public createObjectFlowAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.FlowFinalNode
         * @generated
         */
        public createFlowFinalNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ForkNode
         * @generated
         */
        public createForkNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InitialNode
         * @generated
         */
        public createInitialNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.JoinNode
         * @generated
         */
        public createJoinNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.MergeNode
         * @generated
         */
        public createMergeNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InstanceValue
         * @generated
         */
        public createInstanceValueAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.AnyReceiveEvent
         * @generated
         */
        public createAnyReceiveEventAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.MessageEvent
         * @generated
         */
        public createMessageEventAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CallEvent
         * @generated
         */
        public createCallEventAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ChangeEvent
         * @generated
         */
        public createChangeEventAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.FunctionBehavior
         * @generated
         */
        public createFunctionBehaviorAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.OpaqueBehavior
         * @generated
         */
        public createOpaqueBehaviorAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.SignalEvent
         * @generated
         */
        public createSignalEventAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TimeEvent
         * @generated
         */
        public createTimeEventAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TimeExpression
         * @generated
         */
        public createTimeExpressionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Observation
         * @generated
         */
        public createObservationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CommunicationPath
         * @generated
         */
        public createCommunicationPathAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Device
         * @generated
         */
        public createDeviceAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Node
         * @generated
         */
        public createNodeAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExecutionEnvironment
         * @generated
         */
        public createExecutionEnvironmentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InformationFlow
         * @generated
         */
        public createInformationFlowAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Message
         * @generated
         */
        public createMessageAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Interaction
         * @generated
         */
        public createInteractionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InteractionFragment
         * @generated
         */
        public createInteractionFragmentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Lifeline
         * @generated
         */
        public createLifelineAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.PartDecomposition
         * @generated
         */
        public createPartDecompositionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InteractionUse
         * @generated
         */
        public createInteractionUseAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Gate
         * @generated
         */
        public createGateAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.MessageEnd
         * @generated
         */
        public createMessageEndAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InteractionOperand
         * @generated
         */
        public createInteractionOperandAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InteractionConstraint
         * @generated
         */
        public createInteractionConstraintAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.GeneralOrdering
         * @generated
         */
        public createGeneralOrderingAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.OccurrenceSpecification
         * @generated
         */
        public createOccurrenceSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.InformationItem
         * @generated
         */
        public createInformationItemAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ActionExecutionSpecification
         * @generated
         */
        public createActionExecutionSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExecutionSpecification
         * @generated
         */
        public createExecutionSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.BehaviorExecutionSpecification
         * @generated
         */
        public createBehaviorExecutionSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.CombinedFragment
         * @generated
         */
        public createCombinedFragmentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ConsiderIgnoreFragment
         * @generated
         */
        public createConsiderIgnoreFragmentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Continuation
         * @generated
         */
        public createContinuationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DestructionOccurrenceSpecification
         * @generated
         */
        public createDestructionOccurrenceSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.MessageOccurrenceSpecification
         * @generated
         */
        public createMessageOccurrenceSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ExecutionOccurrenceSpecification
         * @generated
         */
        public createExecutionOccurrenceSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.StateInvariant
         * @generated
         */
        public createStateInvariantAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.FinalState
         * @generated
         */
        public createFinalStateAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ProtocolTransition
         * @generated
         */
        public createProtocolTransitionAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.AssociationClass
         * @generated
         */
        public createAssociationClassAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Component
         * @generated
         */
        public createComponentAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.ComponentRealization
         * @generated
         */
        public createComponentRealizationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Actor
         * @generated
         */
        public createActorAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Duration
         * @generated
         */
        public createDurationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DurationConstraint
         * @generated
         */
        public createDurationConstraintAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.IntervalConstraint
         * @generated
         */
        public createIntervalConstraintAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.Interval
         * @generated
         */
        public createIntervalAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DurationInterval
         * @generated
         */
        public createDurationIntervalAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.DurationObservation
         * @generated
         */
        public createDurationObservationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LiteralBoolean
         * @generated
         */
        public createLiteralBooleanAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LiteralSpecification
         * @generated
         */
        public createLiteralSpecificationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LiteralInteger
         * @generated
         */
        public createLiteralIntegerAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LiteralNull
         * @generated
         */
        public createLiteralNullAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LiteralReal
         * @generated
         */
        public createLiteralRealAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LiteralString
         * @generated
         */
        public createLiteralStringAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.LiteralUnlimitedNatural
         * @generated
         */
        public createLiteralUnlimitedNaturalAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TimeConstraint
         * @generated
         */
        public createTimeConstraintAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TimeInterval
         * @generated
         */
        public createTimeIntervalAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see uml.TimeObservation
         * @generated
         */
        public createTimeObservationAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for an object of class '{@link *}'.
         * <!-- begin-user-doc -->
         * This default implementation returns null so that we can easily ignore cases;
         * it's useful to ignore a case when inheritance will catch all the cases anyway.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @see ecore4m.EModelElement
         * @generated
         */
        public createEModelElementAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }

        /**
         * Creates a new adapter for the default case.
         * <!-- begin-user-doc -->
         * This default implementation returns null.
         * <!-- end-user-doc -->
         * @return {*} the new adapter.
         * @generated
         */
        public createEObjectAdapter() : org.eclipse.emf.common.notify.Adapter {
            return null;
        }
    }
    UmlAdapterFactory["__class"] = "uml.util.UmlAdapterFactory";
    UmlAdapterFactory["__interfaces"] = ["org.eclipse.emf.common.notify.AdapterFactory"];



    export namespace UmlAdapterFactory {

        export class UmlAdapterFactory$0 extends uml.util.UmlSwitch<org.eclipse.emf.common.notify.Adapter> {
            public __parent: any;
            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivityContent(object : uml.ActivityContent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityContentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivity(object : uml.Activity) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBehavior(object : uml.Behavior) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBehaviorAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseClass(object : uml.Class) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createClassAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBehavioredClassifier(object : uml.BehavioredClassifier) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBehavioredClassifierAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseClassifier(object : uml.Classifier) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createClassifierAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseNamespace(object : uml.Namespace) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createNamespaceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseNamedElement(object : uml.NamedElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createNamedElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseElement(object : uml.Element) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseComment(object : uml.Comment) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCommentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStereotype(object : uml.Stereotype) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStereotypeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseImage(object : uml.Image) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createImageAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProfile(object : uml.Profile) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createProfileAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePackage(object : uml.Package) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPackageAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePackageableElement(object : uml.PackageableElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPackageableElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseParameterableElement(object : uml.ParameterableElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createParameterableElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTemplateParameter(object : uml.TemplateParameter) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTemplateParameterAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTemplateSignature(object : uml.TemplateSignature) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTemplateSignatureAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTemplateableElement(object : uml.TemplateableElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTemplateableElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTemplateBinding(object : uml.TemplateBinding) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTemplateBindingAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDirectedRelationship(object : uml.DirectedRelationship) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDirectedRelationshipAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRelationship(object : uml.Relationship) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRelationshipAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTemplateParameterSubstitution(object : uml.TemplateParameterSubstitution) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTemplateParameterSubstitutionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseType(object : uml.Type) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTypeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAssociation(object : uml.Association) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAssociationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProperty(object : uml.Property) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPropertyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConnectableElement(object : uml.ConnectableElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConnectableElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTypedElement(object : uml.TypedElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTypedElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConnectorEnd(object : uml.ConnectorEnd) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConnectorEndAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMultiplicityElement(object : uml.MultiplicityElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMultiplicityElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseValueSpecification(object : uml.ValueSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createValueSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConnectableElementTemplateParameter(object : uml.ConnectableElementTemplateParameter) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConnectableElementTemplateParameterAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDeploymentTarget(object : uml.DeploymentTarget) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDeploymentTargetAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDeployment(object : uml.Deployment) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDeploymentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDependency(object : uml.Dependency) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDependencyAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDeploymentSpecification(object : uml.DeploymentSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDeploymentSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseArtifact(object : uml.Artifact) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createArtifactAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDeployedArtifact(object : uml.DeployedArtifact) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDeployedArtifactAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseManifestation(object : uml.Manifestation) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createManifestationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAbstraction(object : uml.Abstraction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAbstractionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOpaqueExpression(object : uml.OpaqueExpression) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOpaqueExpressionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseParameter(object : uml.Parameter) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createParameterAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOperation(object : uml.Operation) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOperationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBehavioralFeature(object : uml.BehavioralFeature) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBehavioralFeatureAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFeature(object : uml.Feature) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFeatureAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRedefinableElement(object : uml.RedefinableElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRedefinableElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseParameterSet(object : uml.ParameterSet) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createParameterSetAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConstraint(object : uml.Constraint) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConstraintAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDataType(object : uml.DataType) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDataTypeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInterface(object : uml.Interface) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInterfaceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReception(object : uml.Reception) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReceptionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSignal(object : uml.Signal) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSignalAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProtocolStateMachine(object : uml.ProtocolStateMachine) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createProtocolStateMachineAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStateMachine(object : uml.StateMachine) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStateMachineAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePseudostate(object : uml.Pseudostate) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPseudostateAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseVertex(object : uml.Vertex) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createVertexAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRegion(object : uml.Region) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRegionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseState(object : uml.State) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStateAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConnectionPointReference(object : uml.ConnectionPointReference) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConnectionPointReferenceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTrigger(object : uml.Trigger) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTriggerAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseEvent(object : uml.Event) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEventAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePort(object : uml.Port) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPortAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTransition(object : uml.Transition) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTransitionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProtocolConformance(object : uml.ProtocolConformance) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createProtocolConformanceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOperationTemplateParameter(object : uml.OperationTemplateParameter) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOperationTemplateParameterAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStructuralFeature(object : uml.StructuralFeature) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStructuralFeatureAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePackageMerge(object : uml.PackageMerge) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPackageMergeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProfileApplication(object : uml.ProfileApplication) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createProfileApplicationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseEnumeration(object : uml.Enumeration) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEnumerationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseEnumerationLiteral(object : uml.EnumerationLiteral) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEnumerationLiteralAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInstanceSpecification(object : uml.InstanceSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInstanceSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSlot(object : uml.Slot) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSlotAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePrimitiveType(object : uml.PrimitiveType) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPrimitiveTypeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseElementImport(object : uml.ElementImport) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createElementImportAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePackageImport(object : uml.PackageImport) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPackageImportAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExtension(object : uml.Extension) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExtensionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExtensionEnd(object : uml.ExtensionEnd) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExtensionEndAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseModel(object : uml.Model) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createModelAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStringExpression(object : uml.StringExpression) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStringExpressionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExpression(object : uml.Expression) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExpressionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseUsage(object : uml.Usage) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createUsageAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCollaborationUse(object : uml.CollaborationUse) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCollaborationUseAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCollaboration(object : uml.Collaboration) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCollaborationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStructuredClassifier(object : uml.StructuredClassifier) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStructuredClassifierAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConnector(object : uml.Connector) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConnectorAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseGeneralization(object : uml.Generalization) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createGeneralizationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseGeneralizationSet(object : uml.GeneralizationSet) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createGeneralizationSetAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRedefinableTemplateSignature(object : uml.RedefinableTemplateSignature) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRedefinableTemplateSignatureAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseUseCase(object : uml.UseCase) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createUseCaseAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExtend(object : uml.Extend) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExtendAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExtensionPoint(object : uml.ExtensionPoint) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExtensionPointAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInclude(object : uml.Include) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createIncludeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSubstitution(object : uml.Substitution) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSubstitutionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRealization(object : uml.Realization) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRealizationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseClassifierTemplateParameter(object : uml.ClassifierTemplateParameter) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createClassifierTemplateParameterAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInterfaceRealization(object : uml.InterfaceRealization) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInterfaceRealizationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseEncapsulatedClassifier(object : uml.EncapsulatedClassifier) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEncapsulatedClassifierAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivityGroup(object : uml.ActivityGroup) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityGroupAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivityEdge(object : uml.ActivityEdge) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityEdgeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivityPartition(object : uml.ActivityPartition) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityPartitionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivityNode(object : uml.ActivityNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInterruptibleActivityRegion(object : uml.InterruptibleActivityRegion) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInterruptibleActivityRegionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStructuredActivityNode(object : uml.StructuredActivityNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStructuredActivityNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAction(object : uml.Action) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExecutableNode(object : uml.ExecutableNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExecutableNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExceptionHandler(object : uml.ExceptionHandler) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExceptionHandlerAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseObjectNode(object : uml.ObjectNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createObjectNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInputPin(object : uml.InputPin) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInputPinAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePin(object : uml.Pin) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPinAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOutputPin(object : uml.OutputPin) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOutputPinAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseVariable(object : uml.Variable) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createVariableAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseValueSpecificationAction(object : uml.ValueSpecificationAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createValueSpecificationActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseVariableAction(object : uml.VariableAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createVariableActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseWriteLinkAction(object : uml.WriteLinkAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createWriteLinkActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLinkAction(object : uml.LinkAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLinkActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLinkEndData(object : uml.LinkEndData) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLinkEndDataAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseQualifierValue(object : uml.QualifierValue) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createQualifierValueAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseWriteStructuralFeatureAction(object : uml.WriteStructuralFeatureAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createWriteStructuralFeatureActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStructuralFeatureAction(object : uml.StructuralFeatureAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStructuralFeatureActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseWriteVariableAction(object : uml.WriteVariableAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createWriteVariableActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAcceptCallAction(object : uml.AcceptCallAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAcceptCallActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAcceptEventAction(object : uml.AcceptEventAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAcceptEventActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActionInputPin(object : uml.ActionInputPin) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActionInputPinAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAddStructuralFeatureValueAction(object : uml.AddStructuralFeatureValueAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAddStructuralFeatureValueActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAddVariableValueAction(object : uml.AddVariableValueAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAddVariableValueActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBroadcastSignalAction(object : uml.BroadcastSignalAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBroadcastSignalActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInvocationAction(object : uml.InvocationAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInvocationActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCallAction(object : uml.CallAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCallActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCallBehaviorAction(object : uml.CallBehaviorAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCallBehaviorActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCallOperationAction(object : uml.CallOperationAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCallOperationActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseClause(object : uml.Clause) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createClauseAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseClearAssociationAction(object : uml.ClearAssociationAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createClearAssociationActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseClearStructuralFeatureAction(object : uml.ClearStructuralFeatureAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createClearStructuralFeatureActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseClearVariableAction(object : uml.ClearVariableAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createClearVariableActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConditionalNode(object : uml.ConditionalNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConditionalNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCreateLinkAction(object : uml.CreateLinkAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCreateLinkActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLinkEndCreationData(object : uml.LinkEndCreationData) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLinkEndCreationDataAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCreateLinkObjectAction(object : uml.CreateLinkObjectAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCreateLinkObjectActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCreateObjectAction(object : uml.CreateObjectAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCreateObjectActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDestroyLinkAction(object : uml.DestroyLinkAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDestroyLinkActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLinkEndDestructionData(object : uml.LinkEndDestructionData) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLinkEndDestructionDataAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDestroyObjectAction(object : uml.DestroyObjectAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDestroyObjectActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExpansionNode(object : uml.ExpansionNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExpansionNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExpansionRegion(object : uml.ExpansionRegion) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExpansionRegionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLoopNode(object : uml.LoopNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLoopNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOpaqueAction(object : uml.OpaqueAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOpaqueActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRaiseExceptionAction(object : uml.RaiseExceptionAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRaiseExceptionActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadExtentAction(object : uml.ReadExtentAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadExtentActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadIsClassifiedObjectAction(object : uml.ReadIsClassifiedObjectAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadIsClassifiedObjectActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadLinkAction(object : uml.ReadLinkAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadLinkActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadLinkObjectEndAction(object : uml.ReadLinkObjectEndAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadLinkObjectEndActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadLinkObjectEndQualifierAction(object : uml.ReadLinkObjectEndQualifierAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadLinkObjectEndQualifierActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadSelfAction(object : uml.ReadSelfAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadSelfActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadStructuralFeatureAction(object : uml.ReadStructuralFeatureAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadStructuralFeatureActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReadVariableAction(object : uml.ReadVariableAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReadVariableActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReclassifyObjectAction(object : uml.ReclassifyObjectAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReclassifyObjectActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReduceAction(object : uml.ReduceAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReduceActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRemoveStructuralFeatureValueAction(object : uml.RemoveStructuralFeatureValueAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRemoveStructuralFeatureValueActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseRemoveVariableValueAction(object : uml.RemoveVariableValueAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createRemoveVariableValueActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseReplyAction(object : uml.ReplyAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createReplyActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSendObjectAction(object : uml.SendObjectAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSendObjectActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSendSignalAction(object : uml.SendSignalAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSendSignalActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSequenceNode(object : uml.SequenceNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSequenceNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStartClassifierBehaviorAction(object : uml.StartClassifierBehaviorAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStartClassifierBehaviorActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStartObjectBehaviorAction(object : uml.StartObjectBehaviorAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStartObjectBehaviorActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTestIdentityAction(object : uml.TestIdentityAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTestIdentityActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseUnmarshallAction(object : uml.UnmarshallAction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createUnmarshallActionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseValuePin(object : uml.ValuePin) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createValuePinAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivityFinalNode(object : uml.ActivityFinalNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityFinalNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFinalNode(object : uml.FinalNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFinalNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseControlNode(object : uml.ControlNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createControlNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActivityParameterNode(object : uml.ActivityParameterNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActivityParameterNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCentralBufferNode(object : uml.CentralBufferNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCentralBufferNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseControlFlow(object : uml.ControlFlow) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createControlFlowAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDataStoreNode(object : uml.DataStoreNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDataStoreNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDecisionNode(object : uml.DecisionNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDecisionNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseObjectFlow(object : uml.ObjectFlow) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createObjectFlowAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFlowFinalNode(object : uml.FlowFinalNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFlowFinalNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseForkNode(object : uml.ForkNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createForkNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInitialNode(object : uml.InitialNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInitialNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseJoinNode(object : uml.JoinNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createJoinNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMergeNode(object : uml.MergeNode) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMergeNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInstanceValue(object : uml.InstanceValue) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInstanceValueAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAnyReceiveEvent(object : uml.AnyReceiveEvent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAnyReceiveEventAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMessageEvent(object : uml.MessageEvent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMessageEventAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCallEvent(object : uml.CallEvent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCallEventAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseChangeEvent(object : uml.ChangeEvent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createChangeEventAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFunctionBehavior(object : uml.FunctionBehavior) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFunctionBehaviorAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOpaqueBehavior(object : uml.OpaqueBehavior) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOpaqueBehaviorAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseSignalEvent(object : uml.SignalEvent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createSignalEventAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTimeEvent(object : uml.TimeEvent) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTimeEventAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTimeExpression(object : uml.TimeExpression) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTimeExpressionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseObservation(object : uml.Observation) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createObservationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCommunicationPath(object : uml.CommunicationPath) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCommunicationPathAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDevice(object : uml.Device) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDeviceAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseNode(object : uml.Node) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createNodeAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExecutionEnvironment(object : uml.ExecutionEnvironment) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExecutionEnvironmentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInformationFlow(object : uml.InformationFlow) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInformationFlowAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMessage(object : uml.Message) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMessageAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInteraction(object : uml.Interaction) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInteractionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInteractionFragment(object : uml.InteractionFragment) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInteractionFragmentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLifeline(object : uml.Lifeline) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLifelineAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public casePartDecomposition(object : uml.PartDecomposition) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createPartDecompositionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInteractionUse(object : uml.InteractionUse) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInteractionUseAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseGate(object : uml.Gate) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createGateAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMessageEnd(object : uml.MessageEnd) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMessageEndAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInteractionOperand(object : uml.InteractionOperand) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInteractionOperandAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInteractionConstraint(object : uml.InteractionConstraint) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInteractionConstraintAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseGeneralOrdering(object : uml.GeneralOrdering) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createGeneralOrderingAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseOccurrenceSpecification(object : uml.OccurrenceSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createOccurrenceSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInformationItem(object : uml.InformationItem) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createInformationItemAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActionExecutionSpecification(object : uml.ActionExecutionSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActionExecutionSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExecutionSpecification(object : uml.ExecutionSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExecutionSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseBehaviorExecutionSpecification(object : uml.BehaviorExecutionSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createBehaviorExecutionSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseCombinedFragment(object : uml.CombinedFragment) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createCombinedFragmentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseConsiderIgnoreFragment(object : uml.ConsiderIgnoreFragment) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createConsiderIgnoreFragmentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseContinuation(object : uml.Continuation) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createContinuationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDestructionOccurrenceSpecification(object : uml.DestructionOccurrenceSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDestructionOccurrenceSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseMessageOccurrenceSpecification(object : uml.MessageOccurrenceSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createMessageOccurrenceSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseExecutionOccurrenceSpecification(object : uml.ExecutionOccurrenceSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createExecutionOccurrenceSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseStateInvariant(object : uml.StateInvariant) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createStateInvariantAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseFinalState(object : uml.FinalState) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createFinalStateAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseProtocolTransition(object : uml.ProtocolTransition) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createProtocolTransitionAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseAssociationClass(object : uml.AssociationClass) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createAssociationClassAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseComponent(object : uml.Component) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createComponentAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseComponentRealization(object : uml.ComponentRealization) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createComponentRealizationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseActor(object : uml.Actor) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createActorAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDuration(object : uml.Duration) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDurationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDurationConstraint(object : uml.DurationConstraint) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDurationConstraintAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseIntervalConstraint(object : uml.IntervalConstraint) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createIntervalConstraintAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseInterval(object : uml.Interval) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createIntervalAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDurationInterval(object : uml.DurationInterval) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDurationIntervalAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseDurationObservation(object : uml.DurationObservation) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createDurationObservationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLiteralBoolean(object : uml.LiteralBoolean) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLiteralBooleanAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLiteralSpecification(object : uml.LiteralSpecification) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLiteralSpecificationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLiteralInteger(object : uml.LiteralInteger) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLiteralIntegerAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLiteralNull(object : uml.LiteralNull) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLiteralNullAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLiteralReal(object : uml.LiteralReal) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLiteralRealAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLiteralString(object : uml.LiteralString) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLiteralStringAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseLiteralUnlimitedNatural(object : uml.LiteralUnlimitedNatural) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createLiteralUnlimitedNaturalAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTimeConstraint(object : uml.TimeConstraint) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTimeConstraintAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTimeInterval(object : uml.TimeInterval) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTimeIntervalAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseTimeObservation(object : uml.TimeObservation) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createTimeObservationAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public caseEModelElement(object : ecore4m.EModelElement) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEModelElementAdapter();
            }

            /**
             * 
             * @param {*} object
             * @return {*}
             */
            public defaultCase(object : org.eclipse.emf.ecore.EObject) : org.eclipse.emf.common.notify.Adapter {
                return this.__parent.createEObjectAdapter();
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
            }
        }

    }

}

