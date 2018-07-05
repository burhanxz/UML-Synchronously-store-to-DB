/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
namespace uml.util {
    /**
     * Creates an instance of the switch.
     * <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     * @generated
     * @class
     * @extends org.eclipse.emf.ecore.util.Switch
     */
    export class UmlSwitch<T> extends org.eclipse.emf.ecore.util.Switch<T> {
        /**
         * The cached model package
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @generated
         */
        static modelPackage : uml.UmlPackage = null;

        public constructor() {
            super();
            if(UmlSwitch.modelPackage == null) {
                UmlSwitch.modelPackage = uml.UmlPackage.eINSTANCE;
            }
        }

        /**
         * Checks whether this is a switch for the given package.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @param {*} ePackage the package in question.
         * @return {boolean} whether this is a switch for the given package.
         * @generated
         */
        isSwitchFor(ePackage : org.eclipse.emf.ecore.EPackage) : boolean {
            return ePackage === UmlSwitch.modelPackage;
        }

        /**
         * Calls <code>caseXXX</code> for each class of the model until one returns a non null result; it yields that result.
         * <!-- begin-user-doc -->
         * <!-- end-user-doc -->
         * @return {*} the first non-null result returned by a <code>caseXXX</code> call.
         * @generated
         * @param {number} classifierID
         * @param {*} theEObject
         */
        doSwitch(classifierID : number, theEObject : org.eclipse.emf.ecore.EObject) : T {
            switch((classifierID)) {
            case uml.UmlPackage.ACTIVITY_CONTENT:
                {
                    let activityContent : uml.ActivityContent = <uml.ActivityContent><any>theEObject;
                    let result : T = this.caseActivityContent(activityContent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTIVITY:
                {
                    let activity : uml.Activity = <uml.Activity><any>theEObject;
                    let result : T = this.caseActivity(activity);
                    if(result == null) result = this.caseBehavior(activity);
                    if(result == null) result = this.caseClass(activity);
                    if(result == null) result = this.caseEncapsulatedClassifier(activity);
                    if(result == null) result = this.caseBehavioredClassifier(activity);
                    if(result == null) result = this.caseStructuredClassifier(activity);
                    if(result == null) result = this.caseClassifier(activity);
                    if(result == null) result = this.caseNamespace(activity);
                    if(result == null) result = this.caseRedefinableElement(activity);
                    if(result == null) result = this.caseType(activity);
                    if(result == null) result = this.caseTemplateableElement(activity);
                    if(result == null) result = this.casePackageableElement(activity);
                    if(result == null) result = this.caseNamedElement(activity);
                    if(result == null) result = this.caseParameterableElement(activity);
                    if(result == null) result = this.caseElement(activity);
                    if(result == null) result = this.caseEModelElement(activity);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.BEHAVIOR:
                {
                    let behavior : uml.Behavior = <uml.Behavior><any>theEObject;
                    let result : T = this.caseBehavior(behavior);
                    if(result == null) result = this.caseClass(behavior);
                    if(result == null) result = this.caseEncapsulatedClassifier(behavior);
                    if(result == null) result = this.caseBehavioredClassifier(behavior);
                    if(result == null) result = this.caseStructuredClassifier(behavior);
                    if(result == null) result = this.caseClassifier(behavior);
                    if(result == null) result = this.caseNamespace(behavior);
                    if(result == null) result = this.caseRedefinableElement(behavior);
                    if(result == null) result = this.caseType(behavior);
                    if(result == null) result = this.caseTemplateableElement(behavior);
                    if(result == null) result = this.casePackageableElement(behavior);
                    if(result == null) result = this.caseNamedElement(behavior);
                    if(result == null) result = this.caseParameterableElement(behavior);
                    if(result == null) result = this.caseElement(behavior);
                    if(result == null) result = this.caseEModelElement(behavior);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CLASS:
                {
                    let class_ : uml.Class = <uml.Class><any>theEObject;
                    let result : T = this.caseClass(class_);
                    if(result == null) result = this.caseEncapsulatedClassifier(class_);
                    if(result == null) result = this.caseBehavioredClassifier(class_);
                    if(result == null) result = this.caseStructuredClassifier(class_);
                    if(result == null) result = this.caseClassifier(class_);
                    if(result == null) result = this.caseNamespace(class_);
                    if(result == null) result = this.caseRedefinableElement(class_);
                    if(result == null) result = this.caseType(class_);
                    if(result == null) result = this.caseTemplateableElement(class_);
                    if(result == null) result = this.casePackageableElement(class_);
                    if(result == null) result = this.caseNamedElement(class_);
                    if(result == null) result = this.caseParameterableElement(class_);
                    if(result == null) result = this.caseElement(class_);
                    if(result == null) result = this.caseEModelElement(class_);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.BEHAVIORED_CLASSIFIER:
                {
                    let behavioredClassifier : uml.BehavioredClassifier = <uml.BehavioredClassifier><any>theEObject;
                    let result : T = this.caseBehavioredClassifier(behavioredClassifier);
                    if(result == null) result = this.caseClassifier(behavioredClassifier);
                    if(result == null) result = this.caseNamespace(behavioredClassifier);
                    if(result == null) result = this.caseRedefinableElement(behavioredClassifier);
                    if(result == null) result = this.caseType(behavioredClassifier);
                    if(result == null) result = this.caseTemplateableElement(behavioredClassifier);
                    if(result == null) result = this.casePackageableElement(behavioredClassifier);
                    if(result == null) result = this.caseNamedElement(behavioredClassifier);
                    if(result == null) result = this.caseParameterableElement(behavioredClassifier);
                    if(result == null) result = this.caseElement(behavioredClassifier);
                    if(result == null) result = this.caseEModelElement(behavioredClassifier);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CLASSIFIER:
                {
                    let classifier : uml.Classifier = <uml.Classifier><any>theEObject;
                    let result : T = this.caseClassifier(classifier);
                    if(result == null) result = this.caseNamespace(classifier);
                    if(result == null) result = this.caseRedefinableElement(classifier);
                    if(result == null) result = this.caseType(classifier);
                    if(result == null) result = this.caseTemplateableElement(classifier);
                    if(result == null) result = this.casePackageableElement(classifier);
                    if(result == null) result = this.caseNamedElement(classifier);
                    if(result == null) result = this.caseParameterableElement(classifier);
                    if(result == null) result = this.caseElement(classifier);
                    if(result == null) result = this.caseEModelElement(classifier);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.NAMESPACE:
                {
                    let namespace : uml.Namespace = <uml.Namespace><any>theEObject;
                    let result : T = this.caseNamespace(namespace);
                    if(result == null) result = this.caseNamedElement(namespace);
                    if(result == null) result = this.caseElement(namespace);
                    if(result == null) result = this.caseEModelElement(namespace);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.NAMED_ELEMENT:
                {
                    let namedElement : uml.NamedElement = <uml.NamedElement><any>theEObject;
                    let result : T = this.caseNamedElement(namedElement);
                    if(result == null) result = this.caseElement(namedElement);
                    if(result == null) result = this.caseEModelElement(namedElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ELEMENT:
                {
                    let element : uml.Element = <uml.Element><any>theEObject;
                    let result : T = this.caseElement(element);
                    if(result == null) result = this.caseEModelElement(element);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.COMMENT:
                {
                    let comment : uml.Comment = <uml.Comment><any>theEObject;
                    let result : T = this.caseComment(comment);
                    if(result == null) result = this.caseElement(comment);
                    if(result == null) result = this.caseEModelElement(comment);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STEREOTYPE:
                {
                    let stereotype : uml.Stereotype = <uml.Stereotype><any>theEObject;
                    let result : T = this.caseStereotype(stereotype);
                    if(result == null) result = this.caseClass(stereotype);
                    if(result == null) result = this.caseEncapsulatedClassifier(stereotype);
                    if(result == null) result = this.caseBehavioredClassifier(stereotype);
                    if(result == null) result = this.caseStructuredClassifier(stereotype);
                    if(result == null) result = this.caseClassifier(stereotype);
                    if(result == null) result = this.caseNamespace(stereotype);
                    if(result == null) result = this.caseRedefinableElement(stereotype);
                    if(result == null) result = this.caseType(stereotype);
                    if(result == null) result = this.caseTemplateableElement(stereotype);
                    if(result == null) result = this.casePackageableElement(stereotype);
                    if(result == null) result = this.caseNamedElement(stereotype);
                    if(result == null) result = this.caseParameterableElement(stereotype);
                    if(result == null) result = this.caseElement(stereotype);
                    if(result == null) result = this.caseEModelElement(stereotype);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.IMAGE:
                {
                    let image : uml.Image = <uml.Image><any>theEObject;
                    let result : T = this.caseImage(image);
                    if(result == null) result = this.caseElement(image);
                    if(result == null) result = this.caseEModelElement(image);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PROFILE:
                {
                    let profile : uml.Profile = <uml.Profile><any>theEObject;
                    let result : T = this.caseProfile(profile);
                    if(result == null) result = this.casePackage(profile);
                    if(result == null) result = this.caseNamespace(profile);
                    if(result == null) result = this.casePackageableElement(profile);
                    if(result == null) result = this.caseTemplateableElement(profile);
                    if(result == null) result = this.caseNamedElement(profile);
                    if(result == null) result = this.caseParameterableElement(profile);
                    if(result == null) result = this.caseElement(profile);
                    if(result == null) result = this.caseEModelElement(profile);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PACKAGE:
                {
                    let package_ : uml.Package = <uml.Package><any>theEObject;
                    let result : T = this.casePackage(package_);
                    if(result == null) result = this.caseNamespace(package_);
                    if(result == null) result = this.casePackageableElement(package_);
                    if(result == null) result = this.caseTemplateableElement(package_);
                    if(result == null) result = this.caseNamedElement(package_);
                    if(result == null) result = this.caseParameterableElement(package_);
                    if(result == null) result = this.caseElement(package_);
                    if(result == null) result = this.caseEModelElement(package_);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PACKAGEABLE_ELEMENT:
                {
                    let packageableElement : uml.PackageableElement = <uml.PackageableElement><any>theEObject;
                    let result : T = this.casePackageableElement(packageableElement);
                    if(result == null) result = this.caseNamedElement(packageableElement);
                    if(result == null) result = this.caseParameterableElement(packageableElement);
                    if(result == null) result = this.caseElement(packageableElement);
                    if(result == null) result = this.caseEModelElement(packageableElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PARAMETERABLE_ELEMENT:
                {
                    let parameterableElement : uml.ParameterableElement = <uml.ParameterableElement><any>theEObject;
                    let result : T = this.caseParameterableElement(parameterableElement);
                    if(result == null) result = this.caseElement(parameterableElement);
                    if(result == null) result = this.caseEModelElement(parameterableElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TEMPLATE_PARAMETER:
                {
                    let templateParameter : uml.TemplateParameter = <uml.TemplateParameter><any>theEObject;
                    let result : T = this.caseTemplateParameter(templateParameter);
                    if(result == null) result = this.caseElement(templateParameter);
                    if(result == null) result = this.caseEModelElement(templateParameter);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TEMPLATE_SIGNATURE:
                {
                    let templateSignature : uml.TemplateSignature = <uml.TemplateSignature><any>theEObject;
                    let result : T = this.caseTemplateSignature(templateSignature);
                    if(result == null) result = this.caseElement(templateSignature);
                    if(result == null) result = this.caseEModelElement(templateSignature);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TEMPLATEABLE_ELEMENT:
                {
                    let templateableElement : uml.TemplateableElement = <uml.TemplateableElement><any>theEObject;
                    let result : T = this.caseTemplateableElement(templateableElement);
                    if(result == null) result = this.caseElement(templateableElement);
                    if(result == null) result = this.caseEModelElement(templateableElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TEMPLATE_BINDING:
                {
                    let templateBinding : uml.TemplateBinding = <uml.TemplateBinding><any>theEObject;
                    let result : T = this.caseTemplateBinding(templateBinding);
                    if(result == null) result = this.caseDirectedRelationship(templateBinding);
                    if(result == null) result = this.caseRelationship(templateBinding);
                    if(result == null) result = this.caseElement(templateBinding);
                    if(result == null) result = this.caseEModelElement(templateBinding);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DIRECTED_RELATIONSHIP:
                {
                    let directedRelationship : uml.DirectedRelationship = <uml.DirectedRelationship><any>theEObject;
                    let result : T = this.caseDirectedRelationship(directedRelationship);
                    if(result == null) result = this.caseRelationship(directedRelationship);
                    if(result == null) result = this.caseElement(directedRelationship);
                    if(result == null) result = this.caseEModelElement(directedRelationship);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.RELATIONSHIP:
                {
                    let relationship : uml.Relationship = <uml.Relationship><any>theEObject;
                    let result : T = this.caseRelationship(relationship);
                    if(result == null) result = this.caseElement(relationship);
                    if(result == null) result = this.caseEModelElement(relationship);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TEMPLATE_PARAMETER_SUBSTITUTION:
                {
                    let templateParameterSubstitution : uml.TemplateParameterSubstitution = <uml.TemplateParameterSubstitution><any>theEObject;
                    let result : T = this.caseTemplateParameterSubstitution(templateParameterSubstitution);
                    if(result == null) result = this.caseElement(templateParameterSubstitution);
                    if(result == null) result = this.caseEModelElement(templateParameterSubstitution);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TYPE:
                {
                    let type : uml.Type = <uml.Type><any>theEObject;
                    let result : T = this.caseType(type);
                    if(result == null) result = this.casePackageableElement(type);
                    if(result == null) result = this.caseNamedElement(type);
                    if(result == null) result = this.caseParameterableElement(type);
                    if(result == null) result = this.caseElement(type);
                    if(result == null) result = this.caseEModelElement(type);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ASSOCIATION:
                {
                    let association : uml.Association = <uml.Association><any>theEObject;
                    let result : T = this.caseAssociation(association);
                    if(result == null) result = this.caseClassifier(association);
                    if(result == null) result = this.caseRelationship(association);
                    if(result == null) result = this.caseNamespace(association);
                    if(result == null) result = this.caseRedefinableElement(association);
                    if(result == null) result = this.caseType(association);
                    if(result == null) result = this.caseTemplateableElement(association);
                    if(result == null) result = this.casePackageableElement(association);
                    if(result == null) result = this.caseNamedElement(association);
                    if(result == null) result = this.caseParameterableElement(association);
                    if(result == null) result = this.caseElement(association);
                    if(result == null) result = this.caseEModelElement(association);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PROPERTY:
                {
                    let property : uml.Property = <uml.Property><any>theEObject;
                    let result : T = this.caseProperty(property);
                    if(result == null) result = this.caseStructuralFeature(property);
                    if(result == null) result = this.caseConnectableElement(property);
                    if(result == null) result = this.caseDeploymentTarget(property);
                    if(result == null) result = this.caseFeature(property);
                    if(result == null) result = this.caseTypedElement(property);
                    if(result == null) result = this.caseMultiplicityElement(property);
                    if(result == null) result = this.caseParameterableElement(property);
                    if(result == null) result = this.caseRedefinableElement(property);
                    if(result == null) result = this.caseNamedElement(property);
                    if(result == null) result = this.caseElement(property);
                    if(result == null) result = this.caseEModelElement(property);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONNECTABLE_ELEMENT:
                {
                    let connectableElement : uml.ConnectableElement = <uml.ConnectableElement><any>theEObject;
                    let result : T = this.caseConnectableElement(connectableElement);
                    if(result == null) result = this.caseTypedElement(connectableElement);
                    if(result == null) result = this.caseParameterableElement(connectableElement);
                    if(result == null) result = this.caseNamedElement(connectableElement);
                    if(result == null) result = this.caseElement(connectableElement);
                    if(result == null) result = this.caseEModelElement(connectableElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TYPED_ELEMENT:
                {
                    let typedElement : uml.TypedElement = <uml.TypedElement><any>theEObject;
                    let result : T = this.caseTypedElement(typedElement);
                    if(result == null) result = this.caseNamedElement(typedElement);
                    if(result == null) result = this.caseElement(typedElement);
                    if(result == null) result = this.caseEModelElement(typedElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONNECTOR_END:
                {
                    let connectorEnd : uml.ConnectorEnd = <uml.ConnectorEnd><any>theEObject;
                    let result : T = this.caseConnectorEnd(connectorEnd);
                    if(result == null) result = this.caseMultiplicityElement(connectorEnd);
                    if(result == null) result = this.caseElement(connectorEnd);
                    if(result == null) result = this.caseEModelElement(connectorEnd);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MULTIPLICITY_ELEMENT:
                {
                    let multiplicityElement : uml.MultiplicityElement = <uml.MultiplicityElement><any>theEObject;
                    let result : T = this.caseMultiplicityElement(multiplicityElement);
                    if(result == null) result = this.caseElement(multiplicityElement);
                    if(result == null) result = this.caseEModelElement(multiplicityElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.VALUE_SPECIFICATION:
                {
                    let valueSpecification : uml.ValueSpecification = <uml.ValueSpecification><any>theEObject;
                    let result : T = this.caseValueSpecification(valueSpecification);
                    if(result == null) result = this.casePackageableElement(valueSpecification);
                    if(result == null) result = this.caseTypedElement(valueSpecification);
                    if(result == null) result = this.caseNamedElement(valueSpecification);
                    if(result == null) result = this.caseParameterableElement(valueSpecification);
                    if(result == null) result = this.caseElement(valueSpecification);
                    if(result == null) result = this.caseEModelElement(valueSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONNECTABLE_ELEMENT_TEMPLATE_PARAMETER:
                {
                    let connectableElementTemplateParameter : uml.ConnectableElementTemplateParameter = <uml.ConnectableElementTemplateParameter><any>theEObject;
                    let result : T = this.caseConnectableElementTemplateParameter(connectableElementTemplateParameter);
                    if(result == null) result = this.caseTemplateParameter(connectableElementTemplateParameter);
                    if(result == null) result = this.caseElement(connectableElementTemplateParameter);
                    if(result == null) result = this.caseEModelElement(connectableElementTemplateParameter);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DEPLOYMENT_TARGET:
                {
                    let deploymentTarget : uml.DeploymentTarget = <uml.DeploymentTarget><any>theEObject;
                    let result : T = this.caseDeploymentTarget(deploymentTarget);
                    if(result == null) result = this.caseNamedElement(deploymentTarget);
                    if(result == null) result = this.caseElement(deploymentTarget);
                    if(result == null) result = this.caseEModelElement(deploymentTarget);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DEPLOYMENT:
                {
                    let deployment : uml.Deployment = <uml.Deployment><any>theEObject;
                    let result : T = this.caseDeployment(deployment);
                    if(result == null) result = this.caseDependency(deployment);
                    if(result == null) result = this.casePackageableElement(deployment);
                    if(result == null) result = this.caseDirectedRelationship(deployment);
                    if(result == null) result = this.caseNamedElement(deployment);
                    if(result == null) result = this.caseParameterableElement(deployment);
                    if(result == null) result = this.caseRelationship(deployment);
                    if(result == null) result = this.caseElement(deployment);
                    if(result == null) result = this.caseEModelElement(deployment);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DEPENDENCY:
                {
                    let dependency : uml.Dependency = <uml.Dependency><any>theEObject;
                    let result : T = this.caseDependency(dependency);
                    if(result == null) result = this.casePackageableElement(dependency);
                    if(result == null) result = this.caseDirectedRelationship(dependency);
                    if(result == null) result = this.caseNamedElement(dependency);
                    if(result == null) result = this.caseParameterableElement(dependency);
                    if(result == null) result = this.caseRelationship(dependency);
                    if(result == null) result = this.caseElement(dependency);
                    if(result == null) result = this.caseEModelElement(dependency);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DEPLOYMENT_SPECIFICATION:
                {
                    let deploymentSpecification : uml.DeploymentSpecification = <uml.DeploymentSpecification><any>theEObject;
                    let result : T = this.caseDeploymentSpecification(deploymentSpecification);
                    if(result == null) result = this.caseArtifact(deploymentSpecification);
                    if(result == null) result = this.caseClassifier(deploymentSpecification);
                    if(result == null) result = this.caseDeployedArtifact(deploymentSpecification);
                    if(result == null) result = this.caseNamespace(deploymentSpecification);
                    if(result == null) result = this.caseRedefinableElement(deploymentSpecification);
                    if(result == null) result = this.caseType(deploymentSpecification);
                    if(result == null) result = this.caseTemplateableElement(deploymentSpecification);
                    if(result == null) result = this.casePackageableElement(deploymentSpecification);
                    if(result == null) result = this.caseNamedElement(deploymentSpecification);
                    if(result == null) result = this.caseParameterableElement(deploymentSpecification);
                    if(result == null) result = this.caseElement(deploymentSpecification);
                    if(result == null) result = this.caseEModelElement(deploymentSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ARTIFACT:
                {
                    let artifact : uml.Artifact = <uml.Artifact><any>theEObject;
                    let result : T = this.caseArtifact(artifact);
                    if(result == null) result = this.caseClassifier(artifact);
                    if(result == null) result = this.caseDeployedArtifact(artifact);
                    if(result == null) result = this.caseNamespace(artifact);
                    if(result == null) result = this.caseRedefinableElement(artifact);
                    if(result == null) result = this.caseType(artifact);
                    if(result == null) result = this.caseTemplateableElement(artifact);
                    if(result == null) result = this.casePackageableElement(artifact);
                    if(result == null) result = this.caseNamedElement(artifact);
                    if(result == null) result = this.caseParameterableElement(artifact);
                    if(result == null) result = this.caseElement(artifact);
                    if(result == null) result = this.caseEModelElement(artifact);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DEPLOYED_ARTIFACT:
                {
                    let deployedArtifact : uml.DeployedArtifact = <uml.DeployedArtifact><any>theEObject;
                    let result : T = this.caseDeployedArtifact(deployedArtifact);
                    if(result == null) result = this.caseNamedElement(deployedArtifact);
                    if(result == null) result = this.caseElement(deployedArtifact);
                    if(result == null) result = this.caseEModelElement(deployedArtifact);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MANIFESTATION:
                {
                    let manifestation : uml.Manifestation = <uml.Manifestation><any>theEObject;
                    let result : T = this.caseManifestation(manifestation);
                    if(result == null) result = this.caseAbstraction(manifestation);
                    if(result == null) result = this.caseDependency(manifestation);
                    if(result == null) result = this.casePackageableElement(manifestation);
                    if(result == null) result = this.caseDirectedRelationship(manifestation);
                    if(result == null) result = this.caseNamedElement(manifestation);
                    if(result == null) result = this.caseParameterableElement(manifestation);
                    if(result == null) result = this.caseRelationship(manifestation);
                    if(result == null) result = this.caseElement(manifestation);
                    if(result == null) result = this.caseEModelElement(manifestation);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ABSTRACTION:
                {
                    let abstraction : uml.Abstraction = <uml.Abstraction><any>theEObject;
                    let result : T = this.caseAbstraction(abstraction);
                    if(result == null) result = this.caseDependency(abstraction);
                    if(result == null) result = this.casePackageableElement(abstraction);
                    if(result == null) result = this.caseDirectedRelationship(abstraction);
                    if(result == null) result = this.caseNamedElement(abstraction);
                    if(result == null) result = this.caseParameterableElement(abstraction);
                    if(result == null) result = this.caseRelationship(abstraction);
                    if(result == null) result = this.caseElement(abstraction);
                    if(result == null) result = this.caseEModelElement(abstraction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OPAQUE_EXPRESSION:
                {
                    let opaqueExpression : uml.OpaqueExpression = <uml.OpaqueExpression><any>theEObject;
                    let result : T = this.caseOpaqueExpression(opaqueExpression);
                    if(result == null) result = this.caseValueSpecification(opaqueExpression);
                    if(result == null) result = this.casePackageableElement(opaqueExpression);
                    if(result == null) result = this.caseTypedElement(opaqueExpression);
                    if(result == null) result = this.caseNamedElement(opaqueExpression);
                    if(result == null) result = this.caseParameterableElement(opaqueExpression);
                    if(result == null) result = this.caseElement(opaqueExpression);
                    if(result == null) result = this.caseEModelElement(opaqueExpression);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PARAMETER:
                {
                    let parameter : uml.Parameter = <uml.Parameter><any>theEObject;
                    let result : T = this.caseParameter(parameter);
                    if(result == null) result = this.caseConnectableElement(parameter);
                    if(result == null) result = this.caseMultiplicityElement(parameter);
                    if(result == null) result = this.caseTypedElement(parameter);
                    if(result == null) result = this.caseParameterableElement(parameter);
                    if(result == null) result = this.caseNamedElement(parameter);
                    if(result == null) result = this.caseElement(parameter);
                    if(result == null) result = this.caseEModelElement(parameter);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OPERATION:
                {
                    let operation : uml.Operation = <uml.Operation><any>theEObject;
                    let result : T = this.caseOperation(operation);
                    if(result == null) result = this.caseBehavioralFeature(operation);
                    if(result == null) result = this.caseParameterableElement(operation);
                    if(result == null) result = this.caseTemplateableElement(operation);
                    if(result == null) result = this.caseNamespace(operation);
                    if(result == null) result = this.caseFeature(operation);
                    if(result == null) result = this.caseRedefinableElement(operation);
                    if(result == null) result = this.caseNamedElement(operation);
                    if(result == null) result = this.caseElement(operation);
                    if(result == null) result = this.caseEModelElement(operation);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.BEHAVIORAL_FEATURE:
                {
                    let behavioralFeature : uml.BehavioralFeature = <uml.BehavioralFeature><any>theEObject;
                    let result : T = this.caseBehavioralFeature(behavioralFeature);
                    if(result == null) result = this.caseNamespace(behavioralFeature);
                    if(result == null) result = this.caseFeature(behavioralFeature);
                    if(result == null) result = this.caseRedefinableElement(behavioralFeature);
                    if(result == null) result = this.caseNamedElement(behavioralFeature);
                    if(result == null) result = this.caseElement(behavioralFeature);
                    if(result == null) result = this.caseEModelElement(behavioralFeature);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.FEATURE:
                {
                    let feature : uml.Feature = <uml.Feature><any>theEObject;
                    let result : T = this.caseFeature(feature);
                    if(result == null) result = this.caseRedefinableElement(feature);
                    if(result == null) result = this.caseNamedElement(feature);
                    if(result == null) result = this.caseElement(feature);
                    if(result == null) result = this.caseEModelElement(feature);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REDEFINABLE_ELEMENT:
                {
                    let redefinableElement : uml.RedefinableElement = <uml.RedefinableElement><any>theEObject;
                    let result : T = this.caseRedefinableElement(redefinableElement);
                    if(result == null) result = this.caseNamedElement(redefinableElement);
                    if(result == null) result = this.caseElement(redefinableElement);
                    if(result == null) result = this.caseEModelElement(redefinableElement);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PARAMETER_SET:
                {
                    let parameterSet : uml.ParameterSet = <uml.ParameterSet><any>theEObject;
                    let result : T = this.caseParameterSet(parameterSet);
                    if(result == null) result = this.caseNamedElement(parameterSet);
                    if(result == null) result = this.caseElement(parameterSet);
                    if(result == null) result = this.caseEModelElement(parameterSet);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONSTRAINT:
                {
                    let constraint : uml.Constraint = <uml.Constraint><any>theEObject;
                    let result : T = this.caseConstraint(constraint);
                    if(result == null) result = this.casePackageableElement(constraint);
                    if(result == null) result = this.caseNamedElement(constraint);
                    if(result == null) result = this.caseParameterableElement(constraint);
                    if(result == null) result = this.caseElement(constraint);
                    if(result == null) result = this.caseEModelElement(constraint);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DATA_TYPE:
                {
                    let dataType : uml.DataType = <uml.DataType><any>theEObject;
                    let result : T = this.caseDataType(dataType);
                    if(result == null) result = this.caseClassifier(dataType);
                    if(result == null) result = this.caseNamespace(dataType);
                    if(result == null) result = this.caseRedefinableElement(dataType);
                    if(result == null) result = this.caseType(dataType);
                    if(result == null) result = this.caseTemplateableElement(dataType);
                    if(result == null) result = this.casePackageableElement(dataType);
                    if(result == null) result = this.caseNamedElement(dataType);
                    if(result == null) result = this.caseParameterableElement(dataType);
                    if(result == null) result = this.caseElement(dataType);
                    if(result == null) result = this.caseEModelElement(dataType);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERFACE:
                {
                    let interface_ : uml.Interface = <uml.Interface><any>theEObject;
                    let result : T = this.caseInterface(interface_);
                    if(result == null) result = this.caseClassifier(interface_);
                    if(result == null) result = this.caseNamespace(interface_);
                    if(result == null) result = this.caseRedefinableElement(interface_);
                    if(result == null) result = this.caseType(interface_);
                    if(result == null) result = this.caseTemplateableElement(interface_);
                    if(result == null) result = this.casePackageableElement(interface_);
                    if(result == null) result = this.caseNamedElement(interface_);
                    if(result == null) result = this.caseParameterableElement(interface_);
                    if(result == null) result = this.caseElement(interface_);
                    if(result == null) result = this.caseEModelElement(interface_);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.RECEPTION:
                {
                    let reception : uml.Reception = <uml.Reception><any>theEObject;
                    let result : T = this.caseReception(reception);
                    if(result == null) result = this.caseBehavioralFeature(reception);
                    if(result == null) result = this.caseNamespace(reception);
                    if(result == null) result = this.caseFeature(reception);
                    if(result == null) result = this.caseRedefinableElement(reception);
                    if(result == null) result = this.caseNamedElement(reception);
                    if(result == null) result = this.caseElement(reception);
                    if(result == null) result = this.caseEModelElement(reception);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.SIGNAL:
                {
                    let signal : uml.Signal = <uml.Signal><any>theEObject;
                    let result : T = this.caseSignal(signal);
                    if(result == null) result = this.caseClassifier(signal);
                    if(result == null) result = this.caseNamespace(signal);
                    if(result == null) result = this.caseRedefinableElement(signal);
                    if(result == null) result = this.caseType(signal);
                    if(result == null) result = this.caseTemplateableElement(signal);
                    if(result == null) result = this.casePackageableElement(signal);
                    if(result == null) result = this.caseNamedElement(signal);
                    if(result == null) result = this.caseParameterableElement(signal);
                    if(result == null) result = this.caseElement(signal);
                    if(result == null) result = this.caseEModelElement(signal);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PROTOCOL_STATE_MACHINE:
                {
                    let protocolStateMachine : uml.ProtocolStateMachine = <uml.ProtocolStateMachine><any>theEObject;
                    let result : T = this.caseProtocolStateMachine(protocolStateMachine);
                    if(result == null) result = this.caseStateMachine(protocolStateMachine);
                    if(result == null) result = this.caseBehavior(protocolStateMachine);
                    if(result == null) result = this.caseClass(protocolStateMachine);
                    if(result == null) result = this.caseEncapsulatedClassifier(protocolStateMachine);
                    if(result == null) result = this.caseBehavioredClassifier(protocolStateMachine);
                    if(result == null) result = this.caseStructuredClassifier(protocolStateMachine);
                    if(result == null) result = this.caseClassifier(protocolStateMachine);
                    if(result == null) result = this.caseNamespace(protocolStateMachine);
                    if(result == null) result = this.caseRedefinableElement(protocolStateMachine);
                    if(result == null) result = this.caseType(protocolStateMachine);
                    if(result == null) result = this.caseTemplateableElement(protocolStateMachine);
                    if(result == null) result = this.casePackageableElement(protocolStateMachine);
                    if(result == null) result = this.caseNamedElement(protocolStateMachine);
                    if(result == null) result = this.caseParameterableElement(protocolStateMachine);
                    if(result == null) result = this.caseElement(protocolStateMachine);
                    if(result == null) result = this.caseEModelElement(protocolStateMachine);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STATE_MACHINE:
                {
                    let stateMachine : uml.StateMachine = <uml.StateMachine><any>theEObject;
                    let result : T = this.caseStateMachine(stateMachine);
                    if(result == null) result = this.caseBehavior(stateMachine);
                    if(result == null) result = this.caseClass(stateMachine);
                    if(result == null) result = this.caseEncapsulatedClassifier(stateMachine);
                    if(result == null) result = this.caseBehavioredClassifier(stateMachine);
                    if(result == null) result = this.caseStructuredClassifier(stateMachine);
                    if(result == null) result = this.caseClassifier(stateMachine);
                    if(result == null) result = this.caseNamespace(stateMachine);
                    if(result == null) result = this.caseRedefinableElement(stateMachine);
                    if(result == null) result = this.caseType(stateMachine);
                    if(result == null) result = this.caseTemplateableElement(stateMachine);
                    if(result == null) result = this.casePackageableElement(stateMachine);
                    if(result == null) result = this.caseNamedElement(stateMachine);
                    if(result == null) result = this.caseParameterableElement(stateMachine);
                    if(result == null) result = this.caseElement(stateMachine);
                    if(result == null) result = this.caseEModelElement(stateMachine);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PSEUDOSTATE:
                {
                    let pseudostate : uml.Pseudostate = <uml.Pseudostate><any>theEObject;
                    let result : T = this.casePseudostate(pseudostate);
                    if(result == null) result = this.caseVertex(pseudostate);
                    if(result == null) result = this.caseNamedElement(pseudostate);
                    if(result == null) result = this.caseElement(pseudostate);
                    if(result == null) result = this.caseEModelElement(pseudostate);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.VERTEX:
                {
                    let vertex : uml.Vertex = <uml.Vertex><any>theEObject;
                    let result : T = this.caseVertex(vertex);
                    if(result == null) result = this.caseNamedElement(vertex);
                    if(result == null) result = this.caseElement(vertex);
                    if(result == null) result = this.caseEModelElement(vertex);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REGION:
                {
                    let region : uml.Region = <uml.Region><any>theEObject;
                    let result : T = this.caseRegion(region);
                    if(result == null) result = this.caseNamespace(region);
                    if(result == null) result = this.caseRedefinableElement(region);
                    if(result == null) result = this.caseNamedElement(region);
                    if(result == null) result = this.caseElement(region);
                    if(result == null) result = this.caseEModelElement(region);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STATE:
                {
                    let state : uml.State = <uml.State><any>theEObject;
                    let result : T = this.caseState(state);
                    if(result == null) result = this.caseNamespace(state);
                    if(result == null) result = this.caseRedefinableElement(state);
                    if(result == null) result = this.caseVertex(state);
                    if(result == null) result = this.caseNamedElement(state);
                    if(result == null) result = this.caseElement(state);
                    if(result == null) result = this.caseEModelElement(state);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONNECTION_POINT_REFERENCE:
                {
                    let connectionPointReference : uml.ConnectionPointReference = <uml.ConnectionPointReference><any>theEObject;
                    let result : T = this.caseConnectionPointReference(connectionPointReference);
                    if(result == null) result = this.caseVertex(connectionPointReference);
                    if(result == null) result = this.caseNamedElement(connectionPointReference);
                    if(result == null) result = this.caseElement(connectionPointReference);
                    if(result == null) result = this.caseEModelElement(connectionPointReference);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TRIGGER:
                {
                    let trigger : uml.Trigger = <uml.Trigger><any>theEObject;
                    let result : T = this.caseTrigger(trigger);
                    if(result == null) result = this.caseNamedElement(trigger);
                    if(result == null) result = this.caseElement(trigger);
                    if(result == null) result = this.caseEModelElement(trigger);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EVENT:
                {
                    let event : uml.Event = <uml.Event><any>theEObject;
                    let result : T = this.caseEvent(event);
                    if(result == null) result = this.casePackageableElement(event);
                    if(result == null) result = this.caseNamedElement(event);
                    if(result == null) result = this.caseParameterableElement(event);
                    if(result == null) result = this.caseElement(event);
                    if(result == null) result = this.caseEModelElement(event);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PORT:
                {
                    let port : uml.Port = <uml.Port><any>theEObject;
                    let result : T = this.casePort(port);
                    if(result == null) result = this.caseProperty(port);
                    if(result == null) result = this.caseStructuralFeature(port);
                    if(result == null) result = this.caseConnectableElement(port);
                    if(result == null) result = this.caseDeploymentTarget(port);
                    if(result == null) result = this.caseFeature(port);
                    if(result == null) result = this.caseTypedElement(port);
                    if(result == null) result = this.caseMultiplicityElement(port);
                    if(result == null) result = this.caseParameterableElement(port);
                    if(result == null) result = this.caseRedefinableElement(port);
                    if(result == null) result = this.caseNamedElement(port);
                    if(result == null) result = this.caseElement(port);
                    if(result == null) result = this.caseEModelElement(port);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TRANSITION:
                {
                    let transition : uml.Transition = <uml.Transition><any>theEObject;
                    let result : T = this.caseTransition(transition);
                    if(result == null) result = this.caseNamespace(transition);
                    if(result == null) result = this.caseRedefinableElement(transition);
                    if(result == null) result = this.caseNamedElement(transition);
                    if(result == null) result = this.caseElement(transition);
                    if(result == null) result = this.caseEModelElement(transition);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PROTOCOL_CONFORMANCE:
                {
                    let protocolConformance : uml.ProtocolConformance = <uml.ProtocolConformance><any>theEObject;
                    let result : T = this.caseProtocolConformance(protocolConformance);
                    if(result == null) result = this.caseDirectedRelationship(protocolConformance);
                    if(result == null) result = this.caseRelationship(protocolConformance);
                    if(result == null) result = this.caseElement(protocolConformance);
                    if(result == null) result = this.caseEModelElement(protocolConformance);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OPERATION_TEMPLATE_PARAMETER:
                {
                    let operationTemplateParameter : uml.OperationTemplateParameter = <uml.OperationTemplateParameter><any>theEObject;
                    let result : T = this.caseOperationTemplateParameter(operationTemplateParameter);
                    if(result == null) result = this.caseTemplateParameter(operationTemplateParameter);
                    if(result == null) result = this.caseElement(operationTemplateParameter);
                    if(result == null) result = this.caseEModelElement(operationTemplateParameter);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STRUCTURAL_FEATURE:
                {
                    let structuralFeature : uml.StructuralFeature = <uml.StructuralFeature><any>theEObject;
                    let result : T = this.caseStructuralFeature(structuralFeature);
                    if(result == null) result = this.caseFeature(structuralFeature);
                    if(result == null) result = this.caseTypedElement(structuralFeature);
                    if(result == null) result = this.caseMultiplicityElement(structuralFeature);
                    if(result == null) result = this.caseRedefinableElement(structuralFeature);
                    if(result == null) result = this.caseNamedElement(structuralFeature);
                    if(result == null) result = this.caseElement(structuralFeature);
                    if(result == null) result = this.caseEModelElement(structuralFeature);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PACKAGE_MERGE:
                {
                    let packageMerge : uml.PackageMerge = <uml.PackageMerge><any>theEObject;
                    let result : T = this.casePackageMerge(packageMerge);
                    if(result == null) result = this.caseDirectedRelationship(packageMerge);
                    if(result == null) result = this.caseRelationship(packageMerge);
                    if(result == null) result = this.caseElement(packageMerge);
                    if(result == null) result = this.caseEModelElement(packageMerge);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PROFILE_APPLICATION:
                {
                    let profileApplication : uml.ProfileApplication = <uml.ProfileApplication><any>theEObject;
                    let result : T = this.caseProfileApplication(profileApplication);
                    if(result == null) result = this.caseDirectedRelationship(profileApplication);
                    if(result == null) result = this.caseRelationship(profileApplication);
                    if(result == null) result = this.caseElement(profileApplication);
                    if(result == null) result = this.caseEModelElement(profileApplication);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ENUMERATION:
                {
                    let enumeration : uml.Enumeration = <uml.Enumeration><any>theEObject;
                    let result : T = this.caseEnumeration(enumeration);
                    if(result == null) result = this.caseDataType(enumeration);
                    if(result == null) result = this.caseClassifier(enumeration);
                    if(result == null) result = this.caseNamespace(enumeration);
                    if(result == null) result = this.caseRedefinableElement(enumeration);
                    if(result == null) result = this.caseType(enumeration);
                    if(result == null) result = this.caseTemplateableElement(enumeration);
                    if(result == null) result = this.casePackageableElement(enumeration);
                    if(result == null) result = this.caseNamedElement(enumeration);
                    if(result == null) result = this.caseParameterableElement(enumeration);
                    if(result == null) result = this.caseElement(enumeration);
                    if(result == null) result = this.caseEModelElement(enumeration);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ENUMERATION_LITERAL:
                {
                    let enumerationLiteral : uml.EnumerationLiteral = <uml.EnumerationLiteral><any>theEObject;
                    let result : T = this.caseEnumerationLiteral(enumerationLiteral);
                    if(result == null) result = this.caseInstanceSpecification(enumerationLiteral);
                    if(result == null) result = this.caseDeploymentTarget(enumerationLiteral);
                    if(result == null) result = this.casePackageableElement(enumerationLiteral);
                    if(result == null) result = this.caseDeployedArtifact(enumerationLiteral);
                    if(result == null) result = this.caseNamedElement(enumerationLiteral);
                    if(result == null) result = this.caseParameterableElement(enumerationLiteral);
                    if(result == null) result = this.caseElement(enumerationLiteral);
                    if(result == null) result = this.caseEModelElement(enumerationLiteral);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INSTANCE_SPECIFICATION:
                {
                    let instanceSpecification : uml.InstanceSpecification = <uml.InstanceSpecification><any>theEObject;
                    let result : T = this.caseInstanceSpecification(instanceSpecification);
                    if(result == null) result = this.caseDeploymentTarget(instanceSpecification);
                    if(result == null) result = this.casePackageableElement(instanceSpecification);
                    if(result == null) result = this.caseDeployedArtifact(instanceSpecification);
                    if(result == null) result = this.caseNamedElement(instanceSpecification);
                    if(result == null) result = this.caseParameterableElement(instanceSpecification);
                    if(result == null) result = this.caseElement(instanceSpecification);
                    if(result == null) result = this.caseEModelElement(instanceSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.SLOT:
                {
                    let slot : uml.Slot = <uml.Slot><any>theEObject;
                    let result : T = this.caseSlot(slot);
                    if(result == null) result = this.caseElement(slot);
                    if(result == null) result = this.caseEModelElement(slot);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PRIMITIVE_TYPE:
                {
                    let primitiveType : uml.PrimitiveType = <uml.PrimitiveType><any>theEObject;
                    let result : T = this.casePrimitiveType(primitiveType);
                    if(result == null) result = this.caseDataType(primitiveType);
                    if(result == null) result = this.caseClassifier(primitiveType);
                    if(result == null) result = this.caseNamespace(primitiveType);
                    if(result == null) result = this.caseRedefinableElement(primitiveType);
                    if(result == null) result = this.caseType(primitiveType);
                    if(result == null) result = this.caseTemplateableElement(primitiveType);
                    if(result == null) result = this.casePackageableElement(primitiveType);
                    if(result == null) result = this.caseNamedElement(primitiveType);
                    if(result == null) result = this.caseParameterableElement(primitiveType);
                    if(result == null) result = this.caseElement(primitiveType);
                    if(result == null) result = this.caseEModelElement(primitiveType);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ELEMENT_IMPORT:
                {
                    let elementImport : uml.ElementImport = <uml.ElementImport><any>theEObject;
                    let result : T = this.caseElementImport(elementImport);
                    if(result == null) result = this.caseDirectedRelationship(elementImport);
                    if(result == null) result = this.caseRelationship(elementImport);
                    if(result == null) result = this.caseElement(elementImport);
                    if(result == null) result = this.caseEModelElement(elementImport);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PACKAGE_IMPORT:
                {
                    let packageImport : uml.PackageImport = <uml.PackageImport><any>theEObject;
                    let result : T = this.casePackageImport(packageImport);
                    if(result == null) result = this.caseDirectedRelationship(packageImport);
                    if(result == null) result = this.caseRelationship(packageImport);
                    if(result == null) result = this.caseElement(packageImport);
                    if(result == null) result = this.caseEModelElement(packageImport);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXTENSION:
                {
                    let extension : uml.Extension = <uml.Extension><any>theEObject;
                    let result : T = this.caseExtension(extension);
                    if(result == null) result = this.caseAssociation(extension);
                    if(result == null) result = this.caseClassifier(extension);
                    if(result == null) result = this.caseRelationship(extension);
                    if(result == null) result = this.caseNamespace(extension);
                    if(result == null) result = this.caseRedefinableElement(extension);
                    if(result == null) result = this.caseType(extension);
                    if(result == null) result = this.caseTemplateableElement(extension);
                    if(result == null) result = this.casePackageableElement(extension);
                    if(result == null) result = this.caseNamedElement(extension);
                    if(result == null) result = this.caseParameterableElement(extension);
                    if(result == null) result = this.caseElement(extension);
                    if(result == null) result = this.caseEModelElement(extension);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXTENSION_END:
                {
                    let extensionEnd : uml.ExtensionEnd = <uml.ExtensionEnd><any>theEObject;
                    let result : T = this.caseExtensionEnd(extensionEnd);
                    if(result == null) result = this.caseProperty(extensionEnd);
                    if(result == null) result = this.caseStructuralFeature(extensionEnd);
                    if(result == null) result = this.caseConnectableElement(extensionEnd);
                    if(result == null) result = this.caseDeploymentTarget(extensionEnd);
                    if(result == null) result = this.caseFeature(extensionEnd);
                    if(result == null) result = this.caseTypedElement(extensionEnd);
                    if(result == null) result = this.caseMultiplicityElement(extensionEnd);
                    if(result == null) result = this.caseParameterableElement(extensionEnd);
                    if(result == null) result = this.caseRedefinableElement(extensionEnd);
                    if(result == null) result = this.caseNamedElement(extensionEnd);
                    if(result == null) result = this.caseElement(extensionEnd);
                    if(result == null) result = this.caseEModelElement(extensionEnd);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MODEL:
                {
                    let model : uml.Model = <uml.Model><any>theEObject;
                    let result : T = this.caseModel(model);
                    if(result == null) result = this.casePackage(model);
                    if(result == null) result = this.caseNamespace(model);
                    if(result == null) result = this.casePackageableElement(model);
                    if(result == null) result = this.caseTemplateableElement(model);
                    if(result == null) result = this.caseNamedElement(model);
                    if(result == null) result = this.caseParameterableElement(model);
                    if(result == null) result = this.caseElement(model);
                    if(result == null) result = this.caseEModelElement(model);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STRING_EXPRESSION:
                {
                    let stringExpression : uml.StringExpression = <uml.StringExpression><any>theEObject;
                    let result : T = this.caseStringExpression(stringExpression);
                    if(result == null) result = this.caseExpression(stringExpression);
                    if(result == null) result = this.caseTemplateableElement(stringExpression);
                    if(result == null) result = this.caseValueSpecification(stringExpression);
                    if(result == null) result = this.casePackageableElement(stringExpression);
                    if(result == null) result = this.caseTypedElement(stringExpression);
                    if(result == null) result = this.caseNamedElement(stringExpression);
                    if(result == null) result = this.caseParameterableElement(stringExpression);
                    if(result == null) result = this.caseElement(stringExpression);
                    if(result == null) result = this.caseEModelElement(stringExpression);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXPRESSION:
                {
                    let expression : uml.Expression = <uml.Expression><any>theEObject;
                    let result : T = this.caseExpression(expression);
                    if(result == null) result = this.caseValueSpecification(expression);
                    if(result == null) result = this.casePackageableElement(expression);
                    if(result == null) result = this.caseTypedElement(expression);
                    if(result == null) result = this.caseNamedElement(expression);
                    if(result == null) result = this.caseParameterableElement(expression);
                    if(result == null) result = this.caseElement(expression);
                    if(result == null) result = this.caseEModelElement(expression);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.USAGE:
                {
                    let usage : uml.Usage = <uml.Usage><any>theEObject;
                    let result : T = this.caseUsage(usage);
                    if(result == null) result = this.caseDependency(usage);
                    if(result == null) result = this.casePackageableElement(usage);
                    if(result == null) result = this.caseDirectedRelationship(usage);
                    if(result == null) result = this.caseNamedElement(usage);
                    if(result == null) result = this.caseParameterableElement(usage);
                    if(result == null) result = this.caseRelationship(usage);
                    if(result == null) result = this.caseElement(usage);
                    if(result == null) result = this.caseEModelElement(usage);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.COLLABORATION_USE:
                {
                    let collaborationUse : uml.CollaborationUse = <uml.CollaborationUse><any>theEObject;
                    let result : T = this.caseCollaborationUse(collaborationUse);
                    if(result == null) result = this.caseNamedElement(collaborationUse);
                    if(result == null) result = this.caseElement(collaborationUse);
                    if(result == null) result = this.caseEModelElement(collaborationUse);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.COLLABORATION:
                {
                    let collaboration : uml.Collaboration = <uml.Collaboration><any>theEObject;
                    let result : T = this.caseCollaboration(collaboration);
                    if(result == null) result = this.caseStructuredClassifier(collaboration);
                    if(result == null) result = this.caseBehavioredClassifier(collaboration);
                    if(result == null) result = this.caseClassifier(collaboration);
                    if(result == null) result = this.caseNamespace(collaboration);
                    if(result == null) result = this.caseRedefinableElement(collaboration);
                    if(result == null) result = this.caseType(collaboration);
                    if(result == null) result = this.caseTemplateableElement(collaboration);
                    if(result == null) result = this.casePackageableElement(collaboration);
                    if(result == null) result = this.caseNamedElement(collaboration);
                    if(result == null) result = this.caseParameterableElement(collaboration);
                    if(result == null) result = this.caseElement(collaboration);
                    if(result == null) result = this.caseEModelElement(collaboration);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STRUCTURED_CLASSIFIER:
                {
                    let structuredClassifier : uml.StructuredClassifier = <uml.StructuredClassifier><any>theEObject;
                    let result : T = this.caseStructuredClassifier(structuredClassifier);
                    if(result == null) result = this.caseClassifier(structuredClassifier);
                    if(result == null) result = this.caseNamespace(structuredClassifier);
                    if(result == null) result = this.caseRedefinableElement(structuredClassifier);
                    if(result == null) result = this.caseType(structuredClassifier);
                    if(result == null) result = this.caseTemplateableElement(structuredClassifier);
                    if(result == null) result = this.casePackageableElement(structuredClassifier);
                    if(result == null) result = this.caseNamedElement(structuredClassifier);
                    if(result == null) result = this.caseParameterableElement(structuredClassifier);
                    if(result == null) result = this.caseElement(structuredClassifier);
                    if(result == null) result = this.caseEModelElement(structuredClassifier);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONNECTOR:
                {
                    let connector : uml.Connector = <uml.Connector><any>theEObject;
                    let result : T = this.caseConnector(connector);
                    if(result == null) result = this.caseFeature(connector);
                    if(result == null) result = this.caseRedefinableElement(connector);
                    if(result == null) result = this.caseNamedElement(connector);
                    if(result == null) result = this.caseElement(connector);
                    if(result == null) result = this.caseEModelElement(connector);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.GENERALIZATION:
                {
                    let generalization : uml.Generalization = <uml.Generalization><any>theEObject;
                    let result : T = this.caseGeneralization(generalization);
                    if(result == null) result = this.caseDirectedRelationship(generalization);
                    if(result == null) result = this.caseRelationship(generalization);
                    if(result == null) result = this.caseElement(generalization);
                    if(result == null) result = this.caseEModelElement(generalization);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.GENERALIZATION_SET:
                {
                    let generalizationSet : uml.GeneralizationSet = <uml.GeneralizationSet><any>theEObject;
                    let result : T = this.caseGeneralizationSet(generalizationSet);
                    if(result == null) result = this.casePackageableElement(generalizationSet);
                    if(result == null) result = this.caseNamedElement(generalizationSet);
                    if(result == null) result = this.caseParameterableElement(generalizationSet);
                    if(result == null) result = this.caseElement(generalizationSet);
                    if(result == null) result = this.caseEModelElement(generalizationSet);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE:
                {
                    let redefinableTemplateSignature : uml.RedefinableTemplateSignature = <uml.RedefinableTemplateSignature><any>theEObject;
                    let result : T = this.caseRedefinableTemplateSignature(redefinableTemplateSignature);
                    if(result == null) result = this.caseRedefinableElement(redefinableTemplateSignature);
                    if(result == null) result = this.caseTemplateSignature(redefinableTemplateSignature);
                    if(result == null) result = this.caseNamedElement(redefinableTemplateSignature);
                    if(result == null) result = this.caseElement(redefinableTemplateSignature);
                    if(result == null) result = this.caseEModelElement(redefinableTemplateSignature);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.USE_CASE:
                {
                    let useCase : uml.UseCase = <uml.UseCase><any>theEObject;
                    let result : T = this.caseUseCase(useCase);
                    if(result == null) result = this.caseBehavioredClassifier(useCase);
                    if(result == null) result = this.caseClassifier(useCase);
                    if(result == null) result = this.caseNamespace(useCase);
                    if(result == null) result = this.caseRedefinableElement(useCase);
                    if(result == null) result = this.caseType(useCase);
                    if(result == null) result = this.caseTemplateableElement(useCase);
                    if(result == null) result = this.casePackageableElement(useCase);
                    if(result == null) result = this.caseNamedElement(useCase);
                    if(result == null) result = this.caseParameterableElement(useCase);
                    if(result == null) result = this.caseElement(useCase);
                    if(result == null) result = this.caseEModelElement(useCase);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXTEND:
                {
                    let extend : uml.Extend = <uml.Extend><any>theEObject;
                    let result : T = this.caseExtend(extend);
                    if(result == null) result = this.caseNamedElement(extend);
                    if(result == null) result = this.caseDirectedRelationship(extend);
                    if(result == null) result = this.caseRelationship(extend);
                    if(result == null) result = this.caseElement(extend);
                    if(result == null) result = this.caseEModelElement(extend);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXTENSION_POINT:
                {
                    let extensionPoint : uml.ExtensionPoint = <uml.ExtensionPoint><any>theEObject;
                    let result : T = this.caseExtensionPoint(extensionPoint);
                    if(result == null) result = this.caseRedefinableElement(extensionPoint);
                    if(result == null) result = this.caseNamedElement(extensionPoint);
                    if(result == null) result = this.caseElement(extensionPoint);
                    if(result == null) result = this.caseEModelElement(extensionPoint);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INCLUDE:
                {
                    let include : uml.Include = <uml.Include><any>theEObject;
                    let result : T = this.caseInclude(include);
                    if(result == null) result = this.caseNamedElement(include);
                    if(result == null) result = this.caseDirectedRelationship(include);
                    if(result == null) result = this.caseRelationship(include);
                    if(result == null) result = this.caseElement(include);
                    if(result == null) result = this.caseEModelElement(include);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.SUBSTITUTION:
                {
                    let substitution : uml.Substitution = <uml.Substitution><any>theEObject;
                    let result : T = this.caseSubstitution(substitution);
                    if(result == null) result = this.caseRealization(substitution);
                    if(result == null) result = this.caseAbstraction(substitution);
                    if(result == null) result = this.caseDependency(substitution);
                    if(result == null) result = this.casePackageableElement(substitution);
                    if(result == null) result = this.caseDirectedRelationship(substitution);
                    if(result == null) result = this.caseNamedElement(substitution);
                    if(result == null) result = this.caseParameterableElement(substitution);
                    if(result == null) result = this.caseRelationship(substitution);
                    if(result == null) result = this.caseElement(substitution);
                    if(result == null) result = this.caseEModelElement(substitution);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REALIZATION:
                {
                    let realization : uml.Realization = <uml.Realization><any>theEObject;
                    let result : T = this.caseRealization(realization);
                    if(result == null) result = this.caseAbstraction(realization);
                    if(result == null) result = this.caseDependency(realization);
                    if(result == null) result = this.casePackageableElement(realization);
                    if(result == null) result = this.caseDirectedRelationship(realization);
                    if(result == null) result = this.caseNamedElement(realization);
                    if(result == null) result = this.caseParameterableElement(realization);
                    if(result == null) result = this.caseRelationship(realization);
                    if(result == null) result = this.caseElement(realization);
                    if(result == null) result = this.caseEModelElement(realization);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER:
                {
                    let classifierTemplateParameter : uml.ClassifierTemplateParameter = <uml.ClassifierTemplateParameter><any>theEObject;
                    let result : T = this.caseClassifierTemplateParameter(classifierTemplateParameter);
                    if(result == null) result = this.caseTemplateParameter(classifierTemplateParameter);
                    if(result == null) result = this.caseElement(classifierTemplateParameter);
                    if(result == null) result = this.caseEModelElement(classifierTemplateParameter);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERFACE_REALIZATION:
                {
                    let interfaceRealization : uml.InterfaceRealization = <uml.InterfaceRealization><any>theEObject;
                    let result : T = this.caseInterfaceRealization(interfaceRealization);
                    if(result == null) result = this.caseRealization(interfaceRealization);
                    if(result == null) result = this.caseAbstraction(interfaceRealization);
                    if(result == null) result = this.caseDependency(interfaceRealization);
                    if(result == null) result = this.casePackageableElement(interfaceRealization);
                    if(result == null) result = this.caseDirectedRelationship(interfaceRealization);
                    if(result == null) result = this.caseNamedElement(interfaceRealization);
                    if(result == null) result = this.caseParameterableElement(interfaceRealization);
                    if(result == null) result = this.caseRelationship(interfaceRealization);
                    if(result == null) result = this.caseElement(interfaceRealization);
                    if(result == null) result = this.caseEModelElement(interfaceRealization);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ENCAPSULATED_CLASSIFIER:
                {
                    let encapsulatedClassifier : uml.EncapsulatedClassifier = <uml.EncapsulatedClassifier><any>theEObject;
                    let result : T = this.caseEncapsulatedClassifier(encapsulatedClassifier);
                    if(result == null) result = this.caseStructuredClassifier(encapsulatedClassifier);
                    if(result == null) result = this.caseClassifier(encapsulatedClassifier);
                    if(result == null) result = this.caseNamespace(encapsulatedClassifier);
                    if(result == null) result = this.caseRedefinableElement(encapsulatedClassifier);
                    if(result == null) result = this.caseType(encapsulatedClassifier);
                    if(result == null) result = this.caseTemplateableElement(encapsulatedClassifier);
                    if(result == null) result = this.casePackageableElement(encapsulatedClassifier);
                    if(result == null) result = this.caseNamedElement(encapsulatedClassifier);
                    if(result == null) result = this.caseParameterableElement(encapsulatedClassifier);
                    if(result == null) result = this.caseElement(encapsulatedClassifier);
                    if(result == null) result = this.caseEModelElement(encapsulatedClassifier);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTIVITY_GROUP:
                {
                    let activityGroup : uml.ActivityGroup = <uml.ActivityGroup><any>theEObject;
                    let result : T = this.caseActivityGroup(activityGroup);
                    if(result == null) result = this.caseNamedElement(activityGroup);
                    if(result == null) result = this.caseActivityContent(activityGroup);
                    if(result == null) result = this.caseElement(activityGroup);
                    if(result == null) result = this.caseEModelElement(activityGroup);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTIVITY_EDGE:
                {
                    let activityEdge : uml.ActivityEdge = <uml.ActivityEdge><any>theEObject;
                    let result : T = this.caseActivityEdge(activityEdge);
                    if(result == null) result = this.caseRedefinableElement(activityEdge);
                    if(result == null) result = this.caseNamedElement(activityEdge);
                    if(result == null) result = this.caseElement(activityEdge);
                    if(result == null) result = this.caseEModelElement(activityEdge);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTIVITY_PARTITION:
                {
                    let activityPartition : uml.ActivityPartition = <uml.ActivityPartition><any>theEObject;
                    let result : T = this.caseActivityPartition(activityPartition);
                    if(result == null) result = this.caseActivityGroup(activityPartition);
                    if(result == null) result = this.caseNamedElement(activityPartition);
                    if(result == null) result = this.caseActivityContent(activityPartition);
                    if(result == null) result = this.caseElement(activityPartition);
                    if(result == null) result = this.caseEModelElement(activityPartition);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTIVITY_NODE:
                {
                    let activityNode : uml.ActivityNode = <uml.ActivityNode><any>theEObject;
                    let result : T = this.caseActivityNode(activityNode);
                    if(result == null) result = this.caseRedefinableElement(activityNode);
                    if(result == null) result = this.caseActivityContent(activityNode);
                    if(result == null) result = this.caseNamedElement(activityNode);
                    if(result == null) result = this.caseElement(activityNode);
                    if(result == null) result = this.caseEModelElement(activityNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERRUPTIBLE_ACTIVITY_REGION:
                {
                    let interruptibleActivityRegion : uml.InterruptibleActivityRegion = <uml.InterruptibleActivityRegion><any>theEObject;
                    let result : T = this.caseInterruptibleActivityRegion(interruptibleActivityRegion);
                    if(result == null) result = this.caseActivityGroup(interruptibleActivityRegion);
                    if(result == null) result = this.caseNamedElement(interruptibleActivityRegion);
                    if(result == null) result = this.caseActivityContent(interruptibleActivityRegion);
                    if(result == null) result = this.caseElement(interruptibleActivityRegion);
                    if(result == null) result = this.caseEModelElement(interruptibleActivityRegion);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STRUCTURED_ACTIVITY_NODE:
                {
                    let structuredActivityNode : uml.StructuredActivityNode = <uml.StructuredActivityNode><any>theEObject;
                    let result : T = this.caseStructuredActivityNode(structuredActivityNode);
                    if(result == null) result = this.caseAction(structuredActivityNode);
                    if(result == null) result = this.caseNamespace(structuredActivityNode);
                    if(result == null) result = this.caseActivityGroup(structuredActivityNode);
                    if(result == null) result = this.caseExecutableNode(structuredActivityNode);
                    if(result == null) result = this.caseActivityNode(structuredActivityNode);
                    if(result == null) result = this.caseRedefinableElement(structuredActivityNode);
                    if(result == null) result = this.caseActivityContent(structuredActivityNode);
                    if(result == null) result = this.caseNamedElement(structuredActivityNode);
                    if(result == null) result = this.caseElement(structuredActivityNode);
                    if(result == null) result = this.caseEModelElement(structuredActivityNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTION:
                {
                    let action : uml.Action = <uml.Action><any>theEObject;
                    let result : T = this.caseAction(action);
                    if(result == null) result = this.caseExecutableNode(action);
                    if(result == null) result = this.caseActivityNode(action);
                    if(result == null) result = this.caseRedefinableElement(action);
                    if(result == null) result = this.caseActivityContent(action);
                    if(result == null) result = this.caseNamedElement(action);
                    if(result == null) result = this.caseElement(action);
                    if(result == null) result = this.caseEModelElement(action);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXECUTABLE_NODE:
                {
                    let executableNode : uml.ExecutableNode = <uml.ExecutableNode><any>theEObject;
                    let result : T = this.caseExecutableNode(executableNode);
                    if(result == null) result = this.caseActivityNode(executableNode);
                    if(result == null) result = this.caseRedefinableElement(executableNode);
                    if(result == null) result = this.caseActivityContent(executableNode);
                    if(result == null) result = this.caseNamedElement(executableNode);
                    if(result == null) result = this.caseElement(executableNode);
                    if(result == null) result = this.caseEModelElement(executableNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXCEPTION_HANDLER:
                {
                    let exceptionHandler : uml.ExceptionHandler = <uml.ExceptionHandler><any>theEObject;
                    let result : T = this.caseExceptionHandler(exceptionHandler);
                    if(result == null) result = this.caseElement(exceptionHandler);
                    if(result == null) result = this.caseEModelElement(exceptionHandler);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OBJECT_NODE:
                {
                    let objectNode : uml.ObjectNode = <uml.ObjectNode><any>theEObject;
                    let result : T = this.caseObjectNode(objectNode);
                    if(result == null) result = this.caseActivityNode(objectNode);
                    if(result == null) result = this.caseTypedElement(objectNode);
                    if(result == null) result = this.caseRedefinableElement(objectNode);
                    if(result == null) result = this.caseActivityContent(objectNode);
                    if(result == null) result = this.caseNamedElement(objectNode);
                    if(result == null) result = this.caseElement(objectNode);
                    if(result == null) result = this.caseEModelElement(objectNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INPUT_PIN:
                {
                    let inputPin : uml.InputPin = <uml.InputPin><any>theEObject;
                    let result : T = this.caseInputPin(inputPin);
                    if(result == null) result = this.casePin(inputPin);
                    if(result == null) result = this.caseObjectNode(inputPin);
                    if(result == null) result = this.caseMultiplicityElement(inputPin);
                    if(result == null) result = this.caseActivityNode(inputPin);
                    if(result == null) result = this.caseTypedElement(inputPin);
                    if(result == null) result = this.caseRedefinableElement(inputPin);
                    if(result == null) result = this.caseActivityContent(inputPin);
                    if(result == null) result = this.caseNamedElement(inputPin);
                    if(result == null) result = this.caseElement(inputPin);
                    if(result == null) result = this.caseEModelElement(inputPin);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PIN:
                {
                    let pin : uml.Pin = <uml.Pin><any>theEObject;
                    let result : T = this.casePin(pin);
                    if(result == null) result = this.caseObjectNode(pin);
                    if(result == null) result = this.caseMultiplicityElement(pin);
                    if(result == null) result = this.caseActivityNode(pin);
                    if(result == null) result = this.caseTypedElement(pin);
                    if(result == null) result = this.caseRedefinableElement(pin);
                    if(result == null) result = this.caseActivityContent(pin);
                    if(result == null) result = this.caseNamedElement(pin);
                    if(result == null) result = this.caseElement(pin);
                    if(result == null) result = this.caseEModelElement(pin);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OUTPUT_PIN:
                {
                    let outputPin : uml.OutputPin = <uml.OutputPin><any>theEObject;
                    let result : T = this.caseOutputPin(outputPin);
                    if(result == null) result = this.casePin(outputPin);
                    if(result == null) result = this.caseObjectNode(outputPin);
                    if(result == null) result = this.caseMultiplicityElement(outputPin);
                    if(result == null) result = this.caseActivityNode(outputPin);
                    if(result == null) result = this.caseTypedElement(outputPin);
                    if(result == null) result = this.caseRedefinableElement(outputPin);
                    if(result == null) result = this.caseActivityContent(outputPin);
                    if(result == null) result = this.caseNamedElement(outputPin);
                    if(result == null) result = this.caseElement(outputPin);
                    if(result == null) result = this.caseEModelElement(outputPin);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.VARIABLE:
                {
                    let variable : uml.Variable = <uml.Variable><any>theEObject;
                    let result : T = this.caseVariable(variable);
                    if(result == null) result = this.caseConnectableElement(variable);
                    if(result == null) result = this.caseMultiplicityElement(variable);
                    if(result == null) result = this.caseTypedElement(variable);
                    if(result == null) result = this.caseParameterableElement(variable);
                    if(result == null) result = this.caseNamedElement(variable);
                    if(result == null) result = this.caseElement(variable);
                    if(result == null) result = this.caseEModelElement(variable);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.VALUE_SPECIFICATION_ACTION:
                {
                    let valueSpecificationAction : uml.ValueSpecificationAction = <uml.ValueSpecificationAction><any>theEObject;
                    let result : T = this.caseValueSpecificationAction(valueSpecificationAction);
                    if(result == null) result = this.caseAction(valueSpecificationAction);
                    if(result == null) result = this.caseExecutableNode(valueSpecificationAction);
                    if(result == null) result = this.caseActivityNode(valueSpecificationAction);
                    if(result == null) result = this.caseRedefinableElement(valueSpecificationAction);
                    if(result == null) result = this.caseActivityContent(valueSpecificationAction);
                    if(result == null) result = this.caseNamedElement(valueSpecificationAction);
                    if(result == null) result = this.caseElement(valueSpecificationAction);
                    if(result == null) result = this.caseEModelElement(valueSpecificationAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.VARIABLE_ACTION:
                {
                    let variableAction : uml.VariableAction = <uml.VariableAction><any>theEObject;
                    let result : T = this.caseVariableAction(variableAction);
                    if(result == null) result = this.caseAction(variableAction);
                    if(result == null) result = this.caseExecutableNode(variableAction);
                    if(result == null) result = this.caseActivityNode(variableAction);
                    if(result == null) result = this.caseRedefinableElement(variableAction);
                    if(result == null) result = this.caseActivityContent(variableAction);
                    if(result == null) result = this.caseNamedElement(variableAction);
                    if(result == null) result = this.caseElement(variableAction);
                    if(result == null) result = this.caseEModelElement(variableAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.WRITE_LINK_ACTION:
                {
                    let writeLinkAction : uml.WriteLinkAction = <uml.WriteLinkAction><any>theEObject;
                    let result : T = this.caseWriteLinkAction(writeLinkAction);
                    if(result == null) result = this.caseLinkAction(writeLinkAction);
                    if(result == null) result = this.caseAction(writeLinkAction);
                    if(result == null) result = this.caseExecutableNode(writeLinkAction);
                    if(result == null) result = this.caseActivityNode(writeLinkAction);
                    if(result == null) result = this.caseRedefinableElement(writeLinkAction);
                    if(result == null) result = this.caseActivityContent(writeLinkAction);
                    if(result == null) result = this.caseNamedElement(writeLinkAction);
                    if(result == null) result = this.caseElement(writeLinkAction);
                    if(result == null) result = this.caseEModelElement(writeLinkAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LINK_ACTION:
                {
                    let linkAction : uml.LinkAction = <uml.LinkAction><any>theEObject;
                    let result : T = this.caseLinkAction(linkAction);
                    if(result == null) result = this.caseAction(linkAction);
                    if(result == null) result = this.caseExecutableNode(linkAction);
                    if(result == null) result = this.caseActivityNode(linkAction);
                    if(result == null) result = this.caseRedefinableElement(linkAction);
                    if(result == null) result = this.caseActivityContent(linkAction);
                    if(result == null) result = this.caseNamedElement(linkAction);
                    if(result == null) result = this.caseElement(linkAction);
                    if(result == null) result = this.caseEModelElement(linkAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LINK_END_DATA:
                {
                    let linkEndData : uml.LinkEndData = <uml.LinkEndData><any>theEObject;
                    let result : T = this.caseLinkEndData(linkEndData);
                    if(result == null) result = this.caseElement(linkEndData);
                    if(result == null) result = this.caseEModelElement(linkEndData);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.QUALIFIER_VALUE:
                {
                    let qualifierValue : uml.QualifierValue = <uml.QualifierValue><any>theEObject;
                    let result : T = this.caseQualifierValue(qualifierValue);
                    if(result == null) result = this.caseElement(qualifierValue);
                    if(result == null) result = this.caseEModelElement(qualifierValue);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.WRITE_STRUCTURAL_FEATURE_ACTION:
                {
                    let writeStructuralFeatureAction : uml.WriteStructuralFeatureAction = <uml.WriteStructuralFeatureAction><any>theEObject;
                    let result : T = this.caseWriteStructuralFeatureAction(writeStructuralFeatureAction);
                    if(result == null) result = this.caseStructuralFeatureAction(writeStructuralFeatureAction);
                    if(result == null) result = this.caseAction(writeStructuralFeatureAction);
                    if(result == null) result = this.caseExecutableNode(writeStructuralFeatureAction);
                    if(result == null) result = this.caseActivityNode(writeStructuralFeatureAction);
                    if(result == null) result = this.caseRedefinableElement(writeStructuralFeatureAction);
                    if(result == null) result = this.caseActivityContent(writeStructuralFeatureAction);
                    if(result == null) result = this.caseNamedElement(writeStructuralFeatureAction);
                    if(result == null) result = this.caseElement(writeStructuralFeatureAction);
                    if(result == null) result = this.caseEModelElement(writeStructuralFeatureAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STRUCTURAL_FEATURE_ACTION:
                {
                    let structuralFeatureAction : uml.StructuralFeatureAction = <uml.StructuralFeatureAction><any>theEObject;
                    let result : T = this.caseStructuralFeatureAction(structuralFeatureAction);
                    if(result == null) result = this.caseAction(structuralFeatureAction);
                    if(result == null) result = this.caseExecutableNode(structuralFeatureAction);
                    if(result == null) result = this.caseActivityNode(structuralFeatureAction);
                    if(result == null) result = this.caseRedefinableElement(structuralFeatureAction);
                    if(result == null) result = this.caseActivityContent(structuralFeatureAction);
                    if(result == null) result = this.caseNamedElement(structuralFeatureAction);
                    if(result == null) result = this.caseElement(structuralFeatureAction);
                    if(result == null) result = this.caseEModelElement(structuralFeatureAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.WRITE_VARIABLE_ACTION:
                {
                    let writeVariableAction : uml.WriteVariableAction = <uml.WriteVariableAction><any>theEObject;
                    let result : T = this.caseWriteVariableAction(writeVariableAction);
                    if(result == null) result = this.caseVariableAction(writeVariableAction);
                    if(result == null) result = this.caseAction(writeVariableAction);
                    if(result == null) result = this.caseExecutableNode(writeVariableAction);
                    if(result == null) result = this.caseActivityNode(writeVariableAction);
                    if(result == null) result = this.caseRedefinableElement(writeVariableAction);
                    if(result == null) result = this.caseActivityContent(writeVariableAction);
                    if(result == null) result = this.caseNamedElement(writeVariableAction);
                    if(result == null) result = this.caseElement(writeVariableAction);
                    if(result == null) result = this.caseEModelElement(writeVariableAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACCEPT_CALL_ACTION:
                {
                    let acceptCallAction : uml.AcceptCallAction = <uml.AcceptCallAction><any>theEObject;
                    let result : T = this.caseAcceptCallAction(acceptCallAction);
                    if(result == null) result = this.caseAcceptEventAction(acceptCallAction);
                    if(result == null) result = this.caseAction(acceptCallAction);
                    if(result == null) result = this.caseExecutableNode(acceptCallAction);
                    if(result == null) result = this.caseActivityNode(acceptCallAction);
                    if(result == null) result = this.caseRedefinableElement(acceptCallAction);
                    if(result == null) result = this.caseActivityContent(acceptCallAction);
                    if(result == null) result = this.caseNamedElement(acceptCallAction);
                    if(result == null) result = this.caseElement(acceptCallAction);
                    if(result == null) result = this.caseEModelElement(acceptCallAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACCEPT_EVENT_ACTION:
                {
                    let acceptEventAction : uml.AcceptEventAction = <uml.AcceptEventAction><any>theEObject;
                    let result : T = this.caseAcceptEventAction(acceptEventAction);
                    if(result == null) result = this.caseAction(acceptEventAction);
                    if(result == null) result = this.caseExecutableNode(acceptEventAction);
                    if(result == null) result = this.caseActivityNode(acceptEventAction);
                    if(result == null) result = this.caseRedefinableElement(acceptEventAction);
                    if(result == null) result = this.caseActivityContent(acceptEventAction);
                    if(result == null) result = this.caseNamedElement(acceptEventAction);
                    if(result == null) result = this.caseElement(acceptEventAction);
                    if(result == null) result = this.caseEModelElement(acceptEventAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTION_INPUT_PIN:
                {
                    let actionInputPin : uml.ActionInputPin = <uml.ActionInputPin><any>theEObject;
                    let result : T = this.caseActionInputPin(actionInputPin);
                    if(result == null) result = this.caseInputPin(actionInputPin);
                    if(result == null) result = this.casePin(actionInputPin);
                    if(result == null) result = this.caseObjectNode(actionInputPin);
                    if(result == null) result = this.caseMultiplicityElement(actionInputPin);
                    if(result == null) result = this.caseActivityNode(actionInputPin);
                    if(result == null) result = this.caseTypedElement(actionInputPin);
                    if(result == null) result = this.caseRedefinableElement(actionInputPin);
                    if(result == null) result = this.caseActivityContent(actionInputPin);
                    if(result == null) result = this.caseNamedElement(actionInputPin);
                    if(result == null) result = this.caseElement(actionInputPin);
                    if(result == null) result = this.caseEModelElement(actionInputPin);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ADD_STRUCTURAL_FEATURE_VALUE_ACTION:
                {
                    let addStructuralFeatureValueAction : uml.AddStructuralFeatureValueAction = <uml.AddStructuralFeatureValueAction><any>theEObject;
                    let result : T = this.caseAddStructuralFeatureValueAction(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseWriteStructuralFeatureAction(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseStructuralFeatureAction(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseAction(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseExecutableNode(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseActivityNode(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseRedefinableElement(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseActivityContent(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseNamedElement(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseElement(addStructuralFeatureValueAction);
                    if(result == null) result = this.caseEModelElement(addStructuralFeatureValueAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ADD_VARIABLE_VALUE_ACTION:
                {
                    let addVariableValueAction : uml.AddVariableValueAction = <uml.AddVariableValueAction><any>theEObject;
                    let result : T = this.caseAddVariableValueAction(addVariableValueAction);
                    if(result == null) result = this.caseWriteVariableAction(addVariableValueAction);
                    if(result == null) result = this.caseVariableAction(addVariableValueAction);
                    if(result == null) result = this.caseAction(addVariableValueAction);
                    if(result == null) result = this.caseExecutableNode(addVariableValueAction);
                    if(result == null) result = this.caseActivityNode(addVariableValueAction);
                    if(result == null) result = this.caseRedefinableElement(addVariableValueAction);
                    if(result == null) result = this.caseActivityContent(addVariableValueAction);
                    if(result == null) result = this.caseNamedElement(addVariableValueAction);
                    if(result == null) result = this.caseElement(addVariableValueAction);
                    if(result == null) result = this.caseEModelElement(addVariableValueAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.BROADCAST_SIGNAL_ACTION:
                {
                    let broadcastSignalAction : uml.BroadcastSignalAction = <uml.BroadcastSignalAction><any>theEObject;
                    let result : T = this.caseBroadcastSignalAction(broadcastSignalAction);
                    if(result == null) result = this.caseInvocationAction(broadcastSignalAction);
                    if(result == null) result = this.caseAction(broadcastSignalAction);
                    if(result == null) result = this.caseExecutableNode(broadcastSignalAction);
                    if(result == null) result = this.caseActivityNode(broadcastSignalAction);
                    if(result == null) result = this.caseRedefinableElement(broadcastSignalAction);
                    if(result == null) result = this.caseActivityContent(broadcastSignalAction);
                    if(result == null) result = this.caseNamedElement(broadcastSignalAction);
                    if(result == null) result = this.caseElement(broadcastSignalAction);
                    if(result == null) result = this.caseEModelElement(broadcastSignalAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INVOCATION_ACTION:
                {
                    let invocationAction : uml.InvocationAction = <uml.InvocationAction><any>theEObject;
                    let result : T = this.caseInvocationAction(invocationAction);
                    if(result == null) result = this.caseAction(invocationAction);
                    if(result == null) result = this.caseExecutableNode(invocationAction);
                    if(result == null) result = this.caseActivityNode(invocationAction);
                    if(result == null) result = this.caseRedefinableElement(invocationAction);
                    if(result == null) result = this.caseActivityContent(invocationAction);
                    if(result == null) result = this.caseNamedElement(invocationAction);
                    if(result == null) result = this.caseElement(invocationAction);
                    if(result == null) result = this.caseEModelElement(invocationAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CALL_ACTION:
                {
                    let callAction : uml.CallAction = <uml.CallAction><any>theEObject;
                    let result : T = this.caseCallAction(callAction);
                    if(result == null) result = this.caseInvocationAction(callAction);
                    if(result == null) result = this.caseAction(callAction);
                    if(result == null) result = this.caseExecutableNode(callAction);
                    if(result == null) result = this.caseActivityNode(callAction);
                    if(result == null) result = this.caseRedefinableElement(callAction);
                    if(result == null) result = this.caseActivityContent(callAction);
                    if(result == null) result = this.caseNamedElement(callAction);
                    if(result == null) result = this.caseElement(callAction);
                    if(result == null) result = this.caseEModelElement(callAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CALL_BEHAVIOR_ACTION:
                {
                    let callBehaviorAction : uml.CallBehaviorAction = <uml.CallBehaviorAction><any>theEObject;
                    let result : T = this.caseCallBehaviorAction(callBehaviorAction);
                    if(result == null) result = this.caseCallAction(callBehaviorAction);
                    if(result == null) result = this.caseInvocationAction(callBehaviorAction);
                    if(result == null) result = this.caseAction(callBehaviorAction);
                    if(result == null) result = this.caseExecutableNode(callBehaviorAction);
                    if(result == null) result = this.caseActivityNode(callBehaviorAction);
                    if(result == null) result = this.caseRedefinableElement(callBehaviorAction);
                    if(result == null) result = this.caseActivityContent(callBehaviorAction);
                    if(result == null) result = this.caseNamedElement(callBehaviorAction);
                    if(result == null) result = this.caseElement(callBehaviorAction);
                    if(result == null) result = this.caseEModelElement(callBehaviorAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CALL_OPERATION_ACTION:
                {
                    let callOperationAction : uml.CallOperationAction = <uml.CallOperationAction><any>theEObject;
                    let result : T = this.caseCallOperationAction(callOperationAction);
                    if(result == null) result = this.caseCallAction(callOperationAction);
                    if(result == null) result = this.caseInvocationAction(callOperationAction);
                    if(result == null) result = this.caseAction(callOperationAction);
                    if(result == null) result = this.caseExecutableNode(callOperationAction);
                    if(result == null) result = this.caseActivityNode(callOperationAction);
                    if(result == null) result = this.caseRedefinableElement(callOperationAction);
                    if(result == null) result = this.caseActivityContent(callOperationAction);
                    if(result == null) result = this.caseNamedElement(callOperationAction);
                    if(result == null) result = this.caseElement(callOperationAction);
                    if(result == null) result = this.caseEModelElement(callOperationAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CLAUSE:
                {
                    let clause : uml.Clause = <uml.Clause><any>theEObject;
                    let result : T = this.caseClause(clause);
                    if(result == null) result = this.caseElement(clause);
                    if(result == null) result = this.caseEModelElement(clause);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CLEAR_ASSOCIATION_ACTION:
                {
                    let clearAssociationAction : uml.ClearAssociationAction = <uml.ClearAssociationAction><any>theEObject;
                    let result : T = this.caseClearAssociationAction(clearAssociationAction);
                    if(result == null) result = this.caseAction(clearAssociationAction);
                    if(result == null) result = this.caseExecutableNode(clearAssociationAction);
                    if(result == null) result = this.caseActivityNode(clearAssociationAction);
                    if(result == null) result = this.caseRedefinableElement(clearAssociationAction);
                    if(result == null) result = this.caseActivityContent(clearAssociationAction);
                    if(result == null) result = this.caseNamedElement(clearAssociationAction);
                    if(result == null) result = this.caseElement(clearAssociationAction);
                    if(result == null) result = this.caseEModelElement(clearAssociationAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CLEAR_STRUCTURAL_FEATURE_ACTION:
                {
                    let clearStructuralFeatureAction : uml.ClearStructuralFeatureAction = <uml.ClearStructuralFeatureAction><any>theEObject;
                    let result : T = this.caseClearStructuralFeatureAction(clearStructuralFeatureAction);
                    if(result == null) result = this.caseStructuralFeatureAction(clearStructuralFeatureAction);
                    if(result == null) result = this.caseAction(clearStructuralFeatureAction);
                    if(result == null) result = this.caseExecutableNode(clearStructuralFeatureAction);
                    if(result == null) result = this.caseActivityNode(clearStructuralFeatureAction);
                    if(result == null) result = this.caseRedefinableElement(clearStructuralFeatureAction);
                    if(result == null) result = this.caseActivityContent(clearStructuralFeatureAction);
                    if(result == null) result = this.caseNamedElement(clearStructuralFeatureAction);
                    if(result == null) result = this.caseElement(clearStructuralFeatureAction);
                    if(result == null) result = this.caseEModelElement(clearStructuralFeatureAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CLEAR_VARIABLE_ACTION:
                {
                    let clearVariableAction : uml.ClearVariableAction = <uml.ClearVariableAction><any>theEObject;
                    let result : T = this.caseClearVariableAction(clearVariableAction);
                    if(result == null) result = this.caseVariableAction(clearVariableAction);
                    if(result == null) result = this.caseAction(clearVariableAction);
                    if(result == null) result = this.caseExecutableNode(clearVariableAction);
                    if(result == null) result = this.caseActivityNode(clearVariableAction);
                    if(result == null) result = this.caseRedefinableElement(clearVariableAction);
                    if(result == null) result = this.caseActivityContent(clearVariableAction);
                    if(result == null) result = this.caseNamedElement(clearVariableAction);
                    if(result == null) result = this.caseElement(clearVariableAction);
                    if(result == null) result = this.caseEModelElement(clearVariableAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONDITIONAL_NODE:
                {
                    let conditionalNode : uml.ConditionalNode = <uml.ConditionalNode><any>theEObject;
                    let result : T = this.caseConditionalNode(conditionalNode);
                    if(result == null) result = this.caseStructuredActivityNode(conditionalNode);
                    if(result == null) result = this.caseAction(conditionalNode);
                    if(result == null) result = this.caseNamespace(conditionalNode);
                    if(result == null) result = this.caseActivityGroup(conditionalNode);
                    if(result == null) result = this.caseExecutableNode(conditionalNode);
                    if(result == null) result = this.caseActivityNode(conditionalNode);
                    if(result == null) result = this.caseRedefinableElement(conditionalNode);
                    if(result == null) result = this.caseActivityContent(conditionalNode);
                    if(result == null) result = this.caseNamedElement(conditionalNode);
                    if(result == null) result = this.caseElement(conditionalNode);
                    if(result == null) result = this.caseEModelElement(conditionalNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CREATE_LINK_ACTION:
                {
                    let createLinkAction : uml.CreateLinkAction = <uml.CreateLinkAction><any>theEObject;
                    let result : T = this.caseCreateLinkAction(createLinkAction);
                    if(result == null) result = this.caseWriteLinkAction(createLinkAction);
                    if(result == null) result = this.caseLinkAction(createLinkAction);
                    if(result == null) result = this.caseAction(createLinkAction);
                    if(result == null) result = this.caseExecutableNode(createLinkAction);
                    if(result == null) result = this.caseActivityNode(createLinkAction);
                    if(result == null) result = this.caseRedefinableElement(createLinkAction);
                    if(result == null) result = this.caseActivityContent(createLinkAction);
                    if(result == null) result = this.caseNamedElement(createLinkAction);
                    if(result == null) result = this.caseElement(createLinkAction);
                    if(result == null) result = this.caseEModelElement(createLinkAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LINK_END_CREATION_DATA:
                {
                    let linkEndCreationData : uml.LinkEndCreationData = <uml.LinkEndCreationData><any>theEObject;
                    let result : T = this.caseLinkEndCreationData(linkEndCreationData);
                    if(result == null) result = this.caseLinkEndData(linkEndCreationData);
                    if(result == null) result = this.caseElement(linkEndCreationData);
                    if(result == null) result = this.caseEModelElement(linkEndCreationData);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CREATE_LINK_OBJECT_ACTION:
                {
                    let createLinkObjectAction : uml.CreateLinkObjectAction = <uml.CreateLinkObjectAction><any>theEObject;
                    let result : T = this.caseCreateLinkObjectAction(createLinkObjectAction);
                    if(result == null) result = this.caseCreateLinkAction(createLinkObjectAction);
                    if(result == null) result = this.caseWriteLinkAction(createLinkObjectAction);
                    if(result == null) result = this.caseLinkAction(createLinkObjectAction);
                    if(result == null) result = this.caseAction(createLinkObjectAction);
                    if(result == null) result = this.caseExecutableNode(createLinkObjectAction);
                    if(result == null) result = this.caseActivityNode(createLinkObjectAction);
                    if(result == null) result = this.caseRedefinableElement(createLinkObjectAction);
                    if(result == null) result = this.caseActivityContent(createLinkObjectAction);
                    if(result == null) result = this.caseNamedElement(createLinkObjectAction);
                    if(result == null) result = this.caseElement(createLinkObjectAction);
                    if(result == null) result = this.caseEModelElement(createLinkObjectAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CREATE_OBJECT_ACTION:
                {
                    let createObjectAction : uml.CreateObjectAction = <uml.CreateObjectAction><any>theEObject;
                    let result : T = this.caseCreateObjectAction(createObjectAction);
                    if(result == null) result = this.caseAction(createObjectAction);
                    if(result == null) result = this.caseExecutableNode(createObjectAction);
                    if(result == null) result = this.caseActivityNode(createObjectAction);
                    if(result == null) result = this.caseRedefinableElement(createObjectAction);
                    if(result == null) result = this.caseActivityContent(createObjectAction);
                    if(result == null) result = this.caseNamedElement(createObjectAction);
                    if(result == null) result = this.caseElement(createObjectAction);
                    if(result == null) result = this.caseEModelElement(createObjectAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DESTROY_LINK_ACTION:
                {
                    let destroyLinkAction : uml.DestroyLinkAction = <uml.DestroyLinkAction><any>theEObject;
                    let result : T = this.caseDestroyLinkAction(destroyLinkAction);
                    if(result == null) result = this.caseWriteLinkAction(destroyLinkAction);
                    if(result == null) result = this.caseLinkAction(destroyLinkAction);
                    if(result == null) result = this.caseAction(destroyLinkAction);
                    if(result == null) result = this.caseExecutableNode(destroyLinkAction);
                    if(result == null) result = this.caseActivityNode(destroyLinkAction);
                    if(result == null) result = this.caseRedefinableElement(destroyLinkAction);
                    if(result == null) result = this.caseActivityContent(destroyLinkAction);
                    if(result == null) result = this.caseNamedElement(destroyLinkAction);
                    if(result == null) result = this.caseElement(destroyLinkAction);
                    if(result == null) result = this.caseEModelElement(destroyLinkAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LINK_END_DESTRUCTION_DATA:
                {
                    let linkEndDestructionData : uml.LinkEndDestructionData = <uml.LinkEndDestructionData><any>theEObject;
                    let result : T = this.caseLinkEndDestructionData(linkEndDestructionData);
                    if(result == null) result = this.caseLinkEndData(linkEndDestructionData);
                    if(result == null) result = this.caseElement(linkEndDestructionData);
                    if(result == null) result = this.caseEModelElement(linkEndDestructionData);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DESTROY_OBJECT_ACTION:
                {
                    let destroyObjectAction : uml.DestroyObjectAction = <uml.DestroyObjectAction><any>theEObject;
                    let result : T = this.caseDestroyObjectAction(destroyObjectAction);
                    if(result == null) result = this.caseAction(destroyObjectAction);
                    if(result == null) result = this.caseExecutableNode(destroyObjectAction);
                    if(result == null) result = this.caseActivityNode(destroyObjectAction);
                    if(result == null) result = this.caseRedefinableElement(destroyObjectAction);
                    if(result == null) result = this.caseActivityContent(destroyObjectAction);
                    if(result == null) result = this.caseNamedElement(destroyObjectAction);
                    if(result == null) result = this.caseElement(destroyObjectAction);
                    if(result == null) result = this.caseEModelElement(destroyObjectAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXPANSION_NODE:
                {
                    let expansionNode : uml.ExpansionNode = <uml.ExpansionNode><any>theEObject;
                    let result : T = this.caseExpansionNode(expansionNode);
                    if(result == null) result = this.caseObjectNode(expansionNode);
                    if(result == null) result = this.caseActivityNode(expansionNode);
                    if(result == null) result = this.caseTypedElement(expansionNode);
                    if(result == null) result = this.caseRedefinableElement(expansionNode);
                    if(result == null) result = this.caseActivityContent(expansionNode);
                    if(result == null) result = this.caseNamedElement(expansionNode);
                    if(result == null) result = this.caseElement(expansionNode);
                    if(result == null) result = this.caseEModelElement(expansionNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXPANSION_REGION:
                {
                    let expansionRegion : uml.ExpansionRegion = <uml.ExpansionRegion><any>theEObject;
                    let result : T = this.caseExpansionRegion(expansionRegion);
                    if(result == null) result = this.caseStructuredActivityNode(expansionRegion);
                    if(result == null) result = this.caseAction(expansionRegion);
                    if(result == null) result = this.caseNamespace(expansionRegion);
                    if(result == null) result = this.caseActivityGroup(expansionRegion);
                    if(result == null) result = this.caseExecutableNode(expansionRegion);
                    if(result == null) result = this.caseActivityNode(expansionRegion);
                    if(result == null) result = this.caseRedefinableElement(expansionRegion);
                    if(result == null) result = this.caseActivityContent(expansionRegion);
                    if(result == null) result = this.caseNamedElement(expansionRegion);
                    if(result == null) result = this.caseElement(expansionRegion);
                    if(result == null) result = this.caseEModelElement(expansionRegion);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LOOP_NODE:
                {
                    let loopNode : uml.LoopNode = <uml.LoopNode><any>theEObject;
                    let result : T = this.caseLoopNode(loopNode);
                    if(result == null) result = this.caseStructuredActivityNode(loopNode);
                    if(result == null) result = this.caseAction(loopNode);
                    if(result == null) result = this.caseNamespace(loopNode);
                    if(result == null) result = this.caseActivityGroup(loopNode);
                    if(result == null) result = this.caseExecutableNode(loopNode);
                    if(result == null) result = this.caseActivityNode(loopNode);
                    if(result == null) result = this.caseRedefinableElement(loopNode);
                    if(result == null) result = this.caseActivityContent(loopNode);
                    if(result == null) result = this.caseNamedElement(loopNode);
                    if(result == null) result = this.caseElement(loopNode);
                    if(result == null) result = this.caseEModelElement(loopNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OPAQUE_ACTION:
                {
                    let opaqueAction : uml.OpaqueAction = <uml.OpaqueAction><any>theEObject;
                    let result : T = this.caseOpaqueAction(opaqueAction);
                    if(result == null) result = this.caseAction(opaqueAction);
                    if(result == null) result = this.caseExecutableNode(opaqueAction);
                    if(result == null) result = this.caseActivityNode(opaqueAction);
                    if(result == null) result = this.caseRedefinableElement(opaqueAction);
                    if(result == null) result = this.caseActivityContent(opaqueAction);
                    if(result == null) result = this.caseNamedElement(opaqueAction);
                    if(result == null) result = this.caseElement(opaqueAction);
                    if(result == null) result = this.caseEModelElement(opaqueAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.RAISE_EXCEPTION_ACTION:
                {
                    let raiseExceptionAction : uml.RaiseExceptionAction = <uml.RaiseExceptionAction><any>theEObject;
                    let result : T = this.caseRaiseExceptionAction(raiseExceptionAction);
                    if(result == null) result = this.caseAction(raiseExceptionAction);
                    if(result == null) result = this.caseExecutableNode(raiseExceptionAction);
                    if(result == null) result = this.caseActivityNode(raiseExceptionAction);
                    if(result == null) result = this.caseRedefinableElement(raiseExceptionAction);
                    if(result == null) result = this.caseActivityContent(raiseExceptionAction);
                    if(result == null) result = this.caseNamedElement(raiseExceptionAction);
                    if(result == null) result = this.caseElement(raiseExceptionAction);
                    if(result == null) result = this.caseEModelElement(raiseExceptionAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_EXTENT_ACTION:
                {
                    let readExtentAction : uml.ReadExtentAction = <uml.ReadExtentAction><any>theEObject;
                    let result : T = this.caseReadExtentAction(readExtentAction);
                    if(result == null) result = this.caseAction(readExtentAction);
                    if(result == null) result = this.caseExecutableNode(readExtentAction);
                    if(result == null) result = this.caseActivityNode(readExtentAction);
                    if(result == null) result = this.caseRedefinableElement(readExtentAction);
                    if(result == null) result = this.caseActivityContent(readExtentAction);
                    if(result == null) result = this.caseNamedElement(readExtentAction);
                    if(result == null) result = this.caseElement(readExtentAction);
                    if(result == null) result = this.caseEModelElement(readExtentAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_IS_CLASSIFIED_OBJECT_ACTION:
                {
                    let readIsClassifiedObjectAction : uml.ReadIsClassifiedObjectAction = <uml.ReadIsClassifiedObjectAction><any>theEObject;
                    let result : T = this.caseReadIsClassifiedObjectAction(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseAction(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseExecutableNode(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseActivityNode(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseRedefinableElement(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseActivityContent(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseNamedElement(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseElement(readIsClassifiedObjectAction);
                    if(result == null) result = this.caseEModelElement(readIsClassifiedObjectAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_LINK_ACTION:
                {
                    let readLinkAction : uml.ReadLinkAction = <uml.ReadLinkAction><any>theEObject;
                    let result : T = this.caseReadLinkAction(readLinkAction);
                    if(result == null) result = this.caseLinkAction(readLinkAction);
                    if(result == null) result = this.caseAction(readLinkAction);
                    if(result == null) result = this.caseExecutableNode(readLinkAction);
                    if(result == null) result = this.caseActivityNode(readLinkAction);
                    if(result == null) result = this.caseRedefinableElement(readLinkAction);
                    if(result == null) result = this.caseActivityContent(readLinkAction);
                    if(result == null) result = this.caseNamedElement(readLinkAction);
                    if(result == null) result = this.caseElement(readLinkAction);
                    if(result == null) result = this.caseEModelElement(readLinkAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_LINK_OBJECT_END_ACTION:
                {
                    let readLinkObjectEndAction : uml.ReadLinkObjectEndAction = <uml.ReadLinkObjectEndAction><any>theEObject;
                    let result : T = this.caseReadLinkObjectEndAction(readLinkObjectEndAction);
                    if(result == null) result = this.caseAction(readLinkObjectEndAction);
                    if(result == null) result = this.caseExecutableNode(readLinkObjectEndAction);
                    if(result == null) result = this.caseActivityNode(readLinkObjectEndAction);
                    if(result == null) result = this.caseRedefinableElement(readLinkObjectEndAction);
                    if(result == null) result = this.caseActivityContent(readLinkObjectEndAction);
                    if(result == null) result = this.caseNamedElement(readLinkObjectEndAction);
                    if(result == null) result = this.caseElement(readLinkObjectEndAction);
                    if(result == null) result = this.caseEModelElement(readLinkObjectEndAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION:
                {
                    let readLinkObjectEndQualifierAction : uml.ReadLinkObjectEndQualifierAction = <uml.ReadLinkObjectEndQualifierAction><any>theEObject;
                    let result : T = this.caseReadLinkObjectEndQualifierAction(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseAction(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseExecutableNode(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseActivityNode(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseRedefinableElement(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseActivityContent(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseNamedElement(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseElement(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.caseEModelElement(readLinkObjectEndQualifierAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_SELF_ACTION:
                {
                    let readSelfAction : uml.ReadSelfAction = <uml.ReadSelfAction><any>theEObject;
                    let result : T = this.caseReadSelfAction(readSelfAction);
                    if(result == null) result = this.caseAction(readSelfAction);
                    if(result == null) result = this.caseExecutableNode(readSelfAction);
                    if(result == null) result = this.caseActivityNode(readSelfAction);
                    if(result == null) result = this.caseRedefinableElement(readSelfAction);
                    if(result == null) result = this.caseActivityContent(readSelfAction);
                    if(result == null) result = this.caseNamedElement(readSelfAction);
                    if(result == null) result = this.caseElement(readSelfAction);
                    if(result == null) result = this.caseEModelElement(readSelfAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_STRUCTURAL_FEATURE_ACTION:
                {
                    let readStructuralFeatureAction : uml.ReadStructuralFeatureAction = <uml.ReadStructuralFeatureAction><any>theEObject;
                    let result : T = this.caseReadStructuralFeatureAction(readStructuralFeatureAction);
                    if(result == null) result = this.caseStructuralFeatureAction(readStructuralFeatureAction);
                    if(result == null) result = this.caseAction(readStructuralFeatureAction);
                    if(result == null) result = this.caseExecutableNode(readStructuralFeatureAction);
                    if(result == null) result = this.caseActivityNode(readStructuralFeatureAction);
                    if(result == null) result = this.caseRedefinableElement(readStructuralFeatureAction);
                    if(result == null) result = this.caseActivityContent(readStructuralFeatureAction);
                    if(result == null) result = this.caseNamedElement(readStructuralFeatureAction);
                    if(result == null) result = this.caseElement(readStructuralFeatureAction);
                    if(result == null) result = this.caseEModelElement(readStructuralFeatureAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.READ_VARIABLE_ACTION:
                {
                    let readVariableAction : uml.ReadVariableAction = <uml.ReadVariableAction><any>theEObject;
                    let result : T = this.caseReadVariableAction(readVariableAction);
                    if(result == null) result = this.caseVariableAction(readVariableAction);
                    if(result == null) result = this.caseAction(readVariableAction);
                    if(result == null) result = this.caseExecutableNode(readVariableAction);
                    if(result == null) result = this.caseActivityNode(readVariableAction);
                    if(result == null) result = this.caseRedefinableElement(readVariableAction);
                    if(result == null) result = this.caseActivityContent(readVariableAction);
                    if(result == null) result = this.caseNamedElement(readVariableAction);
                    if(result == null) result = this.caseElement(readVariableAction);
                    if(result == null) result = this.caseEModelElement(readVariableAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.RECLASSIFY_OBJECT_ACTION:
                {
                    let reclassifyObjectAction : uml.ReclassifyObjectAction = <uml.ReclassifyObjectAction><any>theEObject;
                    let result : T = this.caseReclassifyObjectAction(reclassifyObjectAction);
                    if(result == null) result = this.caseAction(reclassifyObjectAction);
                    if(result == null) result = this.caseExecutableNode(reclassifyObjectAction);
                    if(result == null) result = this.caseActivityNode(reclassifyObjectAction);
                    if(result == null) result = this.caseRedefinableElement(reclassifyObjectAction);
                    if(result == null) result = this.caseActivityContent(reclassifyObjectAction);
                    if(result == null) result = this.caseNamedElement(reclassifyObjectAction);
                    if(result == null) result = this.caseElement(reclassifyObjectAction);
                    if(result == null) result = this.caseEModelElement(reclassifyObjectAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REDUCE_ACTION:
                {
                    let reduceAction : uml.ReduceAction = <uml.ReduceAction><any>theEObject;
                    let result : T = this.caseReduceAction(reduceAction);
                    if(result == null) result = this.caseAction(reduceAction);
                    if(result == null) result = this.caseExecutableNode(reduceAction);
                    if(result == null) result = this.caseActivityNode(reduceAction);
                    if(result == null) result = this.caseRedefinableElement(reduceAction);
                    if(result == null) result = this.caseActivityContent(reduceAction);
                    if(result == null) result = this.caseNamedElement(reduceAction);
                    if(result == null) result = this.caseElement(reduceAction);
                    if(result == null) result = this.caseEModelElement(reduceAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REMOVE_STRUCTURAL_FEATURE_VALUE_ACTION:
                {
                    let removeStructuralFeatureValueAction : uml.RemoveStructuralFeatureValueAction = <uml.RemoveStructuralFeatureValueAction><any>theEObject;
                    let result : T = this.caseRemoveStructuralFeatureValueAction(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseWriteStructuralFeatureAction(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseStructuralFeatureAction(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseAction(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseExecutableNode(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseActivityNode(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseRedefinableElement(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseActivityContent(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseNamedElement(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseElement(removeStructuralFeatureValueAction);
                    if(result == null) result = this.caseEModelElement(removeStructuralFeatureValueAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REMOVE_VARIABLE_VALUE_ACTION:
                {
                    let removeVariableValueAction : uml.RemoveVariableValueAction = <uml.RemoveVariableValueAction><any>theEObject;
                    let result : T = this.caseRemoveVariableValueAction(removeVariableValueAction);
                    if(result == null) result = this.caseWriteVariableAction(removeVariableValueAction);
                    if(result == null) result = this.caseVariableAction(removeVariableValueAction);
                    if(result == null) result = this.caseAction(removeVariableValueAction);
                    if(result == null) result = this.caseExecutableNode(removeVariableValueAction);
                    if(result == null) result = this.caseActivityNode(removeVariableValueAction);
                    if(result == null) result = this.caseRedefinableElement(removeVariableValueAction);
                    if(result == null) result = this.caseActivityContent(removeVariableValueAction);
                    if(result == null) result = this.caseNamedElement(removeVariableValueAction);
                    if(result == null) result = this.caseElement(removeVariableValueAction);
                    if(result == null) result = this.caseEModelElement(removeVariableValueAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.REPLY_ACTION:
                {
                    let replyAction : uml.ReplyAction = <uml.ReplyAction><any>theEObject;
                    let result : T = this.caseReplyAction(replyAction);
                    if(result == null) result = this.caseAction(replyAction);
                    if(result == null) result = this.caseExecutableNode(replyAction);
                    if(result == null) result = this.caseActivityNode(replyAction);
                    if(result == null) result = this.caseRedefinableElement(replyAction);
                    if(result == null) result = this.caseActivityContent(replyAction);
                    if(result == null) result = this.caseNamedElement(replyAction);
                    if(result == null) result = this.caseElement(replyAction);
                    if(result == null) result = this.caseEModelElement(replyAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.SEND_OBJECT_ACTION:
                {
                    let sendObjectAction : uml.SendObjectAction = <uml.SendObjectAction><any>theEObject;
                    let result : T = this.caseSendObjectAction(sendObjectAction);
                    if(result == null) result = this.caseInvocationAction(sendObjectAction);
                    if(result == null) result = this.caseAction(sendObjectAction);
                    if(result == null) result = this.caseExecutableNode(sendObjectAction);
                    if(result == null) result = this.caseActivityNode(sendObjectAction);
                    if(result == null) result = this.caseRedefinableElement(sendObjectAction);
                    if(result == null) result = this.caseActivityContent(sendObjectAction);
                    if(result == null) result = this.caseNamedElement(sendObjectAction);
                    if(result == null) result = this.caseElement(sendObjectAction);
                    if(result == null) result = this.caseEModelElement(sendObjectAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.SEND_SIGNAL_ACTION:
                {
                    let sendSignalAction : uml.SendSignalAction = <uml.SendSignalAction><any>theEObject;
                    let result : T = this.caseSendSignalAction(sendSignalAction);
                    if(result == null) result = this.caseInvocationAction(sendSignalAction);
                    if(result == null) result = this.caseAction(sendSignalAction);
                    if(result == null) result = this.caseExecutableNode(sendSignalAction);
                    if(result == null) result = this.caseActivityNode(sendSignalAction);
                    if(result == null) result = this.caseRedefinableElement(sendSignalAction);
                    if(result == null) result = this.caseActivityContent(sendSignalAction);
                    if(result == null) result = this.caseNamedElement(sendSignalAction);
                    if(result == null) result = this.caseElement(sendSignalAction);
                    if(result == null) result = this.caseEModelElement(sendSignalAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.SEQUENCE_NODE:
                {
                    let sequenceNode : uml.SequenceNode = <uml.SequenceNode><any>theEObject;
                    let result : T = this.caseSequenceNode(sequenceNode);
                    if(result == null) result = this.caseStructuredActivityNode(sequenceNode);
                    if(result == null) result = this.caseAction(sequenceNode);
                    if(result == null) result = this.caseNamespace(sequenceNode);
                    if(result == null) result = this.caseActivityGroup(sequenceNode);
                    if(result == null) result = this.caseExecutableNode(sequenceNode);
                    if(result == null) result = this.caseActivityNode(sequenceNode);
                    if(result == null) result = this.caseRedefinableElement(sequenceNode);
                    if(result == null) result = this.caseActivityContent(sequenceNode);
                    if(result == null) result = this.caseNamedElement(sequenceNode);
                    if(result == null) result = this.caseElement(sequenceNode);
                    if(result == null) result = this.caseEModelElement(sequenceNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.START_CLASSIFIER_BEHAVIOR_ACTION:
                {
                    let startClassifierBehaviorAction : uml.StartClassifierBehaviorAction = <uml.StartClassifierBehaviorAction><any>theEObject;
                    let result : T = this.caseStartClassifierBehaviorAction(startClassifierBehaviorAction);
                    if(result == null) result = this.caseAction(startClassifierBehaviorAction);
                    if(result == null) result = this.caseExecutableNode(startClassifierBehaviorAction);
                    if(result == null) result = this.caseActivityNode(startClassifierBehaviorAction);
                    if(result == null) result = this.caseRedefinableElement(startClassifierBehaviorAction);
                    if(result == null) result = this.caseActivityContent(startClassifierBehaviorAction);
                    if(result == null) result = this.caseNamedElement(startClassifierBehaviorAction);
                    if(result == null) result = this.caseElement(startClassifierBehaviorAction);
                    if(result == null) result = this.caseEModelElement(startClassifierBehaviorAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.START_OBJECT_BEHAVIOR_ACTION:
                {
                    let startObjectBehaviorAction : uml.StartObjectBehaviorAction = <uml.StartObjectBehaviorAction><any>theEObject;
                    let result : T = this.caseStartObjectBehaviorAction(startObjectBehaviorAction);
                    if(result == null) result = this.caseCallAction(startObjectBehaviorAction);
                    if(result == null) result = this.caseInvocationAction(startObjectBehaviorAction);
                    if(result == null) result = this.caseAction(startObjectBehaviorAction);
                    if(result == null) result = this.caseExecutableNode(startObjectBehaviorAction);
                    if(result == null) result = this.caseActivityNode(startObjectBehaviorAction);
                    if(result == null) result = this.caseRedefinableElement(startObjectBehaviorAction);
                    if(result == null) result = this.caseActivityContent(startObjectBehaviorAction);
                    if(result == null) result = this.caseNamedElement(startObjectBehaviorAction);
                    if(result == null) result = this.caseElement(startObjectBehaviorAction);
                    if(result == null) result = this.caseEModelElement(startObjectBehaviorAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TEST_IDENTITY_ACTION:
                {
                    let testIdentityAction : uml.TestIdentityAction = <uml.TestIdentityAction><any>theEObject;
                    let result : T = this.caseTestIdentityAction(testIdentityAction);
                    if(result == null) result = this.caseAction(testIdentityAction);
                    if(result == null) result = this.caseExecutableNode(testIdentityAction);
                    if(result == null) result = this.caseActivityNode(testIdentityAction);
                    if(result == null) result = this.caseRedefinableElement(testIdentityAction);
                    if(result == null) result = this.caseActivityContent(testIdentityAction);
                    if(result == null) result = this.caseNamedElement(testIdentityAction);
                    if(result == null) result = this.caseElement(testIdentityAction);
                    if(result == null) result = this.caseEModelElement(testIdentityAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.UNMARSHALL_ACTION:
                {
                    let unmarshallAction : uml.UnmarshallAction = <uml.UnmarshallAction><any>theEObject;
                    let result : T = this.caseUnmarshallAction(unmarshallAction);
                    if(result == null) result = this.caseAction(unmarshallAction);
                    if(result == null) result = this.caseExecutableNode(unmarshallAction);
                    if(result == null) result = this.caseActivityNode(unmarshallAction);
                    if(result == null) result = this.caseRedefinableElement(unmarshallAction);
                    if(result == null) result = this.caseActivityContent(unmarshallAction);
                    if(result == null) result = this.caseNamedElement(unmarshallAction);
                    if(result == null) result = this.caseElement(unmarshallAction);
                    if(result == null) result = this.caseEModelElement(unmarshallAction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.VALUE_PIN:
                {
                    let valuePin : uml.ValuePin = <uml.ValuePin><any>theEObject;
                    let result : T = this.caseValuePin(valuePin);
                    if(result == null) result = this.caseInputPin(valuePin);
                    if(result == null) result = this.casePin(valuePin);
                    if(result == null) result = this.caseObjectNode(valuePin);
                    if(result == null) result = this.caseMultiplicityElement(valuePin);
                    if(result == null) result = this.caseActivityNode(valuePin);
                    if(result == null) result = this.caseTypedElement(valuePin);
                    if(result == null) result = this.caseRedefinableElement(valuePin);
                    if(result == null) result = this.caseActivityContent(valuePin);
                    if(result == null) result = this.caseNamedElement(valuePin);
                    if(result == null) result = this.caseElement(valuePin);
                    if(result == null) result = this.caseEModelElement(valuePin);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTIVITY_FINAL_NODE:
                {
                    let activityFinalNode : uml.ActivityFinalNode = <uml.ActivityFinalNode><any>theEObject;
                    let result : T = this.caseActivityFinalNode(activityFinalNode);
                    if(result == null) result = this.caseFinalNode(activityFinalNode);
                    if(result == null) result = this.caseControlNode(activityFinalNode);
                    if(result == null) result = this.caseActivityNode(activityFinalNode);
                    if(result == null) result = this.caseRedefinableElement(activityFinalNode);
                    if(result == null) result = this.caseActivityContent(activityFinalNode);
                    if(result == null) result = this.caseNamedElement(activityFinalNode);
                    if(result == null) result = this.caseElement(activityFinalNode);
                    if(result == null) result = this.caseEModelElement(activityFinalNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.FINAL_NODE:
                {
                    let finalNode : uml.FinalNode = <uml.FinalNode><any>theEObject;
                    let result : T = this.caseFinalNode(finalNode);
                    if(result == null) result = this.caseControlNode(finalNode);
                    if(result == null) result = this.caseActivityNode(finalNode);
                    if(result == null) result = this.caseRedefinableElement(finalNode);
                    if(result == null) result = this.caseActivityContent(finalNode);
                    if(result == null) result = this.caseNamedElement(finalNode);
                    if(result == null) result = this.caseElement(finalNode);
                    if(result == null) result = this.caseEModelElement(finalNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONTROL_NODE:
                {
                    let controlNode : uml.ControlNode = <uml.ControlNode><any>theEObject;
                    let result : T = this.caseControlNode(controlNode);
                    if(result == null) result = this.caseActivityNode(controlNode);
                    if(result == null) result = this.caseRedefinableElement(controlNode);
                    if(result == null) result = this.caseActivityContent(controlNode);
                    if(result == null) result = this.caseNamedElement(controlNode);
                    if(result == null) result = this.caseElement(controlNode);
                    if(result == null) result = this.caseEModelElement(controlNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTIVITY_PARAMETER_NODE:
                {
                    let activityParameterNode : uml.ActivityParameterNode = <uml.ActivityParameterNode><any>theEObject;
                    let result : T = this.caseActivityParameterNode(activityParameterNode);
                    if(result == null) result = this.caseObjectNode(activityParameterNode);
                    if(result == null) result = this.caseActivityNode(activityParameterNode);
                    if(result == null) result = this.caseTypedElement(activityParameterNode);
                    if(result == null) result = this.caseRedefinableElement(activityParameterNode);
                    if(result == null) result = this.caseActivityContent(activityParameterNode);
                    if(result == null) result = this.caseNamedElement(activityParameterNode);
                    if(result == null) result = this.caseElement(activityParameterNode);
                    if(result == null) result = this.caseEModelElement(activityParameterNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CENTRAL_BUFFER_NODE:
                {
                    let centralBufferNode : uml.CentralBufferNode = <uml.CentralBufferNode><any>theEObject;
                    let result : T = this.caseCentralBufferNode(centralBufferNode);
                    if(result == null) result = this.caseObjectNode(centralBufferNode);
                    if(result == null) result = this.caseActivityNode(centralBufferNode);
                    if(result == null) result = this.caseTypedElement(centralBufferNode);
                    if(result == null) result = this.caseRedefinableElement(centralBufferNode);
                    if(result == null) result = this.caseActivityContent(centralBufferNode);
                    if(result == null) result = this.caseNamedElement(centralBufferNode);
                    if(result == null) result = this.caseElement(centralBufferNode);
                    if(result == null) result = this.caseEModelElement(centralBufferNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONTROL_FLOW:
                {
                    let controlFlow : uml.ControlFlow = <uml.ControlFlow><any>theEObject;
                    let result : T = this.caseControlFlow(controlFlow);
                    if(result == null) result = this.caseActivityEdge(controlFlow);
                    if(result == null) result = this.caseRedefinableElement(controlFlow);
                    if(result == null) result = this.caseNamedElement(controlFlow);
                    if(result == null) result = this.caseElement(controlFlow);
                    if(result == null) result = this.caseEModelElement(controlFlow);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DATA_STORE_NODE:
                {
                    let dataStoreNode : uml.DataStoreNode = <uml.DataStoreNode><any>theEObject;
                    let result : T = this.caseDataStoreNode(dataStoreNode);
                    if(result == null) result = this.caseCentralBufferNode(dataStoreNode);
                    if(result == null) result = this.caseObjectNode(dataStoreNode);
                    if(result == null) result = this.caseActivityNode(dataStoreNode);
                    if(result == null) result = this.caseTypedElement(dataStoreNode);
                    if(result == null) result = this.caseRedefinableElement(dataStoreNode);
                    if(result == null) result = this.caseActivityContent(dataStoreNode);
                    if(result == null) result = this.caseNamedElement(dataStoreNode);
                    if(result == null) result = this.caseElement(dataStoreNode);
                    if(result == null) result = this.caseEModelElement(dataStoreNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DECISION_NODE:
                {
                    let decisionNode : uml.DecisionNode = <uml.DecisionNode><any>theEObject;
                    let result : T = this.caseDecisionNode(decisionNode);
                    if(result == null) result = this.caseControlNode(decisionNode);
                    if(result == null) result = this.caseActivityNode(decisionNode);
                    if(result == null) result = this.caseRedefinableElement(decisionNode);
                    if(result == null) result = this.caseActivityContent(decisionNode);
                    if(result == null) result = this.caseNamedElement(decisionNode);
                    if(result == null) result = this.caseElement(decisionNode);
                    if(result == null) result = this.caseEModelElement(decisionNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OBJECT_FLOW:
                {
                    let objectFlow : uml.ObjectFlow = <uml.ObjectFlow><any>theEObject;
                    let result : T = this.caseObjectFlow(objectFlow);
                    if(result == null) result = this.caseActivityEdge(objectFlow);
                    if(result == null) result = this.caseRedefinableElement(objectFlow);
                    if(result == null) result = this.caseNamedElement(objectFlow);
                    if(result == null) result = this.caseElement(objectFlow);
                    if(result == null) result = this.caseEModelElement(objectFlow);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.FLOW_FINAL_NODE:
                {
                    let flowFinalNode : uml.FlowFinalNode = <uml.FlowFinalNode><any>theEObject;
                    let result : T = this.caseFlowFinalNode(flowFinalNode);
                    if(result == null) result = this.caseFinalNode(flowFinalNode);
                    if(result == null) result = this.caseControlNode(flowFinalNode);
                    if(result == null) result = this.caseActivityNode(flowFinalNode);
                    if(result == null) result = this.caseRedefinableElement(flowFinalNode);
                    if(result == null) result = this.caseActivityContent(flowFinalNode);
                    if(result == null) result = this.caseNamedElement(flowFinalNode);
                    if(result == null) result = this.caseElement(flowFinalNode);
                    if(result == null) result = this.caseEModelElement(flowFinalNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.FORK_NODE:
                {
                    let forkNode : uml.ForkNode = <uml.ForkNode><any>theEObject;
                    let result : T = this.caseForkNode(forkNode);
                    if(result == null) result = this.caseControlNode(forkNode);
                    if(result == null) result = this.caseActivityNode(forkNode);
                    if(result == null) result = this.caseRedefinableElement(forkNode);
                    if(result == null) result = this.caseActivityContent(forkNode);
                    if(result == null) result = this.caseNamedElement(forkNode);
                    if(result == null) result = this.caseElement(forkNode);
                    if(result == null) result = this.caseEModelElement(forkNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INITIAL_NODE:
                {
                    let initialNode : uml.InitialNode = <uml.InitialNode><any>theEObject;
                    let result : T = this.caseInitialNode(initialNode);
                    if(result == null) result = this.caseControlNode(initialNode);
                    if(result == null) result = this.caseActivityNode(initialNode);
                    if(result == null) result = this.caseRedefinableElement(initialNode);
                    if(result == null) result = this.caseActivityContent(initialNode);
                    if(result == null) result = this.caseNamedElement(initialNode);
                    if(result == null) result = this.caseElement(initialNode);
                    if(result == null) result = this.caseEModelElement(initialNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.JOIN_NODE:
                {
                    let joinNode : uml.JoinNode = <uml.JoinNode><any>theEObject;
                    let result : T = this.caseJoinNode(joinNode);
                    if(result == null) result = this.caseControlNode(joinNode);
                    if(result == null) result = this.caseActivityNode(joinNode);
                    if(result == null) result = this.caseRedefinableElement(joinNode);
                    if(result == null) result = this.caseActivityContent(joinNode);
                    if(result == null) result = this.caseNamedElement(joinNode);
                    if(result == null) result = this.caseElement(joinNode);
                    if(result == null) result = this.caseEModelElement(joinNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MERGE_NODE:
                {
                    let mergeNode : uml.MergeNode = <uml.MergeNode><any>theEObject;
                    let result : T = this.caseMergeNode(mergeNode);
                    if(result == null) result = this.caseControlNode(mergeNode);
                    if(result == null) result = this.caseActivityNode(mergeNode);
                    if(result == null) result = this.caseRedefinableElement(mergeNode);
                    if(result == null) result = this.caseActivityContent(mergeNode);
                    if(result == null) result = this.caseNamedElement(mergeNode);
                    if(result == null) result = this.caseElement(mergeNode);
                    if(result == null) result = this.caseEModelElement(mergeNode);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INSTANCE_VALUE:
                {
                    let instanceValue : uml.InstanceValue = <uml.InstanceValue><any>theEObject;
                    let result : T = this.caseInstanceValue(instanceValue);
                    if(result == null) result = this.caseValueSpecification(instanceValue);
                    if(result == null) result = this.casePackageableElement(instanceValue);
                    if(result == null) result = this.caseTypedElement(instanceValue);
                    if(result == null) result = this.caseNamedElement(instanceValue);
                    if(result == null) result = this.caseParameterableElement(instanceValue);
                    if(result == null) result = this.caseElement(instanceValue);
                    if(result == null) result = this.caseEModelElement(instanceValue);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ANY_RECEIVE_EVENT:
                {
                    let anyReceiveEvent : uml.AnyReceiveEvent = <uml.AnyReceiveEvent><any>theEObject;
                    let result : T = this.caseAnyReceiveEvent(anyReceiveEvent);
                    if(result == null) result = this.caseMessageEvent(anyReceiveEvent);
                    if(result == null) result = this.caseEvent(anyReceiveEvent);
                    if(result == null) result = this.casePackageableElement(anyReceiveEvent);
                    if(result == null) result = this.caseNamedElement(anyReceiveEvent);
                    if(result == null) result = this.caseParameterableElement(anyReceiveEvent);
                    if(result == null) result = this.caseElement(anyReceiveEvent);
                    if(result == null) result = this.caseEModelElement(anyReceiveEvent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MESSAGE_EVENT:
                {
                    let messageEvent : uml.MessageEvent = <uml.MessageEvent><any>theEObject;
                    let result : T = this.caseMessageEvent(messageEvent);
                    if(result == null) result = this.caseEvent(messageEvent);
                    if(result == null) result = this.casePackageableElement(messageEvent);
                    if(result == null) result = this.caseNamedElement(messageEvent);
                    if(result == null) result = this.caseParameterableElement(messageEvent);
                    if(result == null) result = this.caseElement(messageEvent);
                    if(result == null) result = this.caseEModelElement(messageEvent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CALL_EVENT:
                {
                    let callEvent : uml.CallEvent = <uml.CallEvent><any>theEObject;
                    let result : T = this.caseCallEvent(callEvent);
                    if(result == null) result = this.caseMessageEvent(callEvent);
                    if(result == null) result = this.caseEvent(callEvent);
                    if(result == null) result = this.casePackageableElement(callEvent);
                    if(result == null) result = this.caseNamedElement(callEvent);
                    if(result == null) result = this.caseParameterableElement(callEvent);
                    if(result == null) result = this.caseElement(callEvent);
                    if(result == null) result = this.caseEModelElement(callEvent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CHANGE_EVENT:
                {
                    let changeEvent : uml.ChangeEvent = <uml.ChangeEvent><any>theEObject;
                    let result : T = this.caseChangeEvent(changeEvent);
                    if(result == null) result = this.caseEvent(changeEvent);
                    if(result == null) result = this.casePackageableElement(changeEvent);
                    if(result == null) result = this.caseNamedElement(changeEvent);
                    if(result == null) result = this.caseParameterableElement(changeEvent);
                    if(result == null) result = this.caseElement(changeEvent);
                    if(result == null) result = this.caseEModelElement(changeEvent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.FUNCTION_BEHAVIOR:
                {
                    let functionBehavior : uml.FunctionBehavior = <uml.FunctionBehavior><any>theEObject;
                    let result : T = this.caseFunctionBehavior(functionBehavior);
                    if(result == null) result = this.caseOpaqueBehavior(functionBehavior);
                    if(result == null) result = this.caseBehavior(functionBehavior);
                    if(result == null) result = this.caseClass(functionBehavior);
                    if(result == null) result = this.caseEncapsulatedClassifier(functionBehavior);
                    if(result == null) result = this.caseBehavioredClassifier(functionBehavior);
                    if(result == null) result = this.caseStructuredClassifier(functionBehavior);
                    if(result == null) result = this.caseClassifier(functionBehavior);
                    if(result == null) result = this.caseNamespace(functionBehavior);
                    if(result == null) result = this.caseRedefinableElement(functionBehavior);
                    if(result == null) result = this.caseType(functionBehavior);
                    if(result == null) result = this.caseTemplateableElement(functionBehavior);
                    if(result == null) result = this.casePackageableElement(functionBehavior);
                    if(result == null) result = this.caseNamedElement(functionBehavior);
                    if(result == null) result = this.caseParameterableElement(functionBehavior);
                    if(result == null) result = this.caseElement(functionBehavior);
                    if(result == null) result = this.caseEModelElement(functionBehavior);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OPAQUE_BEHAVIOR:
                {
                    let opaqueBehavior : uml.OpaqueBehavior = <uml.OpaqueBehavior><any>theEObject;
                    let result : T = this.caseOpaqueBehavior(opaqueBehavior);
                    if(result == null) result = this.caseBehavior(opaqueBehavior);
                    if(result == null) result = this.caseClass(opaqueBehavior);
                    if(result == null) result = this.caseEncapsulatedClassifier(opaqueBehavior);
                    if(result == null) result = this.caseBehavioredClassifier(opaqueBehavior);
                    if(result == null) result = this.caseStructuredClassifier(opaqueBehavior);
                    if(result == null) result = this.caseClassifier(opaqueBehavior);
                    if(result == null) result = this.caseNamespace(opaqueBehavior);
                    if(result == null) result = this.caseRedefinableElement(opaqueBehavior);
                    if(result == null) result = this.caseType(opaqueBehavior);
                    if(result == null) result = this.caseTemplateableElement(opaqueBehavior);
                    if(result == null) result = this.casePackageableElement(opaqueBehavior);
                    if(result == null) result = this.caseNamedElement(opaqueBehavior);
                    if(result == null) result = this.caseParameterableElement(opaqueBehavior);
                    if(result == null) result = this.caseElement(opaqueBehavior);
                    if(result == null) result = this.caseEModelElement(opaqueBehavior);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.SIGNAL_EVENT:
                {
                    let signalEvent : uml.SignalEvent = <uml.SignalEvent><any>theEObject;
                    let result : T = this.caseSignalEvent(signalEvent);
                    if(result == null) result = this.caseMessageEvent(signalEvent);
                    if(result == null) result = this.caseEvent(signalEvent);
                    if(result == null) result = this.casePackageableElement(signalEvent);
                    if(result == null) result = this.caseNamedElement(signalEvent);
                    if(result == null) result = this.caseParameterableElement(signalEvent);
                    if(result == null) result = this.caseElement(signalEvent);
                    if(result == null) result = this.caseEModelElement(signalEvent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TIME_EVENT:
                {
                    let timeEvent : uml.TimeEvent = <uml.TimeEvent><any>theEObject;
                    let result : T = this.caseTimeEvent(timeEvent);
                    if(result == null) result = this.caseEvent(timeEvent);
                    if(result == null) result = this.casePackageableElement(timeEvent);
                    if(result == null) result = this.caseNamedElement(timeEvent);
                    if(result == null) result = this.caseParameterableElement(timeEvent);
                    if(result == null) result = this.caseElement(timeEvent);
                    if(result == null) result = this.caseEModelElement(timeEvent);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TIME_EXPRESSION:
                {
                    let timeExpression : uml.TimeExpression = <uml.TimeExpression><any>theEObject;
                    let result : T = this.caseTimeExpression(timeExpression);
                    if(result == null) result = this.caseValueSpecification(timeExpression);
                    if(result == null) result = this.casePackageableElement(timeExpression);
                    if(result == null) result = this.caseTypedElement(timeExpression);
                    if(result == null) result = this.caseNamedElement(timeExpression);
                    if(result == null) result = this.caseParameterableElement(timeExpression);
                    if(result == null) result = this.caseElement(timeExpression);
                    if(result == null) result = this.caseEModelElement(timeExpression);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OBSERVATION:
                {
                    let observation : uml.Observation = <uml.Observation><any>theEObject;
                    let result : T = this.caseObservation(observation);
                    if(result == null) result = this.casePackageableElement(observation);
                    if(result == null) result = this.caseNamedElement(observation);
                    if(result == null) result = this.caseParameterableElement(observation);
                    if(result == null) result = this.caseElement(observation);
                    if(result == null) result = this.caseEModelElement(observation);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.COMMUNICATION_PATH:
                {
                    let communicationPath : uml.CommunicationPath = <uml.CommunicationPath><any>theEObject;
                    let result : T = this.caseCommunicationPath(communicationPath);
                    if(result == null) result = this.caseAssociation(communicationPath);
                    if(result == null) result = this.caseClassifier(communicationPath);
                    if(result == null) result = this.caseRelationship(communicationPath);
                    if(result == null) result = this.caseNamespace(communicationPath);
                    if(result == null) result = this.caseRedefinableElement(communicationPath);
                    if(result == null) result = this.caseType(communicationPath);
                    if(result == null) result = this.caseTemplateableElement(communicationPath);
                    if(result == null) result = this.casePackageableElement(communicationPath);
                    if(result == null) result = this.caseNamedElement(communicationPath);
                    if(result == null) result = this.caseParameterableElement(communicationPath);
                    if(result == null) result = this.caseElement(communicationPath);
                    if(result == null) result = this.caseEModelElement(communicationPath);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DEVICE:
                {
                    let device : uml.Device = <uml.Device><any>theEObject;
                    let result : T = this.caseDevice(device);
                    if(result == null) result = this.caseNode(device);
                    if(result == null) result = this.caseClass(device);
                    if(result == null) result = this.caseDeploymentTarget(device);
                    if(result == null) result = this.caseEncapsulatedClassifier(device);
                    if(result == null) result = this.caseBehavioredClassifier(device);
                    if(result == null) result = this.caseStructuredClassifier(device);
                    if(result == null) result = this.caseClassifier(device);
                    if(result == null) result = this.caseNamespace(device);
                    if(result == null) result = this.caseRedefinableElement(device);
                    if(result == null) result = this.caseType(device);
                    if(result == null) result = this.caseTemplateableElement(device);
                    if(result == null) result = this.casePackageableElement(device);
                    if(result == null) result = this.caseNamedElement(device);
                    if(result == null) result = this.caseParameterableElement(device);
                    if(result == null) result = this.caseElement(device);
                    if(result == null) result = this.caseEModelElement(device);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.NODE:
                {
                    let node : uml.Node = <uml.Node><any>theEObject;
                    let result : T = this.caseNode(node);
                    if(result == null) result = this.caseClass(node);
                    if(result == null) result = this.caseDeploymentTarget(node);
                    if(result == null) result = this.caseEncapsulatedClassifier(node);
                    if(result == null) result = this.caseBehavioredClassifier(node);
                    if(result == null) result = this.caseStructuredClassifier(node);
                    if(result == null) result = this.caseClassifier(node);
                    if(result == null) result = this.caseNamespace(node);
                    if(result == null) result = this.caseRedefinableElement(node);
                    if(result == null) result = this.caseType(node);
                    if(result == null) result = this.caseTemplateableElement(node);
                    if(result == null) result = this.casePackageableElement(node);
                    if(result == null) result = this.caseNamedElement(node);
                    if(result == null) result = this.caseParameterableElement(node);
                    if(result == null) result = this.caseElement(node);
                    if(result == null) result = this.caseEModelElement(node);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXECUTION_ENVIRONMENT:
                {
                    let executionEnvironment : uml.ExecutionEnvironment = <uml.ExecutionEnvironment><any>theEObject;
                    let result : T = this.caseExecutionEnvironment(executionEnvironment);
                    if(result == null) result = this.caseNode(executionEnvironment);
                    if(result == null) result = this.caseClass(executionEnvironment);
                    if(result == null) result = this.caseDeploymentTarget(executionEnvironment);
                    if(result == null) result = this.caseEncapsulatedClassifier(executionEnvironment);
                    if(result == null) result = this.caseBehavioredClassifier(executionEnvironment);
                    if(result == null) result = this.caseStructuredClassifier(executionEnvironment);
                    if(result == null) result = this.caseClassifier(executionEnvironment);
                    if(result == null) result = this.caseNamespace(executionEnvironment);
                    if(result == null) result = this.caseRedefinableElement(executionEnvironment);
                    if(result == null) result = this.caseType(executionEnvironment);
                    if(result == null) result = this.caseTemplateableElement(executionEnvironment);
                    if(result == null) result = this.casePackageableElement(executionEnvironment);
                    if(result == null) result = this.caseNamedElement(executionEnvironment);
                    if(result == null) result = this.caseParameterableElement(executionEnvironment);
                    if(result == null) result = this.caseElement(executionEnvironment);
                    if(result == null) result = this.caseEModelElement(executionEnvironment);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INFORMATION_FLOW:
                {
                    let informationFlow : uml.InformationFlow = <uml.InformationFlow><any>theEObject;
                    let result : T = this.caseInformationFlow(informationFlow);
                    if(result == null) result = this.casePackageableElement(informationFlow);
                    if(result == null) result = this.caseDirectedRelationship(informationFlow);
                    if(result == null) result = this.caseNamedElement(informationFlow);
                    if(result == null) result = this.caseParameterableElement(informationFlow);
                    if(result == null) result = this.caseRelationship(informationFlow);
                    if(result == null) result = this.caseElement(informationFlow);
                    if(result == null) result = this.caseEModelElement(informationFlow);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MESSAGE:
                {
                    let message : uml.Message = <uml.Message><any>theEObject;
                    let result : T = this.caseMessage(message);
                    if(result == null) result = this.caseNamedElement(message);
                    if(result == null) result = this.caseElement(message);
                    if(result == null) result = this.caseEModelElement(message);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERACTION:
                {
                    let interaction : uml.Interaction = <uml.Interaction><any>theEObject;
                    let result : T = this.caseInteraction(interaction);
                    if(result == null) result = this.caseBehavior(interaction);
                    if(result == null) result = this.caseInteractionFragment(interaction);
                    if(result == null) result = this.caseClass(interaction);
                    if(result == null) result = this.caseEncapsulatedClassifier(interaction);
                    if(result == null) result = this.caseBehavioredClassifier(interaction);
                    if(result == null) result = this.caseStructuredClassifier(interaction);
                    if(result == null) result = this.caseClassifier(interaction);
                    if(result == null) result = this.caseNamespace(interaction);
                    if(result == null) result = this.caseRedefinableElement(interaction);
                    if(result == null) result = this.caseType(interaction);
                    if(result == null) result = this.caseTemplateableElement(interaction);
                    if(result == null) result = this.casePackageableElement(interaction);
                    if(result == null) result = this.caseNamedElement(interaction);
                    if(result == null) result = this.caseParameterableElement(interaction);
                    if(result == null) result = this.caseElement(interaction);
                    if(result == null) result = this.caseEModelElement(interaction);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERACTION_FRAGMENT:
                {
                    let interactionFragment : uml.InteractionFragment = <uml.InteractionFragment><any>theEObject;
                    let result : T = this.caseInteractionFragment(interactionFragment);
                    if(result == null) result = this.caseNamedElement(interactionFragment);
                    if(result == null) result = this.caseElement(interactionFragment);
                    if(result == null) result = this.caseEModelElement(interactionFragment);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LIFELINE:
                {
                    let lifeline : uml.Lifeline = <uml.Lifeline><any>theEObject;
                    let result : T = this.caseLifeline(lifeline);
                    if(result == null) result = this.caseNamedElement(lifeline);
                    if(result == null) result = this.caseElement(lifeline);
                    if(result == null) result = this.caseEModelElement(lifeline);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PART_DECOMPOSITION:
                {
                    let partDecomposition : uml.PartDecomposition = <uml.PartDecomposition><any>theEObject;
                    let result : T = this.casePartDecomposition(partDecomposition);
                    if(result == null) result = this.caseInteractionUse(partDecomposition);
                    if(result == null) result = this.caseInteractionFragment(partDecomposition);
                    if(result == null) result = this.caseNamedElement(partDecomposition);
                    if(result == null) result = this.caseElement(partDecomposition);
                    if(result == null) result = this.caseEModelElement(partDecomposition);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERACTION_USE:
                {
                    let interactionUse : uml.InteractionUse = <uml.InteractionUse><any>theEObject;
                    let result : T = this.caseInteractionUse(interactionUse);
                    if(result == null) result = this.caseInteractionFragment(interactionUse);
                    if(result == null) result = this.caseNamedElement(interactionUse);
                    if(result == null) result = this.caseElement(interactionUse);
                    if(result == null) result = this.caseEModelElement(interactionUse);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.GATE:
                {
                    let gate : uml.Gate = <uml.Gate><any>theEObject;
                    let result : T = this.caseGate(gate);
                    if(result == null) result = this.caseMessageEnd(gate);
                    if(result == null) result = this.caseNamedElement(gate);
                    if(result == null) result = this.caseElement(gate);
                    if(result == null) result = this.caseEModelElement(gate);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MESSAGE_END:
                {
                    let messageEnd : uml.MessageEnd = <uml.MessageEnd><any>theEObject;
                    let result : T = this.caseMessageEnd(messageEnd);
                    if(result == null) result = this.caseNamedElement(messageEnd);
                    if(result == null) result = this.caseElement(messageEnd);
                    if(result == null) result = this.caseEModelElement(messageEnd);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERACTION_OPERAND:
                {
                    let interactionOperand : uml.InteractionOperand = <uml.InteractionOperand><any>theEObject;
                    let result : T = this.caseInteractionOperand(interactionOperand);
                    if(result == null) result = this.caseNamespace(interactionOperand);
                    if(result == null) result = this.caseInteractionFragment(interactionOperand);
                    if(result == null) result = this.caseNamedElement(interactionOperand);
                    if(result == null) result = this.caseElement(interactionOperand);
                    if(result == null) result = this.caseEModelElement(interactionOperand);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERACTION_CONSTRAINT:
                {
                    let interactionConstraint : uml.InteractionConstraint = <uml.InteractionConstraint><any>theEObject;
                    let result : T = this.caseInteractionConstraint(interactionConstraint);
                    if(result == null) result = this.caseConstraint(interactionConstraint);
                    if(result == null) result = this.casePackageableElement(interactionConstraint);
                    if(result == null) result = this.caseNamedElement(interactionConstraint);
                    if(result == null) result = this.caseParameterableElement(interactionConstraint);
                    if(result == null) result = this.caseElement(interactionConstraint);
                    if(result == null) result = this.caseEModelElement(interactionConstraint);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.GENERAL_ORDERING:
                {
                    let generalOrdering : uml.GeneralOrdering = <uml.GeneralOrdering><any>theEObject;
                    let result : T = this.caseGeneralOrdering(generalOrdering);
                    if(result == null) result = this.caseNamedElement(generalOrdering);
                    if(result == null) result = this.caseElement(generalOrdering);
                    if(result == null) result = this.caseEModelElement(generalOrdering);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.OCCURRENCE_SPECIFICATION:
                {
                    let occurrenceSpecification : uml.OccurrenceSpecification = <uml.OccurrenceSpecification><any>theEObject;
                    let result : T = this.caseOccurrenceSpecification(occurrenceSpecification);
                    if(result == null) result = this.caseInteractionFragment(occurrenceSpecification);
                    if(result == null) result = this.caseNamedElement(occurrenceSpecification);
                    if(result == null) result = this.caseElement(occurrenceSpecification);
                    if(result == null) result = this.caseEModelElement(occurrenceSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INFORMATION_ITEM:
                {
                    let informationItem : uml.InformationItem = <uml.InformationItem><any>theEObject;
                    let result : T = this.caseInformationItem(informationItem);
                    if(result == null) result = this.caseClassifier(informationItem);
                    if(result == null) result = this.caseNamespace(informationItem);
                    if(result == null) result = this.caseRedefinableElement(informationItem);
                    if(result == null) result = this.caseType(informationItem);
                    if(result == null) result = this.caseTemplateableElement(informationItem);
                    if(result == null) result = this.casePackageableElement(informationItem);
                    if(result == null) result = this.caseNamedElement(informationItem);
                    if(result == null) result = this.caseParameterableElement(informationItem);
                    if(result == null) result = this.caseElement(informationItem);
                    if(result == null) result = this.caseEModelElement(informationItem);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTION_EXECUTION_SPECIFICATION:
                {
                    let actionExecutionSpecification : uml.ActionExecutionSpecification = <uml.ActionExecutionSpecification><any>theEObject;
                    let result : T = this.caseActionExecutionSpecification(actionExecutionSpecification);
                    if(result == null) result = this.caseExecutionSpecification(actionExecutionSpecification);
                    if(result == null) result = this.caseInteractionFragment(actionExecutionSpecification);
                    if(result == null) result = this.caseNamedElement(actionExecutionSpecification);
                    if(result == null) result = this.caseElement(actionExecutionSpecification);
                    if(result == null) result = this.caseEModelElement(actionExecutionSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXECUTION_SPECIFICATION:
                {
                    let executionSpecification : uml.ExecutionSpecification = <uml.ExecutionSpecification><any>theEObject;
                    let result : T = this.caseExecutionSpecification(executionSpecification);
                    if(result == null) result = this.caseInteractionFragment(executionSpecification);
                    if(result == null) result = this.caseNamedElement(executionSpecification);
                    if(result == null) result = this.caseElement(executionSpecification);
                    if(result == null) result = this.caseEModelElement(executionSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.BEHAVIOR_EXECUTION_SPECIFICATION:
                {
                    let behaviorExecutionSpecification : uml.BehaviorExecutionSpecification = <uml.BehaviorExecutionSpecification><any>theEObject;
                    let result : T = this.caseBehaviorExecutionSpecification(behaviorExecutionSpecification);
                    if(result == null) result = this.caseExecutionSpecification(behaviorExecutionSpecification);
                    if(result == null) result = this.caseInteractionFragment(behaviorExecutionSpecification);
                    if(result == null) result = this.caseNamedElement(behaviorExecutionSpecification);
                    if(result == null) result = this.caseElement(behaviorExecutionSpecification);
                    if(result == null) result = this.caseEModelElement(behaviorExecutionSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.COMBINED_FRAGMENT:
                {
                    let combinedFragment : uml.CombinedFragment = <uml.CombinedFragment><any>theEObject;
                    let result : T = this.caseCombinedFragment(combinedFragment);
                    if(result == null) result = this.caseInteractionFragment(combinedFragment);
                    if(result == null) result = this.caseNamedElement(combinedFragment);
                    if(result == null) result = this.caseElement(combinedFragment);
                    if(result == null) result = this.caseEModelElement(combinedFragment);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONSIDER_IGNORE_FRAGMENT:
                {
                    let considerIgnoreFragment : uml.ConsiderIgnoreFragment = <uml.ConsiderIgnoreFragment><any>theEObject;
                    let result : T = this.caseConsiderIgnoreFragment(considerIgnoreFragment);
                    if(result == null) result = this.caseCombinedFragment(considerIgnoreFragment);
                    if(result == null) result = this.caseInteractionFragment(considerIgnoreFragment);
                    if(result == null) result = this.caseNamedElement(considerIgnoreFragment);
                    if(result == null) result = this.caseElement(considerIgnoreFragment);
                    if(result == null) result = this.caseEModelElement(considerIgnoreFragment);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.CONTINUATION:
                {
                    let continuation : uml.Continuation = <uml.Continuation><any>theEObject;
                    let result : T = this.caseContinuation(continuation);
                    if(result == null) result = this.caseInteractionFragment(continuation);
                    if(result == null) result = this.caseNamedElement(continuation);
                    if(result == null) result = this.caseElement(continuation);
                    if(result == null) result = this.caseEModelElement(continuation);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DESTRUCTION_OCCURRENCE_SPECIFICATION:
                {
                    let destructionOccurrenceSpecification : uml.DestructionOccurrenceSpecification = <uml.DestructionOccurrenceSpecification><any>theEObject;
                    let result : T = this.caseDestructionOccurrenceSpecification(destructionOccurrenceSpecification);
                    if(result == null) result = this.caseMessageOccurrenceSpecification(destructionOccurrenceSpecification);
                    if(result == null) result = this.caseOccurrenceSpecification(destructionOccurrenceSpecification);
                    if(result == null) result = this.caseMessageEnd(destructionOccurrenceSpecification);
                    if(result == null) result = this.caseInteractionFragment(destructionOccurrenceSpecification);
                    if(result == null) result = this.caseNamedElement(destructionOccurrenceSpecification);
                    if(result == null) result = this.caseElement(destructionOccurrenceSpecification);
                    if(result == null) result = this.caseEModelElement(destructionOccurrenceSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION:
                {
                    let messageOccurrenceSpecification : uml.MessageOccurrenceSpecification = <uml.MessageOccurrenceSpecification><any>theEObject;
                    let result : T = this.caseMessageOccurrenceSpecification(messageOccurrenceSpecification);
                    if(result == null) result = this.caseOccurrenceSpecification(messageOccurrenceSpecification);
                    if(result == null) result = this.caseMessageEnd(messageOccurrenceSpecification);
                    if(result == null) result = this.caseInteractionFragment(messageOccurrenceSpecification);
                    if(result == null) result = this.caseNamedElement(messageOccurrenceSpecification);
                    if(result == null) result = this.caseElement(messageOccurrenceSpecification);
                    if(result == null) result = this.caseEModelElement(messageOccurrenceSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.EXECUTION_OCCURRENCE_SPECIFICATION:
                {
                    let executionOccurrenceSpecification : uml.ExecutionOccurrenceSpecification = <uml.ExecutionOccurrenceSpecification><any>theEObject;
                    let result : T = this.caseExecutionOccurrenceSpecification(executionOccurrenceSpecification);
                    if(result == null) result = this.caseOccurrenceSpecification(executionOccurrenceSpecification);
                    if(result == null) result = this.caseInteractionFragment(executionOccurrenceSpecification);
                    if(result == null) result = this.caseNamedElement(executionOccurrenceSpecification);
                    if(result == null) result = this.caseElement(executionOccurrenceSpecification);
                    if(result == null) result = this.caseEModelElement(executionOccurrenceSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.STATE_INVARIANT:
                {
                    let stateInvariant : uml.StateInvariant = <uml.StateInvariant><any>theEObject;
                    let result : T = this.caseStateInvariant(stateInvariant);
                    if(result == null) result = this.caseInteractionFragment(stateInvariant);
                    if(result == null) result = this.caseNamedElement(stateInvariant);
                    if(result == null) result = this.caseElement(stateInvariant);
                    if(result == null) result = this.caseEModelElement(stateInvariant);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.FINAL_STATE:
                {
                    let finalState : uml.FinalState = <uml.FinalState><any>theEObject;
                    let result : T = this.caseFinalState(finalState);
                    if(result == null) result = this.caseState(finalState);
                    if(result == null) result = this.caseNamespace(finalState);
                    if(result == null) result = this.caseRedefinableElement(finalState);
                    if(result == null) result = this.caseVertex(finalState);
                    if(result == null) result = this.caseNamedElement(finalState);
                    if(result == null) result = this.caseElement(finalState);
                    if(result == null) result = this.caseEModelElement(finalState);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.PROTOCOL_TRANSITION:
                {
                    let protocolTransition : uml.ProtocolTransition = <uml.ProtocolTransition><any>theEObject;
                    let result : T = this.caseProtocolTransition(protocolTransition);
                    if(result == null) result = this.caseTransition(protocolTransition);
                    if(result == null) result = this.caseNamespace(protocolTransition);
                    if(result == null) result = this.caseRedefinableElement(protocolTransition);
                    if(result == null) result = this.caseNamedElement(protocolTransition);
                    if(result == null) result = this.caseElement(protocolTransition);
                    if(result == null) result = this.caseEModelElement(protocolTransition);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ASSOCIATION_CLASS:
                {
                    let associationClass : uml.AssociationClass = <uml.AssociationClass><any>theEObject;
                    let result : T = this.caseAssociationClass(associationClass);
                    if(result == null) result = this.caseClass(associationClass);
                    if(result == null) result = this.caseAssociation(associationClass);
                    if(result == null) result = this.caseEncapsulatedClassifier(associationClass);
                    if(result == null) result = this.caseBehavioredClassifier(associationClass);
                    if(result == null) result = this.caseRelationship(associationClass);
                    if(result == null) result = this.caseStructuredClassifier(associationClass);
                    if(result == null) result = this.caseClassifier(associationClass);
                    if(result == null) result = this.caseNamespace(associationClass);
                    if(result == null) result = this.caseRedefinableElement(associationClass);
                    if(result == null) result = this.caseType(associationClass);
                    if(result == null) result = this.caseTemplateableElement(associationClass);
                    if(result == null) result = this.casePackageableElement(associationClass);
                    if(result == null) result = this.caseNamedElement(associationClass);
                    if(result == null) result = this.caseParameterableElement(associationClass);
                    if(result == null) result = this.caseElement(associationClass);
                    if(result == null) result = this.caseEModelElement(associationClass);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.COMPONENT:
                {
                    let component : uml.Component = <uml.Component><any>theEObject;
                    let result : T = this.caseComponent(component);
                    if(result == null) result = this.caseClass(component);
                    if(result == null) result = this.caseEncapsulatedClassifier(component);
                    if(result == null) result = this.caseBehavioredClassifier(component);
                    if(result == null) result = this.caseStructuredClassifier(component);
                    if(result == null) result = this.caseClassifier(component);
                    if(result == null) result = this.caseNamespace(component);
                    if(result == null) result = this.caseRedefinableElement(component);
                    if(result == null) result = this.caseType(component);
                    if(result == null) result = this.caseTemplateableElement(component);
                    if(result == null) result = this.casePackageableElement(component);
                    if(result == null) result = this.caseNamedElement(component);
                    if(result == null) result = this.caseParameterableElement(component);
                    if(result == null) result = this.caseElement(component);
                    if(result == null) result = this.caseEModelElement(component);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.COMPONENT_REALIZATION:
                {
                    let componentRealization : uml.ComponentRealization = <uml.ComponentRealization><any>theEObject;
                    let result : T = this.caseComponentRealization(componentRealization);
                    if(result == null) result = this.caseRealization(componentRealization);
                    if(result == null) result = this.caseAbstraction(componentRealization);
                    if(result == null) result = this.caseDependency(componentRealization);
                    if(result == null) result = this.casePackageableElement(componentRealization);
                    if(result == null) result = this.caseDirectedRelationship(componentRealization);
                    if(result == null) result = this.caseNamedElement(componentRealization);
                    if(result == null) result = this.caseParameterableElement(componentRealization);
                    if(result == null) result = this.caseRelationship(componentRealization);
                    if(result == null) result = this.caseElement(componentRealization);
                    if(result == null) result = this.caseEModelElement(componentRealization);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.ACTOR:
                {
                    let actor : uml.Actor = <uml.Actor><any>theEObject;
                    let result : T = this.caseActor(actor);
                    if(result == null) result = this.caseBehavioredClassifier(actor);
                    if(result == null) result = this.caseClassifier(actor);
                    if(result == null) result = this.caseNamespace(actor);
                    if(result == null) result = this.caseRedefinableElement(actor);
                    if(result == null) result = this.caseType(actor);
                    if(result == null) result = this.caseTemplateableElement(actor);
                    if(result == null) result = this.casePackageableElement(actor);
                    if(result == null) result = this.caseNamedElement(actor);
                    if(result == null) result = this.caseParameterableElement(actor);
                    if(result == null) result = this.caseElement(actor);
                    if(result == null) result = this.caseEModelElement(actor);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DURATION:
                {
                    let duration : uml.Duration = <uml.Duration><any>theEObject;
                    let result : T = this.caseDuration(duration);
                    if(result == null) result = this.caseValueSpecification(duration);
                    if(result == null) result = this.casePackageableElement(duration);
                    if(result == null) result = this.caseTypedElement(duration);
                    if(result == null) result = this.caseNamedElement(duration);
                    if(result == null) result = this.caseParameterableElement(duration);
                    if(result == null) result = this.caseElement(duration);
                    if(result == null) result = this.caseEModelElement(duration);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DURATION_CONSTRAINT:
                {
                    let durationConstraint : uml.DurationConstraint = <uml.DurationConstraint><any>theEObject;
                    let result : T = this.caseDurationConstraint(durationConstraint);
                    if(result == null) result = this.caseIntervalConstraint(durationConstraint);
                    if(result == null) result = this.caseConstraint(durationConstraint);
                    if(result == null) result = this.casePackageableElement(durationConstraint);
                    if(result == null) result = this.caseNamedElement(durationConstraint);
                    if(result == null) result = this.caseParameterableElement(durationConstraint);
                    if(result == null) result = this.caseElement(durationConstraint);
                    if(result == null) result = this.caseEModelElement(durationConstraint);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERVAL_CONSTRAINT:
                {
                    let intervalConstraint : uml.IntervalConstraint = <uml.IntervalConstraint><any>theEObject;
                    let result : T = this.caseIntervalConstraint(intervalConstraint);
                    if(result == null) result = this.caseConstraint(intervalConstraint);
                    if(result == null) result = this.casePackageableElement(intervalConstraint);
                    if(result == null) result = this.caseNamedElement(intervalConstraint);
                    if(result == null) result = this.caseParameterableElement(intervalConstraint);
                    if(result == null) result = this.caseElement(intervalConstraint);
                    if(result == null) result = this.caseEModelElement(intervalConstraint);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.INTERVAL:
                {
                    let interval : uml.Interval = <uml.Interval><any>theEObject;
                    let result : T = this.caseInterval(interval);
                    if(result == null) result = this.caseValueSpecification(interval);
                    if(result == null) result = this.casePackageableElement(interval);
                    if(result == null) result = this.caseTypedElement(interval);
                    if(result == null) result = this.caseNamedElement(interval);
                    if(result == null) result = this.caseParameterableElement(interval);
                    if(result == null) result = this.caseElement(interval);
                    if(result == null) result = this.caseEModelElement(interval);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DURATION_INTERVAL:
                {
                    let durationInterval : uml.DurationInterval = <uml.DurationInterval><any>theEObject;
                    let result : T = this.caseDurationInterval(durationInterval);
                    if(result == null) result = this.caseInterval(durationInterval);
                    if(result == null) result = this.caseValueSpecification(durationInterval);
                    if(result == null) result = this.casePackageableElement(durationInterval);
                    if(result == null) result = this.caseTypedElement(durationInterval);
                    if(result == null) result = this.caseNamedElement(durationInterval);
                    if(result == null) result = this.caseParameterableElement(durationInterval);
                    if(result == null) result = this.caseElement(durationInterval);
                    if(result == null) result = this.caseEModelElement(durationInterval);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.DURATION_OBSERVATION:
                {
                    let durationObservation : uml.DurationObservation = <uml.DurationObservation><any>theEObject;
                    let result : T = this.caseDurationObservation(durationObservation);
                    if(result == null) result = this.caseObservation(durationObservation);
                    if(result == null) result = this.casePackageableElement(durationObservation);
                    if(result == null) result = this.caseNamedElement(durationObservation);
                    if(result == null) result = this.caseParameterableElement(durationObservation);
                    if(result == null) result = this.caseElement(durationObservation);
                    if(result == null) result = this.caseEModelElement(durationObservation);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LITERAL_BOOLEAN:
                {
                    let literalBoolean : uml.LiteralBoolean = <uml.LiteralBoolean><any>theEObject;
                    let result : T = this.caseLiteralBoolean(literalBoolean);
                    if(result == null) result = this.caseLiteralSpecification(literalBoolean);
                    if(result == null) result = this.caseValueSpecification(literalBoolean);
                    if(result == null) result = this.casePackageableElement(literalBoolean);
                    if(result == null) result = this.caseTypedElement(literalBoolean);
                    if(result == null) result = this.caseNamedElement(literalBoolean);
                    if(result == null) result = this.caseParameterableElement(literalBoolean);
                    if(result == null) result = this.caseElement(literalBoolean);
                    if(result == null) result = this.caseEModelElement(literalBoolean);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LITERAL_SPECIFICATION:
                {
                    let literalSpecification : uml.LiteralSpecification = <uml.LiteralSpecification><any>theEObject;
                    let result : T = this.caseLiteralSpecification(literalSpecification);
                    if(result == null) result = this.caseValueSpecification(literalSpecification);
                    if(result == null) result = this.casePackageableElement(literalSpecification);
                    if(result == null) result = this.caseTypedElement(literalSpecification);
                    if(result == null) result = this.caseNamedElement(literalSpecification);
                    if(result == null) result = this.caseParameterableElement(literalSpecification);
                    if(result == null) result = this.caseElement(literalSpecification);
                    if(result == null) result = this.caseEModelElement(literalSpecification);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LITERAL_INTEGER:
                {
                    let literalInteger : uml.LiteralInteger = <uml.LiteralInteger><any>theEObject;
                    let result : T = this.caseLiteralInteger(literalInteger);
                    if(result == null) result = this.caseLiteralSpecification(literalInteger);
                    if(result == null) result = this.caseValueSpecification(literalInteger);
                    if(result == null) result = this.casePackageableElement(literalInteger);
                    if(result == null) result = this.caseTypedElement(literalInteger);
                    if(result == null) result = this.caseNamedElement(literalInteger);
                    if(result == null) result = this.caseParameterableElement(literalInteger);
                    if(result == null) result = this.caseElement(literalInteger);
                    if(result == null) result = this.caseEModelElement(literalInteger);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LITERAL_NULL:
                {
                    let literalNull : uml.LiteralNull = <uml.LiteralNull><any>theEObject;
                    let result : T = this.caseLiteralNull(literalNull);
                    if(result == null) result = this.caseLiteralSpecification(literalNull);
                    if(result == null) result = this.caseValueSpecification(literalNull);
                    if(result == null) result = this.casePackageableElement(literalNull);
                    if(result == null) result = this.caseTypedElement(literalNull);
                    if(result == null) result = this.caseNamedElement(literalNull);
                    if(result == null) result = this.caseParameterableElement(literalNull);
                    if(result == null) result = this.caseElement(literalNull);
                    if(result == null) result = this.caseEModelElement(literalNull);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LITERAL_REAL:
                {
                    let literalReal : uml.LiteralReal = <uml.LiteralReal><any>theEObject;
                    let result : T = this.caseLiteralReal(literalReal);
                    if(result == null) result = this.caseLiteralSpecification(literalReal);
                    if(result == null) result = this.caseValueSpecification(literalReal);
                    if(result == null) result = this.casePackageableElement(literalReal);
                    if(result == null) result = this.caseTypedElement(literalReal);
                    if(result == null) result = this.caseNamedElement(literalReal);
                    if(result == null) result = this.caseParameterableElement(literalReal);
                    if(result == null) result = this.caseElement(literalReal);
                    if(result == null) result = this.caseEModelElement(literalReal);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LITERAL_STRING:
                {
                    let literalString : uml.LiteralString = <uml.LiteralString><any>theEObject;
                    let result : T = this.caseLiteralString(literalString);
                    if(result == null) result = this.caseLiteralSpecification(literalString);
                    if(result == null) result = this.caseValueSpecification(literalString);
                    if(result == null) result = this.casePackageableElement(literalString);
                    if(result == null) result = this.caseTypedElement(literalString);
                    if(result == null) result = this.caseNamedElement(literalString);
                    if(result == null) result = this.caseParameterableElement(literalString);
                    if(result == null) result = this.caseElement(literalString);
                    if(result == null) result = this.caseEModelElement(literalString);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.LITERAL_UNLIMITED_NATURAL:
                {
                    let literalUnlimitedNatural : uml.LiteralUnlimitedNatural = <uml.LiteralUnlimitedNatural><any>theEObject;
                    let result : T = this.caseLiteralUnlimitedNatural(literalUnlimitedNatural);
                    if(result == null) result = this.caseLiteralSpecification(literalUnlimitedNatural);
                    if(result == null) result = this.caseValueSpecification(literalUnlimitedNatural);
                    if(result == null) result = this.casePackageableElement(literalUnlimitedNatural);
                    if(result == null) result = this.caseTypedElement(literalUnlimitedNatural);
                    if(result == null) result = this.caseNamedElement(literalUnlimitedNatural);
                    if(result == null) result = this.caseParameterableElement(literalUnlimitedNatural);
                    if(result == null) result = this.caseElement(literalUnlimitedNatural);
                    if(result == null) result = this.caseEModelElement(literalUnlimitedNatural);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TIME_CONSTRAINT:
                {
                    let timeConstraint : uml.TimeConstraint = <uml.TimeConstraint><any>theEObject;
                    let result : T = this.caseTimeConstraint(timeConstraint);
                    if(result == null) result = this.caseIntervalConstraint(timeConstraint);
                    if(result == null) result = this.caseConstraint(timeConstraint);
                    if(result == null) result = this.casePackageableElement(timeConstraint);
                    if(result == null) result = this.caseNamedElement(timeConstraint);
                    if(result == null) result = this.caseParameterableElement(timeConstraint);
                    if(result == null) result = this.caseElement(timeConstraint);
                    if(result == null) result = this.caseEModelElement(timeConstraint);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TIME_INTERVAL:
                {
                    let timeInterval : uml.TimeInterval = <uml.TimeInterval><any>theEObject;
                    let result : T = this.caseTimeInterval(timeInterval);
                    if(result == null) result = this.caseInterval(timeInterval);
                    if(result == null) result = this.caseValueSpecification(timeInterval);
                    if(result == null) result = this.casePackageableElement(timeInterval);
                    if(result == null) result = this.caseTypedElement(timeInterval);
                    if(result == null) result = this.caseNamedElement(timeInterval);
                    if(result == null) result = this.caseParameterableElement(timeInterval);
                    if(result == null) result = this.caseElement(timeInterval);
                    if(result == null) result = this.caseEModelElement(timeInterval);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            case uml.UmlPackage.TIME_OBSERVATION:
                {
                    let timeObservation : uml.TimeObservation = <uml.TimeObservation><any>theEObject;
                    let result : T = this.caseTimeObservation(timeObservation);
                    if(result == null) result = this.caseObservation(timeObservation);
                    if(result == null) result = this.casePackageableElement(timeObservation);
                    if(result == null) result = this.caseNamedElement(timeObservation);
                    if(result == null) result = this.caseParameterableElement(timeObservation);
                    if(result == null) result = this.caseElement(timeObservation);
                    if(result == null) result = this.caseEModelElement(timeObservation);
                    if(result == null) result = this.defaultCase(theEObject);
                    return result;
                };
            default:
                return this.defaultCase(theEObject);
            }
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity Content</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity Content</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivityContent(object : uml.ActivityContent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivity(object : uml.Activity) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Behavior</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Behavior</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBehavior(object : uml.Behavior) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Class</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Class</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseClass(object : uml.Class) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Behaviored Classifier</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Behaviored Classifier</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBehavioredClassifier(object : uml.BehavioredClassifier) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Classifier</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Classifier</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseClassifier(object : uml.Classifier) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Namespace</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Namespace</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseNamespace(object : uml.Namespace) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Named Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Named Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseNamedElement(object : uml.NamedElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseElement(object : uml.Element) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Comment</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Comment</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseComment(object : uml.Comment) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Stereotype</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Stereotype</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStereotype(object : uml.Stereotype) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Image</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Image</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseImage(object : uml.Image) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Profile</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Profile</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProfile(object : uml.Profile) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Package</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Package</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePackage(object : uml.Package) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Packageable Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Packageable Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePackageableElement(object : uml.PackageableElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Parameterable Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Parameterable Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseParameterableElement(object : uml.ParameterableElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Template Parameter</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Template Parameter</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTemplateParameter(object : uml.TemplateParameter) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Template Signature</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Template Signature</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTemplateSignature(object : uml.TemplateSignature) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Templateable Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Templateable Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTemplateableElement(object : uml.TemplateableElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Template Binding</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Template Binding</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTemplateBinding(object : uml.TemplateBinding) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Directed Relationship</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Directed Relationship</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDirectedRelationship(object : uml.DirectedRelationship) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Relationship</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Relationship</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRelationship(object : uml.Relationship) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Template Parameter Substitution</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Template Parameter Substitution</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTemplateParameterSubstitution(object : uml.TemplateParameterSubstitution) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Type</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Type</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseType(object : uml.Type) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Association</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Association</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAssociation(object : uml.Association) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Property</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Property</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProperty(object : uml.Property) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Connectable Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Connectable Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConnectableElement(object : uml.ConnectableElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Typed Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Typed Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTypedElement(object : uml.TypedElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Connector End</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Connector End</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConnectorEnd(object : uml.ConnectorEnd) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Multiplicity Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Multiplicity Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMultiplicityElement(object : uml.MultiplicityElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Value Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Value Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseValueSpecification(object : uml.ValueSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Connectable Element Template Parameter</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Connectable Element Template Parameter</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConnectableElementTemplateParameter(object : uml.ConnectableElementTemplateParameter) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Deployment Target</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Deployment Target</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDeploymentTarget(object : uml.DeploymentTarget) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Deployment</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Deployment</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDeployment(object : uml.Deployment) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Dependency</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Dependency</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDependency(object : uml.Dependency) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Deployment Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Deployment Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDeploymentSpecification(object : uml.DeploymentSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Artifact</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Artifact</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseArtifact(object : uml.Artifact) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Deployed Artifact</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Deployed Artifact</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDeployedArtifact(object : uml.DeployedArtifact) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Manifestation</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Manifestation</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseManifestation(object : uml.Manifestation) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Abstraction</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Abstraction</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAbstraction(object : uml.Abstraction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Opaque Expression</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Opaque Expression</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOpaqueExpression(object : uml.OpaqueExpression) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Parameter</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Parameter</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseParameter(object : uml.Parameter) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Operation</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Operation</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOperation(object : uml.Operation) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Behavioral Feature</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Behavioral Feature</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBehavioralFeature(object : uml.BehavioralFeature) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Feature</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Feature</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFeature(object : uml.Feature) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Redefinable Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Redefinable Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRedefinableElement(object : uml.RedefinableElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Parameter Set</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Parameter Set</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseParameterSet(object : uml.ParameterSet) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Constraint</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Constraint</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConstraint(object : uml.Constraint) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Data Type</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Data Type</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDataType(object : uml.DataType) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interface</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interface</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInterface(object : uml.Interface) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Reception</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Reception</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReception(object : uml.Reception) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Signal</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Signal</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSignal(object : uml.Signal) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Protocol State Machine</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Protocol State Machine</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProtocolStateMachine(object : uml.ProtocolStateMachine) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>State Machine</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>State Machine</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStateMachine(object : uml.StateMachine) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Pseudostate</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Pseudostate</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePseudostate(object : uml.Pseudostate) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Vertex</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Vertex</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseVertex(object : uml.Vertex) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Region</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Region</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRegion(object : uml.Region) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>State</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>State</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseState(object : uml.State) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Connection Point Reference</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Connection Point Reference</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConnectionPointReference(object : uml.ConnectionPointReference) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Trigger</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Trigger</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTrigger(object : uml.Trigger) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Event</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Event</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseEvent(object : uml.Event) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Port</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Port</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePort(object : uml.Port) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Transition</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Transition</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTransition(object : uml.Transition) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Protocol Conformance</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Protocol Conformance</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProtocolConformance(object : uml.ProtocolConformance) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Operation Template Parameter</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Operation Template Parameter</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOperationTemplateParameter(object : uml.OperationTemplateParameter) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Structural Feature</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Structural Feature</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStructuralFeature(object : uml.StructuralFeature) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Package Merge</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Package Merge</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePackageMerge(object : uml.PackageMerge) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Profile Application</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Profile Application</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProfileApplication(object : uml.ProfileApplication) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Enumeration</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Enumeration</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseEnumeration(object : uml.Enumeration) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Enumeration Literal</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Enumeration Literal</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseEnumerationLiteral(object : uml.EnumerationLiteral) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Instance Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Instance Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInstanceSpecification(object : uml.InstanceSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Slot</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Slot</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSlot(object : uml.Slot) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Primitive Type</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Primitive Type</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePrimitiveType(object : uml.PrimitiveType) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Element Import</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Element Import</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseElementImport(object : uml.ElementImport) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Package Import</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Package Import</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePackageImport(object : uml.PackageImport) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Extension</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Extension</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExtension(object : uml.Extension) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Extension End</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Extension End</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExtensionEnd(object : uml.ExtensionEnd) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Model</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Model</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseModel(object : uml.Model) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>String Expression</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>String Expression</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStringExpression(object : uml.StringExpression) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Expression</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Expression</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExpression(object : uml.Expression) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Usage</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Usage</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseUsage(object : uml.Usage) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Collaboration Use</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Collaboration Use</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCollaborationUse(object : uml.CollaborationUse) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Collaboration</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Collaboration</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCollaboration(object : uml.Collaboration) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Structured Classifier</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Structured Classifier</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStructuredClassifier(object : uml.StructuredClassifier) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Connector</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Connector</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConnector(object : uml.Connector) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Generalization</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Generalization</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseGeneralization(object : uml.Generalization) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Generalization Set</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Generalization Set</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseGeneralizationSet(object : uml.GeneralizationSet) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Redefinable Template Signature</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Redefinable Template Signature</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRedefinableTemplateSignature(object : uml.RedefinableTemplateSignature) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Use Case</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Use Case</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseUseCase(object : uml.UseCase) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Extend</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Extend</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExtend(object : uml.Extend) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Extension Point</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Extension Point</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExtensionPoint(object : uml.ExtensionPoint) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Include</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Include</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInclude(object : uml.Include) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Substitution</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Substitution</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSubstitution(object : uml.Substitution) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Realization</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Realization</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRealization(object : uml.Realization) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Classifier Template Parameter</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Classifier Template Parameter</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseClassifierTemplateParameter(object : uml.ClassifierTemplateParameter) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interface Realization</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interface Realization</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInterfaceRealization(object : uml.InterfaceRealization) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Encapsulated Classifier</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Encapsulated Classifier</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseEncapsulatedClassifier(object : uml.EncapsulatedClassifier) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity Group</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity Group</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivityGroup(object : uml.ActivityGroup) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity Edge</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity Edge</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivityEdge(object : uml.ActivityEdge) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity Partition</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity Partition</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivityPartition(object : uml.ActivityPartition) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivityNode(object : uml.ActivityNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interruptible Activity Region</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interruptible Activity Region</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInterruptibleActivityRegion(object : uml.InterruptibleActivityRegion) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Structured Activity Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Structured Activity Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStructuredActivityNode(object : uml.StructuredActivityNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAction(object : uml.Action) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Executable Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Executable Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExecutableNode(object : uml.ExecutableNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Exception Handler</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Exception Handler</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExceptionHandler(object : uml.ExceptionHandler) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Object Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Object Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseObjectNode(object : uml.ObjectNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Input Pin</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Input Pin</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInputPin(object : uml.InputPin) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Pin</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Pin</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePin(object : uml.Pin) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Output Pin</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Output Pin</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOutputPin(object : uml.OutputPin) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Variable</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Variable</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseVariable(object : uml.Variable) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Value Specification Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Value Specification Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseValueSpecificationAction(object : uml.ValueSpecificationAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Variable Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Variable Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseVariableAction(object : uml.VariableAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Write Link Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Write Link Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseWriteLinkAction(object : uml.WriteLinkAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Link Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Link Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLinkAction(object : uml.LinkAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Link End Data</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Link End Data</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLinkEndData(object : uml.LinkEndData) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Qualifier Value</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Qualifier Value</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseQualifierValue(object : uml.QualifierValue) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Write Structural Feature Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Write Structural Feature Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseWriteStructuralFeatureAction(object : uml.WriteStructuralFeatureAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Structural Feature Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Structural Feature Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStructuralFeatureAction(object : uml.StructuralFeatureAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Write Variable Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Write Variable Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseWriteVariableAction(object : uml.WriteVariableAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Accept Call Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Accept Call Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAcceptCallAction(object : uml.AcceptCallAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Accept Event Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Accept Event Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAcceptEventAction(object : uml.AcceptEventAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Action Input Pin</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Action Input Pin</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActionInputPin(object : uml.ActionInputPin) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Add Structural Feature Value Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Add Structural Feature Value Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAddStructuralFeatureValueAction(object : uml.AddStructuralFeatureValueAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Add Variable Value Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Add Variable Value Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAddVariableValueAction(object : uml.AddVariableValueAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Broadcast Signal Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Broadcast Signal Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBroadcastSignalAction(object : uml.BroadcastSignalAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Invocation Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Invocation Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInvocationAction(object : uml.InvocationAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Call Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Call Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCallAction(object : uml.CallAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Call Behavior Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Call Behavior Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCallBehaviorAction(object : uml.CallBehaviorAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Call Operation Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Call Operation Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCallOperationAction(object : uml.CallOperationAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Clause</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Clause</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseClause(object : uml.Clause) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Clear Association Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Clear Association Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseClearAssociationAction(object : uml.ClearAssociationAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Clear Structural Feature Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Clear Structural Feature Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseClearStructuralFeatureAction(object : uml.ClearStructuralFeatureAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Clear Variable Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Clear Variable Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseClearVariableAction(object : uml.ClearVariableAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Conditional Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Conditional Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConditionalNode(object : uml.ConditionalNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Create Link Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Create Link Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCreateLinkAction(object : uml.CreateLinkAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Link End Creation Data</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Link End Creation Data</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLinkEndCreationData(object : uml.LinkEndCreationData) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Create Link Object Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Create Link Object Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCreateLinkObjectAction(object : uml.CreateLinkObjectAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Create Object Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Create Object Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCreateObjectAction(object : uml.CreateObjectAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Destroy Link Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Destroy Link Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDestroyLinkAction(object : uml.DestroyLinkAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Link End Destruction Data</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Link End Destruction Data</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLinkEndDestructionData(object : uml.LinkEndDestructionData) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Destroy Object Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Destroy Object Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDestroyObjectAction(object : uml.DestroyObjectAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Expansion Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Expansion Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExpansionNode(object : uml.ExpansionNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Expansion Region</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Expansion Region</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExpansionRegion(object : uml.ExpansionRegion) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Loop Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Loop Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLoopNode(object : uml.LoopNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Opaque Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Opaque Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOpaqueAction(object : uml.OpaqueAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Raise Exception Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Raise Exception Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRaiseExceptionAction(object : uml.RaiseExceptionAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Extent Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Extent Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadExtentAction(object : uml.ReadExtentAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Is Classified Object Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Is Classified Object Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadIsClassifiedObjectAction(object : uml.ReadIsClassifiedObjectAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Link Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Link Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadLinkAction(object : uml.ReadLinkAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Link Object End Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Link Object End Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadLinkObjectEndAction(object : uml.ReadLinkObjectEndAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Link Object End Qualifier Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Link Object End Qualifier Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadLinkObjectEndQualifierAction(object : uml.ReadLinkObjectEndQualifierAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Self Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Self Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadSelfAction(object : uml.ReadSelfAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Structural Feature Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Structural Feature Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadStructuralFeatureAction(object : uml.ReadStructuralFeatureAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Read Variable Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Read Variable Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReadVariableAction(object : uml.ReadVariableAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Reclassify Object Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Reclassify Object Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReclassifyObjectAction(object : uml.ReclassifyObjectAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Reduce Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Reduce Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReduceAction(object : uml.ReduceAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Remove Structural Feature Value Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Remove Structural Feature Value Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRemoveStructuralFeatureValueAction(object : uml.RemoveStructuralFeatureValueAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Remove Variable Value Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Remove Variable Value Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseRemoveVariableValueAction(object : uml.RemoveVariableValueAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Reply Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Reply Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseReplyAction(object : uml.ReplyAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Send Object Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Send Object Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSendObjectAction(object : uml.SendObjectAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Send Signal Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Send Signal Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSendSignalAction(object : uml.SendSignalAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Sequence Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Sequence Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSequenceNode(object : uml.SequenceNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Start Classifier Behavior Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Start Classifier Behavior Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStartClassifierBehaviorAction(object : uml.StartClassifierBehaviorAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Start Object Behavior Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Start Object Behavior Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStartObjectBehaviorAction(object : uml.StartObjectBehaviorAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Test Identity Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Test Identity Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTestIdentityAction(object : uml.TestIdentityAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Unmarshall Action</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Unmarshall Action</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseUnmarshallAction(object : uml.UnmarshallAction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Value Pin</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Value Pin</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseValuePin(object : uml.ValuePin) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity Final Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity Final Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivityFinalNode(object : uml.ActivityFinalNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Final Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Final Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFinalNode(object : uml.FinalNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Control Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Control Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseControlNode(object : uml.ControlNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Activity Parameter Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Activity Parameter Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActivityParameterNode(object : uml.ActivityParameterNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Central Buffer Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Central Buffer Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCentralBufferNode(object : uml.CentralBufferNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Control Flow</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Control Flow</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseControlFlow(object : uml.ControlFlow) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Data Store Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Data Store Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDataStoreNode(object : uml.DataStoreNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Decision Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Decision Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDecisionNode(object : uml.DecisionNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Object Flow</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Object Flow</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseObjectFlow(object : uml.ObjectFlow) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Flow Final Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Flow Final Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFlowFinalNode(object : uml.FlowFinalNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Fork Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Fork Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseForkNode(object : uml.ForkNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Initial Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Initial Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInitialNode(object : uml.InitialNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Join Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Join Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseJoinNode(object : uml.JoinNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Merge Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Merge Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMergeNode(object : uml.MergeNode) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Instance Value</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Instance Value</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInstanceValue(object : uml.InstanceValue) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Any Receive Event</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Any Receive Event</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAnyReceiveEvent(object : uml.AnyReceiveEvent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Message Event</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Message Event</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMessageEvent(object : uml.MessageEvent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Call Event</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Call Event</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCallEvent(object : uml.CallEvent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Change Event</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Change Event</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseChangeEvent(object : uml.ChangeEvent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Function Behavior</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Function Behavior</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFunctionBehavior(object : uml.FunctionBehavior) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Opaque Behavior</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Opaque Behavior</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOpaqueBehavior(object : uml.OpaqueBehavior) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Signal Event</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Signal Event</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseSignalEvent(object : uml.SignalEvent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Time Event</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Time Event</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTimeEvent(object : uml.TimeEvent) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Time Expression</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Time Expression</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTimeExpression(object : uml.TimeExpression) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Observation</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Observation</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseObservation(object : uml.Observation) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Communication Path</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Communication Path</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCommunicationPath(object : uml.CommunicationPath) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Device</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Device</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDevice(object : uml.Device) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Node</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Node</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseNode(object : uml.Node) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Execution Environment</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Execution Environment</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExecutionEnvironment(object : uml.ExecutionEnvironment) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Information Flow</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Information Flow</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInformationFlow(object : uml.InformationFlow) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Message</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Message</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMessage(object : uml.Message) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interaction</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interaction</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInteraction(object : uml.Interaction) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interaction Fragment</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interaction Fragment</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInteractionFragment(object : uml.InteractionFragment) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Lifeline</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Lifeline</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLifeline(object : uml.Lifeline) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Part Decomposition</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Part Decomposition</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public casePartDecomposition(object : uml.PartDecomposition) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interaction Use</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interaction Use</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInteractionUse(object : uml.InteractionUse) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Gate</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Gate</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseGate(object : uml.Gate) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Message End</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Message End</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMessageEnd(object : uml.MessageEnd) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interaction Operand</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interaction Operand</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInteractionOperand(object : uml.InteractionOperand) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interaction Constraint</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interaction Constraint</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInteractionConstraint(object : uml.InteractionConstraint) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>General Ordering</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>General Ordering</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseGeneralOrdering(object : uml.GeneralOrdering) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Occurrence Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Occurrence Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseOccurrenceSpecification(object : uml.OccurrenceSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Information Item</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Information Item</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInformationItem(object : uml.InformationItem) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Action Execution Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Action Execution Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActionExecutionSpecification(object : uml.ActionExecutionSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Execution Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Execution Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExecutionSpecification(object : uml.ExecutionSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Behavior Execution Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Behavior Execution Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseBehaviorExecutionSpecification(object : uml.BehaviorExecutionSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Combined Fragment</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Combined Fragment</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseCombinedFragment(object : uml.CombinedFragment) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Consider Ignore Fragment</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Consider Ignore Fragment</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseConsiderIgnoreFragment(object : uml.ConsiderIgnoreFragment) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Continuation</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Continuation</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseContinuation(object : uml.Continuation) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Destruction Occurrence Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Destruction Occurrence Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDestructionOccurrenceSpecification(object : uml.DestructionOccurrenceSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Message Occurrence Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Message Occurrence Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseMessageOccurrenceSpecification(object : uml.MessageOccurrenceSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Execution Occurrence Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Execution Occurrence Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseExecutionOccurrenceSpecification(object : uml.ExecutionOccurrenceSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>State Invariant</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>State Invariant</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseStateInvariant(object : uml.StateInvariant) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Final State</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Final State</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseFinalState(object : uml.FinalState) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Protocol Transition</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Protocol Transition</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseProtocolTransition(object : uml.ProtocolTransition) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Association Class</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Association Class</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseAssociationClass(object : uml.AssociationClass) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Component</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Component</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseComponent(object : uml.Component) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Component Realization</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Component Realization</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseComponentRealization(object : uml.ComponentRealization) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Actor</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Actor</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseActor(object : uml.Actor) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Duration</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Duration</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDuration(object : uml.Duration) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Duration Constraint</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Duration Constraint</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDurationConstraint(object : uml.DurationConstraint) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interval Constraint</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interval Constraint</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseIntervalConstraint(object : uml.IntervalConstraint) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Interval</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Interval</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseInterval(object : uml.Interval) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Duration Interval</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Duration Interval</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDurationInterval(object : uml.DurationInterval) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Duration Observation</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Duration Observation</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseDurationObservation(object : uml.DurationObservation) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Literal Boolean</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Literal Boolean</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLiteralBoolean(object : uml.LiteralBoolean) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Literal Specification</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Literal Specification</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLiteralSpecification(object : uml.LiteralSpecification) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Literal Integer</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Literal Integer</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLiteralInteger(object : uml.LiteralInteger) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Literal Null</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Literal Null</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLiteralNull(object : uml.LiteralNull) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Literal Real</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Literal Real</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLiteralReal(object : uml.LiteralReal) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Literal String</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Literal String</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLiteralString(object : uml.LiteralString) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Literal Unlimited Natural</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Literal Unlimited Natural</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseLiteralUnlimitedNatural(object : uml.LiteralUnlimitedNatural) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Time Constraint</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Time Constraint</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTimeConstraint(object : uml.TimeConstraint) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Time Interval</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Time Interval</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTimeInterval(object : uml.TimeInterval) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>Time Observation</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>Time Observation</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseTimeObservation(object : uml.TimeObservation) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>EModel Element</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>EModel Element</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
         * @generated
         */
        public caseEModelElement(object : ecore4m.EModelElement) : T {
            return null;
        }

        /**
         * Returns the result of interpreting the object as an instance of '<em>EObject</em>'.
         * <!-- begin-user-doc -->
         * This implementation returns null;
         * returning a non-null result will terminate the switch, but this is the last case anyway.
         * <!-- end-user-doc -->
         * @param {*} object the target of the switch.
         * @return {*} the result of interpreting the object as an instance of '<em>EObject</em>'.
         * @see #doSwitch(org.eclipse.emf.ecore.EObject)
         * @generated
         */
        public defaultCase(object : org.eclipse.emf.ecore.EObject) : T {
            return null;
        }
    }
    UmlSwitch["__class"] = "uml.util.UmlSwitch";

}

