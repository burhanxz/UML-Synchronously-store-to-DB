/**
 */
package uml.util;

import java.util.Map;

import org.eclipse.emf.common.util.DiagnosticChain;
import org.eclipse.emf.common.util.ResourceLocator;

import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.util.EObjectValidator;

import uml.Abstraction;
import uml.AcceptCallAction;
import uml.AcceptEventAction;
import uml.Action;
import uml.ActionExecutionSpecification;
import uml.ActionInputPin;
import uml.Activity;
import uml.ActivityContent;
import uml.ActivityEdge;
import uml.ActivityFinalNode;
import uml.ActivityGroup;
import uml.ActivityNode;
import uml.ActivityParameterNode;
import uml.ActivityPartition;
import uml.Actor;
import uml.AddStructuralFeatureValueAction;
import uml.AddVariableValueAction;
import uml.AggregationKind;
import uml.AnyReceiveEvent;
import uml.Artifact;
import uml.Association;
import uml.AssociationClass;
import uml.Behavior;
import uml.BehaviorExecutionSpecification;
import uml.BehavioralFeature;
import uml.BehavioredClassifier;
import uml.BroadcastSignalAction;
import uml.CallAction;
import uml.CallBehaviorAction;
import uml.CallConcurrencyKind;
import uml.CallEvent;
import uml.CallOperationAction;
import uml.CentralBufferNode;
import uml.ChangeEvent;
import uml.Classifier;
import uml.ClassifierTemplateParameter;
import uml.Clause;
import uml.ClearAssociationAction;
import uml.ClearStructuralFeatureAction;
import uml.ClearVariableAction;
import uml.Collaboration;
import uml.CollaborationUse;
import uml.CombinedFragment;
import uml.Comment;
import uml.CommunicationPath;
import uml.Component;
import uml.ComponentRealization;
import uml.ConditionalNode;
import uml.ConnectableElement;
import uml.ConnectableElementTemplateParameter;
import uml.ConnectionPointReference;
import uml.Connector;
import uml.ConnectorEnd;
import uml.ConnectorKind;
import uml.ConsiderIgnoreFragment;
import uml.Constraint;
import uml.Continuation;
import uml.ControlFlow;
import uml.ControlNode;
import uml.CreateLinkAction;
import uml.CreateLinkObjectAction;
import uml.CreateObjectAction;
import uml.DataStoreNode;
import uml.DataType;
import uml.DecisionNode;
import uml.Dependency;
import uml.DeployedArtifact;
import uml.Deployment;
import uml.DeploymentSpecification;
import uml.DeploymentTarget;
import uml.DestroyLinkAction;
import uml.DestroyObjectAction;
import uml.DestructionOccurrenceSpecification;
import uml.Device;
import uml.DirectedRelationship;
import uml.Duration;
import uml.DurationConstraint;
import uml.DurationInterval;
import uml.DurationObservation;
import uml.Element;
import uml.ElementImport;
import uml.EncapsulatedClassifier;
import uml.Enumeration;
import uml.EnumerationLiteral;
import uml.Event;
import uml.ExceptionHandler;
import uml.ExecutableNode;
import uml.ExecutionEnvironment;
import uml.ExecutionOccurrenceSpecification;
import uml.ExecutionSpecification;
import uml.ExpansionKind;
import uml.ExpansionNode;
import uml.ExpansionRegion;
import uml.Expression;
import uml.Extend;
import uml.Extension;
import uml.ExtensionEnd;
import uml.ExtensionPoint;
import uml.Feature;
import uml.FinalNode;
import uml.FinalState;
import uml.FlowFinalNode;
import uml.ForkNode;
import uml.FunctionBehavior;
import uml.Gate;
import uml.GeneralOrdering;
import uml.Generalization;
import uml.GeneralizationSet;
import uml.Image;
import uml.Include;
import uml.InformationFlow;
import uml.InformationItem;
import uml.InitialNode;
import uml.InputPin;
import uml.InstanceSpecification;
import uml.InstanceValue;
import uml.Interaction;
import uml.InteractionConstraint;
import uml.InteractionFragment;
import uml.InteractionOperand;
import uml.InteractionOperatorKind;
import uml.InteractionUse;
import uml.Interface;
import uml.InterfaceRealization;
import uml.InterruptibleActivityRegion;
import uml.Interval;
import uml.IntervalConstraint;
import uml.InvocationAction;
import uml.JoinNode;
import uml.Lifeline;
import uml.LinkAction;
import uml.LinkEndCreationData;
import uml.LinkEndData;
import uml.LinkEndDestructionData;
import uml.LiteralBoolean;
import uml.LiteralInteger;
import uml.LiteralNull;
import uml.LiteralReal;
import uml.LiteralSpecification;
import uml.LiteralString;
import uml.LiteralUnlimitedNatural;
import uml.LoopNode;
import uml.Manifestation;
import uml.MergeNode;
import uml.Message;
import uml.MessageEnd;
import uml.MessageEvent;
import uml.MessageKind;
import uml.MessageOccurrenceSpecification;
import uml.MessageSort;
import uml.Model;
import uml.MultiplicityElement;
import uml.NamedElement;
import uml.Namespace;
import uml.Node;
import uml.ObjectFlow;
import uml.ObjectNode;
import uml.ObjectNodeOrderingKind;
import uml.Observation;
import uml.OccurrenceSpecification;
import uml.OpaqueAction;
import uml.OpaqueBehavior;
import uml.OpaqueExpression;
import uml.Operation;
import uml.OperationTemplateParameter;
import uml.OutputPin;
import uml.PackageImport;
import uml.PackageMerge;
import uml.PackageableElement;
import uml.Parameter;
import uml.ParameterDirectionKind;
import uml.ParameterEffectKind;
import uml.ParameterSet;
import uml.ParameterableElement;
import uml.PartDecomposition;
import uml.Pin;
import uml.Port;
import uml.PrimitiveType;
import uml.Profile;
import uml.ProfileApplication;
import uml.Property;
import uml.ProtocolConformance;
import uml.ProtocolStateMachine;
import uml.ProtocolTransition;
import uml.Pseudostate;
import uml.PseudostateKind;
import uml.QualifierValue;
import uml.RaiseExceptionAction;
import uml.ReadExtentAction;
import uml.ReadIsClassifiedObjectAction;
import uml.ReadLinkAction;
import uml.ReadLinkObjectEndAction;
import uml.ReadLinkObjectEndQualifierAction;
import uml.ReadSelfAction;
import uml.ReadStructuralFeatureAction;
import uml.ReadVariableAction;
import uml.Realization;
import uml.Reception;
import uml.ReclassifyObjectAction;
import uml.RedefinableElement;
import uml.RedefinableTemplateSignature;
import uml.ReduceAction;
import uml.Region;
import uml.Relationship;
import uml.RemoveStructuralFeatureValueAction;
import uml.RemoveVariableValueAction;
import uml.ReplyAction;
import uml.SendObjectAction;
import uml.SendSignalAction;
import uml.SequenceNode;
import uml.Signal;
import uml.SignalEvent;
import uml.Slot;
import uml.StartClassifierBehaviorAction;
import uml.StartObjectBehaviorAction;
import uml.State;
import uml.StateInvariant;
import uml.StateMachine;
import uml.Stereotype;
import uml.StringExpression;
import uml.StructuralFeature;
import uml.StructuralFeatureAction;
import uml.StructuredActivityNode;
import uml.StructuredClassifier;
import uml.Substitution;
import uml.TemplateBinding;
import uml.TemplateParameter;
import uml.TemplateParameterSubstitution;
import uml.TemplateSignature;
import uml.TemplateableElement;
import uml.TestIdentityAction;
import uml.TimeConstraint;
import uml.TimeEvent;
import uml.TimeExpression;
import uml.TimeInterval;
import uml.TimeObservation;
import uml.Transition;
import uml.TransitionKind;
import uml.Trigger;
import uml.Type;
import uml.TypedElement;
import uml.UmlPackage;
import uml.UnmarshallAction;
import uml.Usage;
import uml.UseCase;
import uml.ValuePin;
import uml.ValueSpecification;
import uml.ValueSpecificationAction;
import uml.Variable;
import uml.VariableAction;
import uml.Vertex;
import uml.VisibilityKind;
import uml.WriteLinkAction;
import uml.WriteStructuralFeatureAction;
import uml.WriteVariableAction;

/**
 * <!-- begin-user-doc -->
 * The <b>Validator</b> for the model.
 * <!-- end-user-doc -->
 * @see uml.UmlPackage
 * @generated
 */
public class UmlValidator extends EObjectValidator {
	/**
	 * The cached model package
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final UmlValidator INSTANCE = new UmlValidator();

	/**
	 * A constant for the {@link org.eclipse.emf.common.util.Diagnostic#getSource() source} of diagnostic {@link org.eclipse.emf.common.util.Diagnostic#getCode() codes} from this package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see org.eclipse.emf.common.util.Diagnostic#getSource()
	 * @see org.eclipse.emf.common.util.Diagnostic#getCode()
	 * @generated
	 */
	public static final String DIAGNOSTIC_SOURCE = "uml";

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Maximum one parameter node' of 'Activity'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY__MAXIMUM_ONE_PARAMETER_NODE = 1;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Maximum two parameter nodes' of 'Activity'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY__MAXIMUM_TWO_PARAMETER_NODES = 2;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Most one behavior' of 'Behavior'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BEHAVIOR__MOST_ONE_BEHAVIOR = 3;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Parameters match' of 'Behavior'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BEHAVIOR__PARAMETERS_MATCH = 4;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Feature of context classifier' of 'Behavior'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BEHAVIOR__FEATURE_OF_CONTEXT_CLASSIFIER = 5;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Passive class' of 'Class'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASS__PASSIVE_CLASS = 6;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Class behavior' of 'Behaviored Classifier'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BEHAVIORED_CLASSIFIER__CLASS_BEHAVIOR = 7;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Specialize type' of 'Classifier'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER__SPECIALIZE_TYPE = 8;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Maps to generalization set' of 'Classifier'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER__MAPS_TO_GENERALIZATION_SET = 9;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Non final parents' of 'Classifier'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER__NON_FINAL_PARENTS = 10;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No cycles in generalization' of 'Classifier'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER__NO_CYCLES_IN_GENERALIZATION = 11;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Members distinguishable' of 'Namespace'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int NAMESPACE__MEMBERS_DISTINGUISHABLE = 12;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot import self' of 'Namespace'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int NAMESPACE__CANNOT_IMPORT_SELF = 13;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot import owned Members' of 'Namespace'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int NAMESPACE__CANNOT_IMPORT_OWNED_MEMBERS = 14;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Visibility needs ownership' of 'Named Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int NAMED_ELEMENT__VISIBILITY_NEEDS_OWNERSHIP = 15;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has qualified name' of 'Named Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int NAMED_ELEMENT__HAS_QUALIFIED_NAME = 16;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has no qualified name' of 'Named Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int NAMED_ELEMENT__HAS_NO_QUALIFIED_NAME = 17;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has owner' of 'Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ELEMENT__HAS_OWNER = 18;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not own self' of 'Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ELEMENT__NOT_OWN_SELF = 19;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Binary Associations Only' of 'Stereotype'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STEREOTYPE__BINARY_ASSOCIATIONS_ONLY = 20;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Generalize' of 'Stereotype'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STEREOTYPE__GENERALIZE = 21;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Name not clash' of 'Stereotype'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STEREOTYPE__NAME_NOT_CLASH = 22;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Association End Ownership' of 'Stereotype'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STEREOTYPE__ASSOCIATION_END_OWNERSHIP = 23;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Base property upper bound' of 'Stereotype'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STEREOTYPE__BASE_PROPERTY_UPPER_BOUND = 24;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Base property multiplicity single extension' of 'Stereotype'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STEREOTYPE__BASE_PROPERTY_MULTIPLICITY_SINGLE_EXTENSION = 25;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Base property multiplicity multiple extension' of 'Stereotype'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STEREOTYPE__BASE_PROPERTY_MULTIPLICITY_MULTIPLE_EXTENSION = 26;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Metaclass reference not specialized' of 'Profile'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROFILE__METACLASS_REFERENCE_NOT_SPECIALIZED = 27;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'References same metamodel' of 'Profile'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROFILE__REFERENCES_SAME_METAMODEL = 28;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Elements public or private' of 'Package'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PACKAGE__ELEMENTS_PUBLIC_OR_PRIVATE = 29;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Namespace needs visibility' of 'Packageable Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PACKAGEABLE_ELEMENT__NAMESPACE_NEEDS_VISIBILITY = 30;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Must be compatible' of 'Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEMPLATE_PARAMETER__MUST_BE_COMPATIBLE = 31;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Own elements' of 'Template Signature'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEMPLATE_SIGNATURE__OWN_ELEMENTS = 32;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Unique parameters' of 'Template Signature'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEMPLATE_SIGNATURE__UNIQUE_PARAMETERS = 33;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Parameter substitution formal' of 'Template Binding'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEMPLATE_BINDING__PARAMETER_SUBSTITUTION_FORMAL = 34;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One parameter substitution' of 'Template Binding'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEMPLATE_BINDING__ONE_PARAMETER_SUBSTITUTION = 35;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Must be compatible' of 'Template Parameter Substitution'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEMPLATE_PARAMETER_SUBSTITUTION__MUST_BE_COMPATIBLE = 36;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Specialized end number' of 'Association'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ASSOCIATION__SPECIALIZED_END_NUMBER = 37;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Specialized end types' of 'Association'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ASSOCIATION__SPECIALIZED_END_TYPES = 38;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Binary associations' of 'Association'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ASSOCIATION__BINARY_ASSOCIATIONS = 39;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Association ends' of 'Association'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ASSOCIATION__ASSOCIATION_ENDS = 40;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Ends must be typed' of 'Association'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ASSOCIATION__ENDS_MUST_BE_TYPED = 41;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Subsetting context conforms' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__SUBSETTING_CONTEXT_CONFORMS = 42;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Derived union is read only' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__DERIVED_UNION_IS_READ_ONLY = 43;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of composite' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__MULTIPLICITY_OF_COMPOSITE = 44;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Redefined property inherited' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__REDEFINED_PROPERTY_INHERITED = 45;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Subsetting rules' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__SUBSETTING_RULES = 46;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Binding to attribute' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__BINDING_TO_ATTRIBUTE = 47;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Derived union is derived' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__DERIVED_UNION_IS_DERIVED = 48;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Deployment target' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__DEPLOYMENT_TARGET = 49;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Subsetted property names' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__SUBSETTED_PROPERTY_NAMES = 50;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of opposite end' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__TYPE_OF_OPPOSITE_END = 51;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Qualified is association end' of 'Property'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROPERTY__QUALIFIED_IS_ASSOCIATION_END = 52;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Role and part with port' of 'Connector End'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTOR_END__ROLE_AND_PART_WITH_PORT = 53;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Part with port empty' of 'Connector End'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTOR_END__PART_WITH_PORT_EMPTY = 54;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Connector End'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTOR_END__MULTIPLICITY = 55;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Self part with port' of 'Connector End'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTOR_END__SELF_PART_WITH_PORT = 56;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Upper ge lower' of 'Multiplicity Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MULTIPLICITY_ELEMENT__UPPER_GE_LOWER = 57;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Lower ge 0' of 'Multiplicity Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MULTIPLICITY_ELEMENT__LOWER_GE_0 = 58;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Value specification no side effects' of 'Multiplicity Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MULTIPLICITY_ELEMENT__VALUE_SPECIFICATION_NO_SIDE_EFFECTS = 59;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Value specification constant' of 'Multiplicity Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MULTIPLICITY_ELEMENT__VALUE_SPECIFICATION_CONSTANT = 60;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Lower is integer' of 'Multiplicity Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MULTIPLICITY_ELEMENT__LOWER_IS_INTEGER = 61;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Upper is unlimited Natural' of 'Multiplicity Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MULTIPLICITY_ELEMENT__UPPER_IS_UNLIMITED_NATURAL = 62;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Deployment target' of 'Deployment Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DEPLOYMENT_SPECIFICATION__DEPLOYMENT_TARGET = 63;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Deployed elements' of 'Deployment Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DEPLOYMENT_SPECIFICATION__DEPLOYED_ELEMENTS = 64;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Language body size' of 'Opaque Expression'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OPAQUE_EXPRESSION__LANGUAGE_BODY_SIZE = 65;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One return result parameter' of 'Opaque Expression'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OPAQUE_EXPRESSION__ONE_RETURN_RESULT_PARAMETER = 66;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Only return result parameters' of 'Opaque Expression'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OPAQUE_EXPRESSION__ONLY_RETURN_RESULT_PARAMETERS = 67;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'In and out' of 'Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER__IN_AND_OUT = 68;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not exception' of 'Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER__NOT_EXCEPTION = 69;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Connector end' of 'Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER__CONNECTOR_END = 70;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Reentrant behaviors' of 'Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER__REENTRANT_BEHAVIORS = 71;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Stream and exception' of 'Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER__STREAM_AND_EXCEPTION = 72;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Object effect' of 'Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER__OBJECT_EFFECT = 73;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'At most one return' of 'Operation'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OPERATION__AT_MOST_ONE_RETURN = 74;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Only body for query' of 'Operation'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OPERATION__ONLY_BODY_FOR_QUERY = 75;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Abstract no method' of 'Behavioral Feature'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BEHAVIORAL_FEATURE__ABSTRACT_NO_METHOD = 76;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Redefinition consistent' of 'Redefinable Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REDEFINABLE_ELEMENT__REDEFINITION_CONSISTENT = 77;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Non leaf redefinition' of 'Redefinable Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REDEFINABLE_ELEMENT__NON_LEAF_REDEFINITION = 78;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Redefinition context valid' of 'Redefinable Element'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REDEFINABLE_ELEMENT__REDEFINITION_CONTEXT_VALID = 79;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same parameterized entity' of 'Parameter Set'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER_SET__SAME_PARAMETERIZED_ENTITY = 80;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input' of 'Parameter Set'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER_SET__INPUT = 81;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Two parameter sets' of 'Parameter Set'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PARAMETER_SET__TWO_PARAMETER_SETS = 82;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Boolean value' of 'Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONSTRAINT__BOOLEAN_VALUE = 83;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No side effects' of 'Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONSTRAINT__NO_SIDE_EFFECTS = 84;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not apply to self' of 'Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONSTRAINT__NOT_APPLY_TO_SELF = 85;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Visibility' of 'Interface'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERFACE__VISIBILITY = 86;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same name as signal' of 'Reception'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int RECEPTION__SAME_NAME_AS_SIGNAL = 87;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same structure as signal' of 'Reception'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int RECEPTION__SAME_STRUCTURE_AS_SIGNAL = 88;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Deep or shallow history' of 'Protocol State Machine'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROTOCOL_STATE_MACHINE__DEEP_OR_SHALLOW_HISTORY = 89;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Entry exit do' of 'Protocol State Machine'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROTOCOL_STATE_MACHINE__ENTRY_EXIT_DO = 90;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Protocol transitions' of 'Protocol State Machine'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROTOCOL_STATE_MACHINE__PROTOCOL_TRANSITIONS = 91;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Connection points' of 'State Machine'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE_MACHINE__CONNECTION_POINTS = 92;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Classifier context' of 'State Machine'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE_MACHINE__CLASSIFIER_CONTEXT = 93;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Method' of 'State Machine'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE_MACHINE__METHOD = 94;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Context classifier' of 'State Machine'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE_MACHINE__CONTEXT_CLASSIFIER = 95;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Transitions outgoing' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__TRANSITIONS_OUTGOING = 96;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Choice vertex' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__CHOICE_VERTEX = 97;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Outgoing from initial' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__OUTGOING_FROM_INITIAL = 98;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Join vertex' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__JOIN_VERTEX = 99;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Junction vertex' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__JUNCTION_VERTEX = 100;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'History vertices' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__HISTORY_VERTICES = 101;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Initial vertex' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__INITIAL_VERTEX = 102;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Fork vertex' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__FORK_VERTEX = 103;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Transitions incoming' of 'Pseudostate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PSEUDOSTATE__TRANSITIONS_INCOMING = 104;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Deep history vertex' of 'Region'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REGION__DEEP_HISTORY_VERTEX = 105;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Shallow history vertex' of 'Region'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REGION__SHALLOW_HISTORY_VERTEX = 106;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Owned' of 'Region'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REGION__OWNED = 107;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Initial vertex' of 'Region'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REGION__INITIAL_VERTEX = 108;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Entry or exit' of 'State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE__ENTRY_OR_EXIT = 109;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Submachine states' of 'State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE__SUBMACHINE_STATES = 110;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Composite states' of 'State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE__COMPOSITE_STATES = 111;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Destinations or sources of transitions' of 'State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE__DESTINATIONS_OR_SOURCES_OF_TRANSITIONS = 112;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Submachine or regions' of 'State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STATE__SUBMACHINE_OR_REGIONS = 113;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Exit pseudostates' of 'Connection Point Reference'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTION_POINT_REFERENCE__EXIT_PSEUDOSTATES = 114;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Entry pseudostates' of 'Connection Point Reference'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTION_POINT_REFERENCE__ENTRY_PSEUDOSTATES = 115;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Trigger with ports' of 'Trigger'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRIGGER__TRIGGER_WITH_PORTS = 116;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Port aggregation' of 'Port'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PORT__PORT_AGGREGATION = 117;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Default value' of 'Port'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PORT__DEFAULT_VALUE = 118;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Encapsulated owner' of 'Port'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PORT__ENCAPSULATED_OWNER = 119;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'State is external' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__STATE_IS_EXTERNAL = 120;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Join segment guards' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__JOIN_SEGMENT_GUARDS = 121;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'State is internal' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__STATE_IS_INTERNAL = 122;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Outgoing pseudostates' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__OUTGOING_PSEUDOSTATES = 123;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Join segment state' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__JOIN_SEGMENT_STATE = 124;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Fork segment state' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__FORK_SEGMENT_STATE = 125;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'State is local' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__STATE_IS_LOCAL = 126;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Initial transition' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__INITIAL_TRANSITION = 127;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Fork segment guards' of 'Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TRANSITION__FORK_SEGMENT_GUARDS = 128;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Match default signature' of 'Operation Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OPERATION_TEMPLATE_PARAMETER__MATCH_DEFAULT_SIGNATURE = 129;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Immutable' of 'Enumeration'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ENUMERATION__IMMUTABLE = 130;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Deployment artifact' of 'Instance Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INSTANCE_SPECIFICATION__DEPLOYMENT_ARTIFACT = 131;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Structural feature' of 'Instance Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INSTANCE_SPECIFICATION__STRUCTURAL_FEATURE = 132;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Defining feature' of 'Instance Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INSTANCE_SPECIFICATION__DEFINING_FEATURE = 133;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Deployment target' of 'Instance Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INSTANCE_SPECIFICATION__DEPLOYMENT_TARGET = 134;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Imported element is public' of 'Element Import'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ELEMENT_IMPORT__IMPORTED_ELEMENT_IS_PUBLIC = 135;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Visibility public or private' of 'Element Import'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ELEMENT_IMPORT__VISIBILITY_PUBLIC_OR_PRIVATE = 136;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Public or private' of 'Package Import'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PACKAGE_IMPORT__PUBLIC_OR_PRIVATE = 137;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Non owned end' of 'Extension'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXTENSION__NON_OWNED_END = 138;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Is binary' of 'Extension'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXTENSION__IS_BINARY = 139;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Extension End'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXTENSION_END__MULTIPLICITY = 140;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Aggregation' of 'Extension End'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXTENSION_END__AGGREGATION = 141;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Operands' of 'String Expression'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRING_EXPRESSION__OPERANDS = 142;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Subexpressions' of 'String Expression'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRING_EXPRESSION__SUBEXPRESSIONS = 143;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Client elements' of 'Collaboration Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COLLABORATION_USE__CLIENT_ELEMENTS = 144;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Every role' of 'Collaboration Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COLLABORATION_USE__EVERY_ROLE = 145;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Connectors' of 'Collaboration Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COLLABORATION_USE__CONNECTORS = 146;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Types' of 'Connector'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTOR__TYPES = 147;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Roles' of 'Connector'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONNECTOR__ROLES = 148;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Generalization same classifier' of 'Generalization Set'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GENERALIZATION_SET__GENERALIZATION_SAME_CLASSIFIER = 149;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Maps to generalization set' of 'Generalization Set'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GENERALIZATION_SET__MAPS_TO_GENERALIZATION_SET = 150;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Redefines parents' of 'Redefinable Template Signature'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REDEFINABLE_TEMPLATE_SIGNATURE__REDEFINES_PARENTS = 151;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Binary associations' of 'Use Case'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int USE_CASE__BINARY_ASSOCIATIONS = 152;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No association to use case' of 'Use Case'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int USE_CASE__NO_ASSOCIATION_TO_USE_CASE = 153;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot include self' of 'Use Case'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int USE_CASE__CANNOT_INCLUDE_SELF = 154;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Must have name' of 'Use Case'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int USE_CASE__MUST_HAVE_NAME = 155;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Extension points' of 'Extend'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXTEND__EXTENSION_POINTS = 156;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Must have name' of 'Extension Point'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXTENSION_POINT__MUST_HAVE_NAME = 157;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has constraining classifier' of 'Classifier Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER_TEMPLATE_PARAMETER__HAS_CONSTRAINING_CLASSIFIER = 158;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Parametered element no features' of 'Classifier Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER_TEMPLATE_PARAMETER__PARAMETERED_ELEMENT_NO_FEATURES = 159;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Matching abstract' of 'Classifier Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER_TEMPLATE_PARAMETER__MATCHING_ABSTRACT = 160;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Actual is classifier' of 'Classifier Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER_TEMPLATE_PARAMETER__ACTUAL_IS_CLASSIFIER = 161;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Constraining classifiers constrain args' of 'Classifier Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER_TEMPLATE_PARAMETER__CONSTRAINING_CLASSIFIERS_CONSTRAIN_ARGS = 162;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Constraining classifiers constrain parametered element' of 'Classifier Template Parameter'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLASSIFIER_TEMPLATE_PARAMETER__CONSTRAINING_CLASSIFIERS_CONSTRAIN_PARAMETERED_ELEMENT = 163;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Nodes and edges' of 'Activity Group'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_GROUP__NODES_AND_EDGES = 164;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not contained' of 'Activity Group'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_GROUP__NOT_CONTAINED = 165;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Source and target' of 'Activity Edge'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_EDGE__SOURCE_AND_TARGET = 166;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Represents classifier' of 'Activity Partition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARTITION__REPRESENTS_CLASSIFIER = 167;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Represents property and is contained' of 'Activity Partition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARTITION__REPRESENTS_PROPERTY_AND_IS_CONTAINED = 168;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Represents property' of 'Activity Partition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARTITION__REPRESENTS_PROPERTY = 169;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Dimension not contained' of 'Activity Partition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARTITION__DIMENSION_NOT_CONTAINED = 170;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Interrupting edges' of 'Interruptible Activity Region'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERRUPTIBLE_ACTIVITY_REGION__INTERRUPTING_EDGES = 171;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Output pin edges' of 'Structured Activity Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURED_ACTIVITY_NODE__OUTPUT_PIN_EDGES = 172;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Edges' of 'Structured Activity Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURED_ACTIVITY_NODE__EDGES = 173;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input pin edges' of 'Structured Activity Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURED_ACTIVITY_NODE__INPUT_PIN_EDGES = 174;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Handler body edges' of 'Exception Handler'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXCEPTION_HANDLER__HANDLER_BODY_EDGES = 175;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Output pins' of 'Exception Handler'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXCEPTION_HANDLER__OUTPUT_PINS = 176;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One input' of 'Exception Handler'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXCEPTION_HANDLER__ONE_INPUT = 177;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Edge source target' of 'Exception Handler'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXCEPTION_HANDLER__EDGE_SOURCE_TARGET = 178;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Handler body owner' of 'Exception Handler'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXCEPTION_HANDLER__HANDLER_BODY_OWNER = 179;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Exception input type' of 'Exception Handler'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXCEPTION_HANDLER__EXCEPTION_INPUT_TYPE = 180;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input output parameter' of 'Object Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_NODE__INPUT_OUTPUT_PARAMETER = 181;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Selection behavior' of 'Object Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_NODE__SELECTION_BEHAVIOR = 182;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Object flow edges' of 'Object Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_NODE__OBJECT_FLOW_EDGES = 183;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Outgoing edges structured only' of 'Input Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INPUT_PIN__OUTGOING_EDGES_STRUCTURED_ONLY = 184;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Control pins' of 'Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PIN__CONTROL_PINS = 185;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not unique' of 'Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PIN__NOT_UNIQUE = 186;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Incoming edges structured only' of 'Output Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OUTPUT_PIN__INCOMING_EDGES_STRUCTURED_ONLY = 187;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Value Specification Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int VALUE_SPECIFICATION_ACTION__MULTIPLICITY = 188;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Compatible type' of 'Value Specification Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int VALUE_SPECIFICATION_ACTION__COMPATIBLE_TYPE = 189;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Scope of variable' of 'Variable Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int VARIABLE_ACTION__SCOPE_OF_VARIABLE = 190;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Allow access' of 'Write Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int WRITE_LINK_ACTION__ALLOW_ACCESS = 191;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same pins' of 'Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_ACTION__SAME_PINS = 192;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same association' of 'Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_ACTION__SAME_ASSOCIATION = 193;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not static' of 'Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_ACTION__NOT_STATIC = 194;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same type' of 'Link End Data'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_END_DATA__SAME_TYPE = 195;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Link End Data'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_END_DATA__MULTIPLICITY = 196;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'End object input pin' of 'Link End Data'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_END_DATA__END_OBJECT_INPUT_PIN = 197;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Property is association end' of 'Link End Data'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_END_DATA__PROPERTY_IS_ASSOCIATION_END = 198;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Qualifiers' of 'Link End Data'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_END_DATA__QUALIFIERS = 199;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of qualifier' of 'Qualifier Value'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int QUALIFIER_VALUE__MULTIPLICITY_OF_QUALIFIER = 200;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of qualifier' of 'Qualifier Value'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int QUALIFIER_VALUE__TYPE_OF_QUALIFIER = 201;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Qualifier attribute' of 'Qualifier Value'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int QUALIFIER_VALUE__QUALIFIER_ATTRIBUTE = 202;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of result' of 'Write Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int WRITE_STRUCTURAL_FEATURE_ACTION__MULTIPLICITY_OF_RESULT = 203;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of value' of 'Write Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int WRITE_STRUCTURAL_FEATURE_ACTION__TYPE_OF_VALUE = 204;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of value' of 'Write Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int WRITE_STRUCTURAL_FEATURE_ACTION__MULTIPLICITY_OF_VALUE = 205;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of result' of 'Write Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int WRITE_STRUCTURAL_FEATURE_ACTION__TYPE_OF_RESULT = 206;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURAL_FEATURE_ACTION__MULTIPLICITY = 207;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Object type' of 'Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURAL_FEATURE_ACTION__OBJECT_TYPE = 208;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Visibility' of 'Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURAL_FEATURE_ACTION__VISIBILITY = 209;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not static' of 'Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURAL_FEATURE_ACTION__NOT_STATIC = 210;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One featuring classifier' of 'Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int STRUCTURAL_FEATURE_ACTION__ONE_FEATURING_CLASSIFIER = 211;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Value type' of 'Write Variable Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int WRITE_VARIABLE_ACTION__VALUE_TYPE = 212;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Write Variable Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int WRITE_VARIABLE_ACTION__MULTIPLICITY = 213;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Result pins' of 'Accept Call Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_CALL_ACTION__RESULT_PINS = 214;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Trigger call event' of 'Accept Call Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_CALL_ACTION__TRIGGER_CALL_EVENT = 215;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Unmarshall' of 'Accept Call Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_CALL_ACTION__UNMARSHALL = 216;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One output pin' of 'Accept Event Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_EVENT_ACTION__ONE_OUTPUT_PIN = 217;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No input pins' of 'Accept Event Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_EVENT_ACTION__NO_INPUT_PINS = 218;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No output pins' of 'Accept Event Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_EVENT_ACTION__NO_OUTPUT_PINS = 219;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Unmarshall signal events' of 'Accept Event Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_EVENT_ACTION__UNMARSHALL_SIGNAL_EVENTS = 220;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Conforming type' of 'Accept Event Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACCEPT_EVENT_ACTION__CONFORMING_TYPE = 221;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input pin' of 'Action Input Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTION_INPUT_PIN__INPUT_PIN = 222;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One output pin' of 'Action Input Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTION_INPUT_PIN__ONE_OUTPUT_PIN = 223;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No control or object flow' of 'Action Input Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTION_INPUT_PIN__NO_CONTROL_OR_OBJECT_FLOW = 224;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Required value' of 'Add Structural Feature Value Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ADD_STRUCTURAL_FEATURE_VALUE_ACTION__REQUIRED_VALUE = 225;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Insert At pin' of 'Add Structural Feature Value Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ADD_STRUCTURAL_FEATURE_VALUE_ACTION__INSERT_AT_PIN = 226;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Required value' of 'Add Variable Value Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ADD_VARIABLE_VALUE_ACTION__REQUIRED_VALUE = 227;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Insert At pin' of 'Add Variable Value Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ADD_VARIABLE_VALUE_ACTION__INSERT_AT_PIN = 228;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Number of arguments' of 'Broadcast Signal Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BROADCAST_SIGNAL_ACTION__NUMBER_OF_ARGUMENTS = 229;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type ordering multiplicity' of 'Broadcast Signal Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BROADCAST_SIGNAL_ACTION__TYPE_ORDERING_MULTIPLICITY = 230;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No onport' of 'Broadcast Signal Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int BROADCAST_SIGNAL_ACTION__NO_ONPORT = 231;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Argument pins' of 'Call Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CALL_ACTION__ARGUMENT_PINS = 232;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Result pins' of 'Call Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CALL_ACTION__RESULT_PINS = 233;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Synchronous call' of 'Call Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CALL_ACTION__SYNCHRONOUS_CALL = 234;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No onport' of 'Call Behavior Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CALL_BEHAVIOR_ACTION__NO_ONPORT = 235;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type target pin' of 'Call Operation Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CALL_OPERATION_ACTION__TYPE_TARGET_PIN = 236;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Body output pins' of 'Clause'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLAUSE__BODY_OUTPUT_PINS = 237;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Decider output' of 'Clause'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLAUSE__DECIDER_OUTPUT = 238;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Test and body' of 'Clause'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLAUSE__TEST_AND_BODY = 239;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Clear Association Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLEAR_ASSOCIATION_ACTION__MULTIPLICITY = 240;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same type' of 'Clear Association Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLEAR_ASSOCIATION_ACTION__SAME_TYPE = 241;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of result' of 'Clear Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLEAR_STRUCTURAL_FEATURE_ACTION__TYPE_OF_RESULT = 242;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of result' of 'Clear Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CLEAR_STRUCTURAL_FEATURE_ACTION__MULTIPLICITY_OF_RESULT = 243;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Result no incoming' of 'Conditional Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONDITIONAL_NODE__RESULT_NO_INCOMING = 244;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No input pins' of 'Conditional Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONDITIONAL_NODE__NO_INPUT_PINS = 245;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One clause with executable node' of 'Conditional Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONDITIONAL_NODE__ONE_CLAUSE_WITH_EXECUTABLE_NODE = 246;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Matching output pins' of 'Conditional Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONDITIONAL_NODE__MATCHING_OUTPUT_PINS = 247;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Executable nodes' of 'Conditional Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONDITIONAL_NODE__EXECUTABLE_NODES = 248;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Clause no predecessor' of 'Conditional Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONDITIONAL_NODE__CLAUSE_NO_PREDECESSOR = 249;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Association not abstract' of 'Create Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_LINK_ACTION__ASSOCIATION_NOT_ABSTRACT = 250;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Insert At pin' of 'Link End Creation Data'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_END_CREATION_DATA__INSERT_AT_PIN = 251;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Create Link Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_LINK_OBJECT_ACTION__MULTIPLICITY = 252;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of result' of 'Create Link Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_LINK_OBJECT_ACTION__TYPE_OF_RESULT = 253;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Association class' of 'Create Link Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_LINK_OBJECT_ACTION__ASSOCIATION_CLASS = 254;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Classifier not abstract' of 'Create Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_OBJECT_ACTION__CLASSIFIER_NOT_ABSTRACT = 255;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Create Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_OBJECT_ACTION__MULTIPLICITY = 256;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Classifier not association class' of 'Create Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_OBJECT_ACTION__CLASSIFIER_NOT_ASSOCIATION_CLASS = 257;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same type' of 'Create Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CREATE_OBJECT_ACTION__SAME_TYPE = 258;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Destroy At pin' of 'Link End Destruction Data'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LINK_END_DESTRUCTION_DATA__DESTROY_AT_PIN = 259;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Destroy Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DESTROY_OBJECT_ACTION__MULTIPLICITY = 260;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No type' of 'Destroy Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DESTROY_OBJECT_ACTION__NO_TYPE = 261;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Region as input or output' of 'Expansion Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXPANSION_NODE__REGION_AS_INPUT_OR_OUTPUT = 262;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Result no incoming' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__RESULT_NO_INCOMING = 263;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input edges' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__INPUT_EDGES = 264;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Executable nodes' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__EXECUTABLE_NODES = 265;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Body output pins' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__BODY_OUTPUT_PINS = 266;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Setup test and body' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__SETUP_TEST_AND_BODY = 267;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Matching output pins' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__MATCHING_OUTPUT_PINS = 268;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Matching loop variables' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__MATCHING_LOOP_VARIABLES = 269;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Matching result pins' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__MATCHING_RESULT_PINS = 270;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Loop variable outgoing' of 'Loop Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LOOP_NODE__LOOP_VARIABLE_OUTGOING = 271;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Language body size' of 'Opaque Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OPAQUE_ACTION__LANGUAGE_BODY_SIZE = 272;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type is classifier' of 'Read Extent Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_EXTENT_ACTION__TYPE_IS_CLASSIFIER = 273;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of result' of 'Read Extent Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_EXTENT_ACTION__MULTIPLICITY_OF_RESULT = 274;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No type' of 'Read Is Classified Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_IS_CLASSIFIED_OBJECT_ACTION__NO_TYPE = 275;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of output' of 'Read Is Classified Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_IS_CLASSIFIED_OBJECT_ACTION__MULTIPLICITY_OF_OUTPUT = 276;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Boolean result' of 'Read Is Classified Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_IS_CLASSIFIED_OBJECT_ACTION__BOOLEAN_RESULT = 277;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of input' of 'Read Is Classified Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_IS_CLASSIFIED_OBJECT_ACTION__MULTIPLICITY_OF_INPUT = 278;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type and ordering' of 'Read Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_ACTION__TYPE_AND_ORDERING = 279;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Compatible multiplicity' of 'Read Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_ACTION__COMPATIBLE_MULTIPLICITY = 280;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Visibility' of 'Read Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_ACTION__VISIBILITY = 281;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One open end' of 'Read Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_ACTION__ONE_OPEN_END = 282;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Navigable open end' of 'Read Link Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_ACTION__NAVIGABLE_OPEN_END = 283;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Property' of 'Read Link Object End Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_ACTION__PROPERTY = 284;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of object' of 'Read Link Object End Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_ACTION__MULTIPLICITY_OF_OBJECT = 285;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Ends of association' of 'Read Link Object End Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_ACTION__ENDS_OF_ASSOCIATION = 286;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of result' of 'Read Link Object End Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_ACTION__TYPE_OF_RESULT = 287;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of result' of 'Read Link Object End Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_ACTION__MULTIPLICITY_OF_RESULT = 288;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of object' of 'Read Link Object End Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_ACTION__TYPE_OF_OBJECT = 289;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Association of association' of 'Read Link Object End Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_ACTION__ASSOCIATION_OF_ASSOCIATION = 290;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of object' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__MULTIPLICITY_OF_OBJECT = 291;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of object' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__TYPE_OF_OBJECT = 292;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of qualifier' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__MULTIPLICITY_OF_QUALIFIER = 293;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Ends of association' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__ENDS_OF_ASSOCIATION = 294;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of result' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__MULTIPLICITY_OF_RESULT = 295;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same type' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__SAME_TYPE = 296;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Association of association' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__ASSOCIATION_OF_ASSOCIATION = 297;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Qualifier attribute' of 'Read Link Object End Qualifier Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_LINK_OBJECT_END_QUALIFIER_ACTION__QUALIFIER_ATTRIBUTE = 298;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Contained' of 'Read Self Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_SELF_ACTION__CONTAINED = 299;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Read Self Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_SELF_ACTION__MULTIPLICITY = 300;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not static' of 'Read Self Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_SELF_ACTION__NOT_STATIC = 301;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type' of 'Read Self Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_SELF_ACTION__TYPE = 302;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type and ordering' of 'Read Structural Feature Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_STRUCTURAL_FEATURE_ACTION__TYPE_AND_ORDERING = 303;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type and ordering' of 'Read Variable Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_VARIABLE_ACTION__TYPE_AND_ORDERING = 304;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Compatible multiplicity' of 'Read Variable Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int READ_VARIABLE_ACTION__COMPATIBLE_MULTIPLICITY = 305;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input pin' of 'Reclassify Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int RECLASSIFY_OBJECT_ACTION__INPUT_PIN = 306;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Classifier not abstract' of 'Reclassify Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int RECLASSIFY_OBJECT_ACTION__CLASSIFIER_NOT_ABSTRACT = 307;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Reclassify Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int RECLASSIFY_OBJECT_ACTION__MULTIPLICITY = 308;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Reducer inputs output' of 'Reduce Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REDUCE_ACTION__REDUCER_INPUTS_OUTPUT = 309;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input type is collection' of 'Reduce Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REDUCE_ACTION__INPUT_TYPE_IS_COLLECTION = 310;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Output types are compatible' of 'Reduce Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REDUCE_ACTION__OUTPUT_TYPES_ARE_COMPATIBLE = 311;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Remove At and value' of 'Remove Structural Feature Value Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REMOVE_STRUCTURAL_FEATURE_VALUE_ACTION__REMOVE_AT_AND_VALUE = 312;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Remove At and value' of 'Remove Variable Value Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REMOVE_VARIABLE_VALUE_ACTION__REMOVE_AT_AND_VALUE = 313;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Pins match parameter' of 'Reply Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REPLY_ACTION__PINS_MATCH_PARAMETER = 314;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Event on reply to call trigger' of 'Reply Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int REPLY_ACTION__EVENT_ON_REPLY_TO_CALL_TRIGGER = 315;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type target pin' of 'Send Object Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int SEND_OBJECT_ACTION__TYPE_TARGET_PIN = 316;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type ordering multiplicity' of 'Send Signal Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int SEND_SIGNAL_ACTION__TYPE_ORDERING_MULTIPLICITY = 317;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Number order' of 'Send Signal Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int SEND_SIGNAL_ACTION__NUMBER_ORDER = 318;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type target pin' of 'Send Signal Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int SEND_SIGNAL_ACTION__TYPE_TARGET_PIN = 319;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Start Classifier Behavior Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int START_CLASSIFIER_BEHAVIOR_ACTION__MULTIPLICITY = 320;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type has classifier' of 'Start Classifier Behavior Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int START_CLASSIFIER_BEHAVIOR_ACTION__TYPE_HAS_CLASSIFIER = 321;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of object' of 'Start Object Behavior Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int START_OBJECT_BEHAVIOR_ACTION__MULTIPLICITY_OF_OBJECT = 322;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type of object' of 'Start Object Behavior Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int START_OBJECT_BEHAVIOR_ACTION__TYPE_OF_OBJECT = 323;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No onport' of 'Start Object Behavior Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int START_OBJECT_BEHAVIOR_ACTION__NO_ONPORT = 324;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity' of 'Test Identity Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEST_IDENTITY_ACTION__MULTIPLICITY = 325;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No type' of 'Test Identity Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEST_IDENTITY_ACTION__NO_TYPE = 326;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Result is boolean' of 'Test Identity Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TEST_IDENTITY_ACTION__RESULT_IS_BOOLEAN = 327;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Structural feature' of 'Unmarshall Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int UNMARSHALL_ACTION__STRUCTURAL_FEATURE = 328;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Number of result' of 'Unmarshall Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int UNMARSHALL_ACTION__NUMBER_OF_RESULT = 329;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type ordering and multiplicity' of 'Unmarshall Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int UNMARSHALL_ACTION__TYPE_ORDERING_AND_MULTIPLICITY = 330;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Multiplicity of object' of 'Unmarshall Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int UNMARSHALL_ACTION__MULTIPLICITY_OF_OBJECT = 331;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Object type' of 'Unmarshall Action'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int UNMARSHALL_ACTION__OBJECT_TYPE = 332;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No incoming edges' of 'Value Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int VALUE_PIN__NO_INCOMING_EDGES = 333;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Compatible type' of 'Value Pin'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int VALUE_PIN__COMPATIBLE_TYPE = 334;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No outgoing edges' of 'Final Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FINAL_NODE__NO_OUTGOING_EDGES = 335;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No outgoing edges' of 'Activity Parameter Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARAMETER_NODE__NO_OUTGOING_EDGES = 336;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has parameters' of 'Activity Parameter Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARAMETER_NODE__HAS_PARAMETERS = 337;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same type' of 'Activity Parameter Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARAMETER_NODE__SAME_TYPE = 338;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No incoming edges' of 'Activity Parameter Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARAMETER_NODE__NO_INCOMING_EDGES = 339;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No edges' of 'Activity Parameter Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTIVITY_PARAMETER_NODE__NO_EDGES = 340;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Object nodes' of 'Control Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONTROL_FLOW__OBJECT_NODES = 341;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Zero input parameters' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__ZERO_INPUT_PARAMETERS = 342;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Edges' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__EDGES = 343;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Decision input flow incoming' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__DECISION_INPUT_FLOW_INCOMING = 344;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Two input parameters' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__TWO_INPUT_PARAMETERS = 345;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Incoming outgoing edges' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__INCOMING_OUTGOING_EDGES = 346;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Incoming control one input parameter' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__INCOMING_CONTROL_ONE_INPUT_PARAMETER = 347;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Parameters' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__PARAMETERS = 348;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Incoming object one input parameter' of 'Decision Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DECISION_NODE__INCOMING_OBJECT_ONE_INPUT_PARAMETER = 349;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Input and output parameter' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__INPUT_AND_OUTPUT_PARAMETER = 350;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No executable nodes' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__NO_EXECUTABLE_NODES = 351;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Transformation behavior' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__TRANSFORMATION_BEHAVIOR = 352;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Selection behavior' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__SELECTION_BEHAVIOR = 353;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Compatible types' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__COMPATIBLE_TYPES = 354;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same upper bounds' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__SAME_UPPER_BOUNDS = 355;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Target' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__TARGET = 356;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Is multicast or is multireceive' of 'Object Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int OBJECT_FLOW__IS_MULTICAST_OR_IS_MULTIRECEIVE = 357;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Edges' of 'Fork Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FORK_NODE__EDGES = 358;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One incoming edge' of 'Fork Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FORK_NODE__ONE_INCOMING_EDGE = 359;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No incoming edges' of 'Initial Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INITIAL_NODE__NO_INCOMING_EDGES = 360;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Control edges' of 'Initial Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INITIAL_NODE__CONTROL_EDGES = 361;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One outgoing edge' of 'Join Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int JOIN_NODE__ONE_OUTGOING_EDGE = 362;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Incoming object flow' of 'Join Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int JOIN_NODE__INCOMING_OBJECT_FLOW = 363;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One outgoing edge' of 'Merge Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MERGE_NODE__ONE_OUTGOING_EDGE = 364;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Edges' of 'Merge Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MERGE_NODE__EDGES = 365;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'One output parameter' of 'Function Behavior'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FUNCTION_BEHAVIOR__ONE_OUTPUT_PARAMETER = 366;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Types of parameters' of 'Function Behavior'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FUNCTION_BEHAVIOR__TYPES_OF_PARAMETERS = 367;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'When non negative' of 'Time Event'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TIME_EVENT__WHEN_NON_NEGATIVE = 368;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No expr requires observation' of 'Time Expression'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TIME_EXPRESSION__NO_EXPR_REQUIRES_OBSERVATION = 369;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Internal structure' of 'Node'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int NODE__INTERNAL_STRUCTURE = 370;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Must conform' of 'Information Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INFORMATION_FLOW__MUST_CONFORM = 371;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Sources and targets kind' of 'Information Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INFORMATION_FLOW__SOURCES_AND_TARGETS_KIND = 372;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Convey classifiers' of 'Information Flow'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INFORMATION_FLOW__CONVEY_CLASSIFIERS = 373;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Sending receiving message event' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__SENDING_RECEIVING_MESSAGE_EVENT = 374;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Arguments' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__ARGUMENTS = 375;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot cross boundaries' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__CANNOT_CROSS_BOUNDARIES = 376;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Signature is signal' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__SIGNATURE_IS_SIGNAL = 377;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Occurrence specifications' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__OCCURRENCE_SPECIFICATIONS = 378;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Signature refer to' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__SIGNATURE_REFER_TO = 379;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Signature is operation request' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__SIGNATURE_IS_OPERATION_REQUEST = 380;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Signature is operation reply' of 'Message'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int MESSAGE__SIGNATURE_IS_OPERATION_REPLY = 381;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not contained' of 'Interaction'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION__NOT_CONTAINED = 382;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Selector specified' of 'Lifeline'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LIFELINE__SELECTOR_SPECIFIED = 383;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Interaction uses share lifeline' of 'Lifeline'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LIFELINE__INTERACTION_USES_SHARE_LIFELINE = 384;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same classifier' of 'Lifeline'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LIFELINE__SAME_CLASSIFIER = 385;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Selector int or string' of 'Lifeline'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int LIFELINE__SELECTOR_INT_OR_STRING = 386;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Commutativity of decomposition' of 'Part Decomposition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PART_DECOMPOSITION__COMMUTATIVITY_OF_DECOMPOSITION = 387;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Assume' of 'Part Decomposition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PART_DECOMPOSITION__ASSUME = 388;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Parts of internal structures' of 'Part Decomposition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PART_DECOMPOSITION__PARTS_OF_INTERNAL_STRUCTURES = 389;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Gates match' of 'Interaction Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_USE__GATES_MATCH = 390;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Arguments are constants' of 'Interaction Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_USE__ARGUMENTS_ARE_CONSTANTS = 391;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Return Value Recipient coverage' of 'Interaction Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_USE__RETURN_VALUE_RECIPIENT_COVERAGE = 392;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Arguments correspond to parameters' of 'Interaction Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_USE__ARGUMENTS_CORRESPOND_TO_PARAMETERS = 393;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Return Value type recipient correspondence' of 'Interaction Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_USE__RETURN_VALUE_TYPE_RECIPIENT_CORRESPONDENCE = 394;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'All lifelines' of 'Interaction Use'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_USE__ALL_LIFELINES = 395;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Actual gate matched' of 'Gate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GATE__ACTUAL_GATE_MATCHED = 396;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Inside cf matched' of 'Gate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GATE__INSIDE_CF_MATCHED = 397;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Outside cf matched' of 'Gate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GATE__OUTSIDE_CF_MATCHED = 398;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Formal gate distinguishable' of 'Gate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GATE__FORMAL_GATE_DISTINGUISHABLE = 399;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Actual gate distinguishable' of 'Gate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GATE__ACTUAL_GATE_DISTINGUISHABLE = 400;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Outside cf gate distinguishable' of 'Gate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GATE__OUTSIDE_CF_GATE_DISTINGUISHABLE = 401;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Inside cf gate distinguishable' of 'Gate'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GATE__INSIDE_CF_GATE_DISTINGUISHABLE = 402;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Guard contain references' of 'Interaction Operand'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_OPERAND__GUARD_CONTAIN_REFERENCES = 403;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Guard directly prior' of 'Interaction Operand'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_OPERAND__GUARD_DIRECTLY_PRIOR = 404;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Minint maxint' of 'Interaction Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_CONSTRAINT__MININT_MAXINT = 405;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Minint non negative' of 'Interaction Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_CONSTRAINT__MININT_NON_NEGATIVE = 406;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Maxint positive' of 'Interaction Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_CONSTRAINT__MAXINT_POSITIVE = 407;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Dynamic variables' of 'Interaction Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_CONSTRAINT__DYNAMIC_VARIABLES = 408;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Global data' of 'Interaction Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_CONSTRAINT__GLOBAL_DATA = 409;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Maxint greater equal minint' of 'Interaction Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INTERACTION_CONSTRAINT__MAXINT_GREATER_EQUAL_MININT = 410;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Irreflexive transitive closure' of 'General Ordering'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int GENERAL_ORDERING__IRREFLEXIVE_TRANSITIVE_CLOSURE = 411;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Sources and targets' of 'Information Item'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INFORMATION_ITEM__SOURCES_AND_TARGETS = 412;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has no' of 'Information Item'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INFORMATION_ITEM__HAS_NO = 413;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Not instantiable' of 'Information Item'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int INFORMATION_ITEM__NOT_INSTANTIABLE = 414;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Action referenced' of 'Action Execution Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTION_EXECUTION_SPECIFICATION__ACTION_REFERENCED = 415;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same lifeline' of 'Execution Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int EXECUTION_SPECIFICATION__SAME_LIFELINE = 416;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Break ' of 'Combined Fragment'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COMBINED_FRAGMENT__BREAK_ = 417;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Consider and ignore' of 'Combined Fragment'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COMBINED_FRAGMENT__CONSIDER_AND_IGNORE = 418;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Opt loop break neg' of 'Combined Fragment'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COMBINED_FRAGMENT__OPT_LOOP_BREAK_NEG = 419;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Consider or ignore' of 'Consider Ignore Fragment'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONSIDER_IGNORE_FRAGMENT__CONSIDER_OR_IGNORE = 420;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Type' of 'Consider Ignore Fragment'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONSIDER_IGNORE_FRAGMENT__TYPE = 421;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'First or last interaction fragment' of 'Continuation'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONTINUATION__FIRST_OR_LAST_INTERACTION_FRAGMENT = 422;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Same name' of 'Continuation'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONTINUATION__SAME_NAME = 423;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Global' of 'Continuation'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int CONTINUATION__GLOBAL = 424;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No occurrence specifications below' of 'Destruction Occurrence Specification'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DESTRUCTION_OCCURRENCE_SPECIFICATION__NO_OCCURRENCE_SPECIFICATIONS_BELOW = 425;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No exit behavior' of 'Final State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FINAL_STATE__NO_EXIT_BEHAVIOR = 426;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No outgoing transitions' of 'Final State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FINAL_STATE__NO_OUTGOING_TRANSITIONS = 427;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No regions' of 'Final State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FINAL_STATE__NO_REGIONS = 428;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot reference submachine' of 'Final State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FINAL_STATE__CANNOT_REFERENCE_SUBMACHINE = 429;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No entry behavior' of 'Final State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FINAL_STATE__NO_ENTRY_BEHAVIOR = 430;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No state behavior' of 'Final State'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int FINAL_STATE__NO_STATE_BEHAVIOR = 431;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Refers to operation' of 'Protocol Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROTOCOL_TRANSITION__REFERS_TO_OPERATION = 432;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Associated actions' of 'Protocol Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROTOCOL_TRANSITION__ASSOCIATED_ACTIONS = 433;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Belongs to psm' of 'Protocol Transition'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int PROTOCOL_TRANSITION__BELONGS_TO_PSM = 434;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Cannot be defined' of 'Association Class'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ASSOCIATION_CLASS__CANNOT_BE_DEFINED = 435;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Disjoint attributes ends' of 'Association Class'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ASSOCIATION_CLASS__DISJOINT_ATTRIBUTES_ENDS = 436;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No nested classifiers' of 'Component'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COMPONENT__NO_NESTED_CLASSIFIERS = 437;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No packaged elements' of 'Component'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int COMPONENT__NO_PACKAGED_ELEMENTS = 438;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Associations' of 'Actor'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTOR__ASSOCIATIONS = 439;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Must have name' of 'Actor'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int ACTOR__MUST_HAVE_NAME = 440;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'No expr requires observation' of 'Duration'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DURATION__NO_EXPR_REQUIRES_OBSERVATION = 441;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'First event multiplicity' of 'Duration Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DURATION_CONSTRAINT__FIRST_EVENT_MULTIPLICITY = 442;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has one or two constrained Elements' of 'Duration Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DURATION_CONSTRAINT__HAS_ONE_OR_TWO_CONSTRAINED_ELEMENTS = 443;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'First event multiplicity' of 'Duration Observation'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int DURATION_OBSERVATION__FIRST_EVENT_MULTIPLICITY = 444;

	/**
	 * The {@link org.eclipse.emf.common.util.Diagnostic#getCode() code} for constraint 'Has one constrained Element' of 'Time Constraint'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static final int TIME_CONSTRAINT__HAS_ONE_CONSTRAINED_ELEMENT = 445;

	/**
	 * A constant with a fixed name that can be used as the base value for additional hand written constants.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	private static final int GENERATED_DIAGNOSTIC_CODE_COUNT = 445;

	/**
	 * A constant with a fixed name that can be used as the base value for additional hand written constants in a derived class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected static final int DIAGNOSTIC_CODE_COUNT = GENERATED_DIAGNOSTIC_CODE_COUNT;

	/**
	 * Creates an instance of the switch.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public UmlValidator() {
		super();
	}

	/**
	 * Returns the package of this validator switch.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EPackage getEPackage() {
	  return UmlPackage.eINSTANCE;
	}

	/**
	 * Calls <code>validateXXX</code> for the corresponding classifier of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected boolean validate(int classifierID, Object value, DiagnosticChain diagnostics, Map<Object, Object> context) {
		switch (classifierID) {
			case UmlPackage.ACTIVITY_CONTENT:
				return validateActivityContent((ActivityContent)value, diagnostics, context);
			case UmlPackage.ACTIVITY:
				return validateActivity((Activity)value, diagnostics, context);
			case UmlPackage.BEHAVIOR:
				return validateBehavior((Behavior)value, diagnostics, context);
			case UmlPackage.CLASS:
				return validateClass((uml.Class)value, diagnostics, context);
			case UmlPackage.BEHAVIORED_CLASSIFIER:
				return validateBehavioredClassifier((BehavioredClassifier)value, diagnostics, context);
			case UmlPackage.CLASSIFIER:
				return validateClassifier((Classifier)value, diagnostics, context);
			case UmlPackage.NAMESPACE:
				return validateNamespace((Namespace)value, diagnostics, context);
			case UmlPackage.NAMED_ELEMENT:
				return validateNamedElement((NamedElement)value, diagnostics, context);
			case UmlPackage.ELEMENT:
				return validateElement((Element)value, diagnostics, context);
			case UmlPackage.COMMENT:
				return validateComment((Comment)value, diagnostics, context);
			case UmlPackage.STEREOTYPE:
				return validateStereotype((Stereotype)value, diagnostics, context);
			case UmlPackage.IMAGE:
				return validateImage((Image)value, diagnostics, context);
			case UmlPackage.PROFILE:
				return validateProfile((Profile)value, diagnostics, context);
			case UmlPackage.PACKAGE:
				return validatePackage((uml.Package)value, diagnostics, context);
			case UmlPackage.PACKAGEABLE_ELEMENT:
				return validatePackageableElement((PackageableElement)value, diagnostics, context);
			case UmlPackage.PARAMETERABLE_ELEMENT:
				return validateParameterableElement((ParameterableElement)value, diagnostics, context);
			case UmlPackage.TEMPLATE_PARAMETER:
				return validateTemplateParameter((TemplateParameter)value, diagnostics, context);
			case UmlPackage.TEMPLATE_SIGNATURE:
				return validateTemplateSignature((TemplateSignature)value, diagnostics, context);
			case UmlPackage.TEMPLATEABLE_ELEMENT:
				return validateTemplateableElement((TemplateableElement)value, diagnostics, context);
			case UmlPackage.TEMPLATE_BINDING:
				return validateTemplateBinding((TemplateBinding)value, diagnostics, context);
			case UmlPackage.DIRECTED_RELATIONSHIP:
				return validateDirectedRelationship((DirectedRelationship)value, diagnostics, context);
			case UmlPackage.RELATIONSHIP:
				return validateRelationship((Relationship)value, diagnostics, context);
			case UmlPackage.TEMPLATE_PARAMETER_SUBSTITUTION:
				return validateTemplateParameterSubstitution((TemplateParameterSubstitution)value, diagnostics, context);
			case UmlPackage.TYPE:
				return validateType((Type)value, diagnostics, context);
			case UmlPackage.ASSOCIATION:
				return validateAssociation((Association)value, diagnostics, context);
			case UmlPackage.PROPERTY:
				return validateProperty((Property)value, diagnostics, context);
			case UmlPackage.CONNECTABLE_ELEMENT:
				return validateConnectableElement((ConnectableElement)value, diagnostics, context);
			case UmlPackage.TYPED_ELEMENT:
				return validateTypedElement((TypedElement)value, diagnostics, context);
			case UmlPackage.CONNECTOR_END:
				return validateConnectorEnd((ConnectorEnd)value, diagnostics, context);
			case UmlPackage.MULTIPLICITY_ELEMENT:
				return validateMultiplicityElement((MultiplicityElement)value, diagnostics, context);
			case UmlPackage.VALUE_SPECIFICATION:
				return validateValueSpecification((ValueSpecification)value, diagnostics, context);
			case UmlPackage.CONNECTABLE_ELEMENT_TEMPLATE_PARAMETER:
				return validateConnectableElementTemplateParameter((ConnectableElementTemplateParameter)value, diagnostics, context);
			case UmlPackage.DEPLOYMENT_TARGET:
				return validateDeploymentTarget((DeploymentTarget)value, diagnostics, context);
			case UmlPackage.DEPLOYMENT:
				return validateDeployment((Deployment)value, diagnostics, context);
			case UmlPackage.DEPENDENCY:
				return validateDependency((Dependency)value, diagnostics, context);
			case UmlPackage.DEPLOYMENT_SPECIFICATION:
				return validateDeploymentSpecification((DeploymentSpecification)value, diagnostics, context);
			case UmlPackage.ARTIFACT:
				return validateArtifact((Artifact)value, diagnostics, context);
			case UmlPackage.DEPLOYED_ARTIFACT:
				return validateDeployedArtifact((DeployedArtifact)value, diagnostics, context);
			case UmlPackage.MANIFESTATION:
				return validateManifestation((Manifestation)value, diagnostics, context);
			case UmlPackage.ABSTRACTION:
				return validateAbstraction((Abstraction)value, diagnostics, context);
			case UmlPackage.OPAQUE_EXPRESSION:
				return validateOpaqueExpression((OpaqueExpression)value, diagnostics, context);
			case UmlPackage.PARAMETER:
				return validateParameter((Parameter)value, diagnostics, context);
			case UmlPackage.OPERATION:
				return validateOperation((Operation)value, diagnostics, context);
			case UmlPackage.BEHAVIORAL_FEATURE:
				return validateBehavioralFeature((BehavioralFeature)value, diagnostics, context);
			case UmlPackage.FEATURE:
				return validateFeature((Feature)value, diagnostics, context);
			case UmlPackage.REDEFINABLE_ELEMENT:
				return validateRedefinableElement((RedefinableElement)value, diagnostics, context);
			case UmlPackage.PARAMETER_SET:
				return validateParameterSet((ParameterSet)value, diagnostics, context);
			case UmlPackage.CONSTRAINT:
				return validateConstraint((Constraint)value, diagnostics, context);
			case UmlPackage.DATA_TYPE:
				return validateDataType((DataType)value, diagnostics, context);
			case UmlPackage.INTERFACE:
				return validateInterface((Interface)value, diagnostics, context);
			case UmlPackage.RECEPTION:
				return validateReception((Reception)value, diagnostics, context);
			case UmlPackage.SIGNAL:
				return validateSignal((Signal)value, diagnostics, context);
			case UmlPackage.PROTOCOL_STATE_MACHINE:
				return validateProtocolStateMachine((ProtocolStateMachine)value, diagnostics, context);
			case UmlPackage.STATE_MACHINE:
				return validateStateMachine((StateMachine)value, diagnostics, context);
			case UmlPackage.PSEUDOSTATE:
				return validatePseudostate((Pseudostate)value, diagnostics, context);
			case UmlPackage.VERTEX:
				return validateVertex((Vertex)value, diagnostics, context);
			case UmlPackage.REGION:
				return validateRegion((Region)value, diagnostics, context);
			case UmlPackage.STATE:
				return validateState((State)value, diagnostics, context);
			case UmlPackage.CONNECTION_POINT_REFERENCE:
				return validateConnectionPointReference((ConnectionPointReference)value, diagnostics, context);
			case UmlPackage.TRIGGER:
				return validateTrigger((Trigger)value, diagnostics, context);
			case UmlPackage.EVENT:
				return validateEvent((Event)value, diagnostics, context);
			case UmlPackage.PORT:
				return validatePort((Port)value, diagnostics, context);
			case UmlPackage.TRANSITION:
				return validateTransition((Transition)value, diagnostics, context);
			case UmlPackage.PROTOCOL_CONFORMANCE:
				return validateProtocolConformance((ProtocolConformance)value, diagnostics, context);
			case UmlPackage.OPERATION_TEMPLATE_PARAMETER:
				return validateOperationTemplateParameter((OperationTemplateParameter)value, diagnostics, context);
			case UmlPackage.STRUCTURAL_FEATURE:
				return validateStructuralFeature((StructuralFeature)value, diagnostics, context);
			case UmlPackage.PACKAGE_MERGE:
				return validatePackageMerge((PackageMerge)value, diagnostics, context);
			case UmlPackage.PROFILE_APPLICATION:
				return validateProfileApplication((ProfileApplication)value, diagnostics, context);
			case UmlPackage.ENUMERATION:
				return validateEnumeration((Enumeration)value, diagnostics, context);
			case UmlPackage.ENUMERATION_LITERAL:
				return validateEnumerationLiteral((EnumerationLiteral)value, diagnostics, context);
			case UmlPackage.INSTANCE_SPECIFICATION:
				return validateInstanceSpecification((InstanceSpecification)value, diagnostics, context);
			case UmlPackage.SLOT:
				return validateSlot((Slot)value, diagnostics, context);
			case UmlPackage.PRIMITIVE_TYPE:
				return validatePrimitiveType((PrimitiveType)value, diagnostics, context);
			case UmlPackage.ELEMENT_IMPORT:
				return validateElementImport((ElementImport)value, diagnostics, context);
			case UmlPackage.PACKAGE_IMPORT:
				return validatePackageImport((PackageImport)value, diagnostics, context);
			case UmlPackage.EXTENSION:
				return validateExtension((Extension)value, diagnostics, context);
			case UmlPackage.EXTENSION_END:
				return validateExtensionEnd((ExtensionEnd)value, diagnostics, context);
			case UmlPackage.MODEL:
				return validateModel((Model)value, diagnostics, context);
			case UmlPackage.STRING_EXPRESSION:
				return validateStringExpression((StringExpression)value, diagnostics, context);
			case UmlPackage.EXPRESSION:
				return validateExpression((Expression)value, diagnostics, context);
			case UmlPackage.USAGE:
				return validateUsage((Usage)value, diagnostics, context);
			case UmlPackage.COLLABORATION_USE:
				return validateCollaborationUse((CollaborationUse)value, diagnostics, context);
			case UmlPackage.COLLABORATION:
				return validateCollaboration((Collaboration)value, diagnostics, context);
			case UmlPackage.STRUCTURED_CLASSIFIER:
				return validateStructuredClassifier((StructuredClassifier)value, diagnostics, context);
			case UmlPackage.CONNECTOR:
				return validateConnector((Connector)value, diagnostics, context);
			case UmlPackage.GENERALIZATION:
				return validateGeneralization((Generalization)value, diagnostics, context);
			case UmlPackage.GENERALIZATION_SET:
				return validateGeneralizationSet((GeneralizationSet)value, diagnostics, context);
			case UmlPackage.REDEFINABLE_TEMPLATE_SIGNATURE:
				return validateRedefinableTemplateSignature((RedefinableTemplateSignature)value, diagnostics, context);
			case UmlPackage.USE_CASE:
				return validateUseCase((UseCase)value, diagnostics, context);
			case UmlPackage.EXTEND:
				return validateExtend((Extend)value, diagnostics, context);
			case UmlPackage.EXTENSION_POINT:
				return validateExtensionPoint((ExtensionPoint)value, diagnostics, context);
			case UmlPackage.INCLUDE:
				return validateInclude((Include)value, diagnostics, context);
			case UmlPackage.SUBSTITUTION:
				return validateSubstitution((Substitution)value, diagnostics, context);
			case UmlPackage.REALIZATION:
				return validateRealization((Realization)value, diagnostics, context);
			case UmlPackage.CLASSIFIER_TEMPLATE_PARAMETER:
				return validateClassifierTemplateParameter((ClassifierTemplateParameter)value, diagnostics, context);
			case UmlPackage.INTERFACE_REALIZATION:
				return validateInterfaceRealization((InterfaceRealization)value, diagnostics, context);
			case UmlPackage.ENCAPSULATED_CLASSIFIER:
				return validateEncapsulatedClassifier((EncapsulatedClassifier)value, diagnostics, context);
			case UmlPackage.ACTIVITY_GROUP:
				return validateActivityGroup((ActivityGroup)value, diagnostics, context);
			case UmlPackage.ACTIVITY_EDGE:
				return validateActivityEdge((ActivityEdge)value, diagnostics, context);
			case UmlPackage.ACTIVITY_PARTITION:
				return validateActivityPartition((ActivityPartition)value, diagnostics, context);
			case UmlPackage.ACTIVITY_NODE:
				return validateActivityNode((ActivityNode)value, diagnostics, context);
			case UmlPackage.INTERRUPTIBLE_ACTIVITY_REGION:
				return validateInterruptibleActivityRegion((InterruptibleActivityRegion)value, diagnostics, context);
			case UmlPackage.STRUCTURED_ACTIVITY_NODE:
				return validateStructuredActivityNode((StructuredActivityNode)value, diagnostics, context);
			case UmlPackage.ACTION:
				return validateAction((Action)value, diagnostics, context);
			case UmlPackage.EXECUTABLE_NODE:
				return validateExecutableNode((ExecutableNode)value, diagnostics, context);
			case UmlPackage.EXCEPTION_HANDLER:
				return validateExceptionHandler((ExceptionHandler)value, diagnostics, context);
			case UmlPackage.OBJECT_NODE:
				return validateObjectNode((ObjectNode)value, diagnostics, context);
			case UmlPackage.INPUT_PIN:
				return validateInputPin((InputPin)value, diagnostics, context);
			case UmlPackage.PIN:
				return validatePin((Pin)value, diagnostics, context);
			case UmlPackage.OUTPUT_PIN:
				return validateOutputPin((OutputPin)value, diagnostics, context);
			case UmlPackage.VARIABLE:
				return validateVariable((Variable)value, diagnostics, context);
			case UmlPackage.VALUE_SPECIFICATION_ACTION:
				return validateValueSpecificationAction((ValueSpecificationAction)value, diagnostics, context);
			case UmlPackage.VARIABLE_ACTION:
				return validateVariableAction((VariableAction)value, diagnostics, context);
			case UmlPackage.WRITE_LINK_ACTION:
				return validateWriteLinkAction((WriteLinkAction)value, diagnostics, context);
			case UmlPackage.LINK_ACTION:
				return validateLinkAction((LinkAction)value, diagnostics, context);
			case UmlPackage.LINK_END_DATA:
				return validateLinkEndData((LinkEndData)value, diagnostics, context);
			case UmlPackage.QUALIFIER_VALUE:
				return validateQualifierValue((QualifierValue)value, diagnostics, context);
			case UmlPackage.WRITE_STRUCTURAL_FEATURE_ACTION:
				return validateWriteStructuralFeatureAction((WriteStructuralFeatureAction)value, diagnostics, context);
			case UmlPackage.STRUCTURAL_FEATURE_ACTION:
				return validateStructuralFeatureAction((StructuralFeatureAction)value, diagnostics, context);
			case UmlPackage.WRITE_VARIABLE_ACTION:
				return validateWriteVariableAction((WriteVariableAction)value, diagnostics, context);
			case UmlPackage.ACCEPT_CALL_ACTION:
				return validateAcceptCallAction((AcceptCallAction)value, diagnostics, context);
			case UmlPackage.ACCEPT_EVENT_ACTION:
				return validateAcceptEventAction((AcceptEventAction)value, diagnostics, context);
			case UmlPackage.ACTION_INPUT_PIN:
				return validateActionInputPin((ActionInputPin)value, diagnostics, context);
			case UmlPackage.ADD_STRUCTURAL_FEATURE_VALUE_ACTION:
				return validateAddStructuralFeatureValueAction((AddStructuralFeatureValueAction)value, diagnostics, context);
			case UmlPackage.ADD_VARIABLE_VALUE_ACTION:
				return validateAddVariableValueAction((AddVariableValueAction)value, diagnostics, context);
			case UmlPackage.BROADCAST_SIGNAL_ACTION:
				return validateBroadcastSignalAction((BroadcastSignalAction)value, diagnostics, context);
			case UmlPackage.INVOCATION_ACTION:
				return validateInvocationAction((InvocationAction)value, diagnostics, context);
			case UmlPackage.CALL_ACTION:
				return validateCallAction((CallAction)value, diagnostics, context);
			case UmlPackage.CALL_BEHAVIOR_ACTION:
				return validateCallBehaviorAction((CallBehaviorAction)value, diagnostics, context);
			case UmlPackage.CALL_OPERATION_ACTION:
				return validateCallOperationAction((CallOperationAction)value, diagnostics, context);
			case UmlPackage.CLAUSE:
				return validateClause((Clause)value, diagnostics, context);
			case UmlPackage.CLEAR_ASSOCIATION_ACTION:
				return validateClearAssociationAction((ClearAssociationAction)value, diagnostics, context);
			case UmlPackage.CLEAR_STRUCTURAL_FEATURE_ACTION:
				return validateClearStructuralFeatureAction((ClearStructuralFeatureAction)value, diagnostics, context);
			case UmlPackage.CLEAR_VARIABLE_ACTION:
				return validateClearVariableAction((ClearVariableAction)value, diagnostics, context);
			case UmlPackage.CONDITIONAL_NODE:
				return validateConditionalNode((ConditionalNode)value, diagnostics, context);
			case UmlPackage.CREATE_LINK_ACTION:
				return validateCreateLinkAction((CreateLinkAction)value, diagnostics, context);
			case UmlPackage.LINK_END_CREATION_DATA:
				return validateLinkEndCreationData((LinkEndCreationData)value, diagnostics, context);
			case UmlPackage.CREATE_LINK_OBJECT_ACTION:
				return validateCreateLinkObjectAction((CreateLinkObjectAction)value, diagnostics, context);
			case UmlPackage.CREATE_OBJECT_ACTION:
				return validateCreateObjectAction((CreateObjectAction)value, diagnostics, context);
			case UmlPackage.DESTROY_LINK_ACTION:
				return validateDestroyLinkAction((DestroyLinkAction)value, diagnostics, context);
			case UmlPackage.LINK_END_DESTRUCTION_DATA:
				return validateLinkEndDestructionData((LinkEndDestructionData)value, diagnostics, context);
			case UmlPackage.DESTROY_OBJECT_ACTION:
				return validateDestroyObjectAction((DestroyObjectAction)value, diagnostics, context);
			case UmlPackage.EXPANSION_NODE:
				return validateExpansionNode((ExpansionNode)value, diagnostics, context);
			case UmlPackage.EXPANSION_REGION:
				return validateExpansionRegion((ExpansionRegion)value, diagnostics, context);
			case UmlPackage.LOOP_NODE:
				return validateLoopNode((LoopNode)value, diagnostics, context);
			case UmlPackage.OPAQUE_ACTION:
				return validateOpaqueAction((OpaqueAction)value, diagnostics, context);
			case UmlPackage.RAISE_EXCEPTION_ACTION:
				return validateRaiseExceptionAction((RaiseExceptionAction)value, diagnostics, context);
			case UmlPackage.READ_EXTENT_ACTION:
				return validateReadExtentAction((ReadExtentAction)value, diagnostics, context);
			case UmlPackage.READ_IS_CLASSIFIED_OBJECT_ACTION:
				return validateReadIsClassifiedObjectAction((ReadIsClassifiedObjectAction)value, diagnostics, context);
			case UmlPackage.READ_LINK_ACTION:
				return validateReadLinkAction((ReadLinkAction)value, diagnostics, context);
			case UmlPackage.READ_LINK_OBJECT_END_ACTION:
				return validateReadLinkObjectEndAction((ReadLinkObjectEndAction)value, diagnostics, context);
			case UmlPackage.READ_LINK_OBJECT_END_QUALIFIER_ACTION:
				return validateReadLinkObjectEndQualifierAction((ReadLinkObjectEndQualifierAction)value, diagnostics, context);
			case UmlPackage.READ_SELF_ACTION:
				return validateReadSelfAction((ReadSelfAction)value, diagnostics, context);
			case UmlPackage.READ_STRUCTURAL_FEATURE_ACTION:
				return validateReadStructuralFeatureAction((ReadStructuralFeatureAction)value, diagnostics, context);
			case UmlPackage.READ_VARIABLE_ACTION:
				return validateReadVariableAction((ReadVariableAction)value, diagnostics, context);
			case UmlPackage.RECLASSIFY_OBJECT_ACTION:
				return validateReclassifyObjectAction((ReclassifyObjectAction)value, diagnostics, context);
			case UmlPackage.REDUCE_ACTION:
				return validateReduceAction((ReduceAction)value, diagnostics, context);
			case UmlPackage.REMOVE_STRUCTURAL_FEATURE_VALUE_ACTION:
				return validateRemoveStructuralFeatureValueAction((RemoveStructuralFeatureValueAction)value, diagnostics, context);
			case UmlPackage.REMOVE_VARIABLE_VALUE_ACTION:
				return validateRemoveVariableValueAction((RemoveVariableValueAction)value, diagnostics, context);
			case UmlPackage.REPLY_ACTION:
				return validateReplyAction((ReplyAction)value, diagnostics, context);
			case UmlPackage.SEND_OBJECT_ACTION:
				return validateSendObjectAction((SendObjectAction)value, diagnostics, context);
			case UmlPackage.SEND_SIGNAL_ACTION:
				return validateSendSignalAction((SendSignalAction)value, diagnostics, context);
			case UmlPackage.SEQUENCE_NODE:
				return validateSequenceNode((SequenceNode)value, diagnostics, context);
			case UmlPackage.START_CLASSIFIER_BEHAVIOR_ACTION:
				return validateStartClassifierBehaviorAction((StartClassifierBehaviorAction)value, diagnostics, context);
			case UmlPackage.START_OBJECT_BEHAVIOR_ACTION:
				return validateStartObjectBehaviorAction((StartObjectBehaviorAction)value, diagnostics, context);
			case UmlPackage.TEST_IDENTITY_ACTION:
				return validateTestIdentityAction((TestIdentityAction)value, diagnostics, context);
			case UmlPackage.UNMARSHALL_ACTION:
				return validateUnmarshallAction((UnmarshallAction)value, diagnostics, context);
			case UmlPackage.VALUE_PIN:
				return validateValuePin((ValuePin)value, diagnostics, context);
			case UmlPackage.ACTIVITY_FINAL_NODE:
				return validateActivityFinalNode((ActivityFinalNode)value, diagnostics, context);
			case UmlPackage.FINAL_NODE:
				return validateFinalNode((FinalNode)value, diagnostics, context);
			case UmlPackage.CONTROL_NODE:
				return validateControlNode((ControlNode)value, diagnostics, context);
			case UmlPackage.ACTIVITY_PARAMETER_NODE:
				return validateActivityParameterNode((ActivityParameterNode)value, diagnostics, context);
			case UmlPackage.CENTRAL_BUFFER_NODE:
				return validateCentralBufferNode((CentralBufferNode)value, diagnostics, context);
			case UmlPackage.CONTROL_FLOW:
				return validateControlFlow((ControlFlow)value, diagnostics, context);
			case UmlPackage.DATA_STORE_NODE:
				return validateDataStoreNode((DataStoreNode)value, diagnostics, context);
			case UmlPackage.DECISION_NODE:
				return validateDecisionNode((DecisionNode)value, diagnostics, context);
			case UmlPackage.OBJECT_FLOW:
				return validateObjectFlow((ObjectFlow)value, diagnostics, context);
			case UmlPackage.FLOW_FINAL_NODE:
				return validateFlowFinalNode((FlowFinalNode)value, diagnostics, context);
			case UmlPackage.FORK_NODE:
				return validateForkNode((ForkNode)value, diagnostics, context);
			case UmlPackage.INITIAL_NODE:
				return validateInitialNode((InitialNode)value, diagnostics, context);
			case UmlPackage.JOIN_NODE:
				return validateJoinNode((JoinNode)value, diagnostics, context);
			case UmlPackage.MERGE_NODE:
				return validateMergeNode((MergeNode)value, diagnostics, context);
			case UmlPackage.INSTANCE_VALUE:
				return validateInstanceValue((InstanceValue)value, diagnostics, context);
			case UmlPackage.ANY_RECEIVE_EVENT:
				return validateAnyReceiveEvent((AnyReceiveEvent)value, diagnostics, context);
			case UmlPackage.MESSAGE_EVENT:
				return validateMessageEvent((MessageEvent)value, diagnostics, context);
			case UmlPackage.CALL_EVENT:
				return validateCallEvent((CallEvent)value, diagnostics, context);
			case UmlPackage.CHANGE_EVENT:
				return validateChangeEvent((ChangeEvent)value, diagnostics, context);
			case UmlPackage.FUNCTION_BEHAVIOR:
				return validateFunctionBehavior((FunctionBehavior)value, diagnostics, context);
			case UmlPackage.OPAQUE_BEHAVIOR:
				return validateOpaqueBehavior((OpaqueBehavior)value, diagnostics, context);
			case UmlPackage.SIGNAL_EVENT:
				return validateSignalEvent((SignalEvent)value, diagnostics, context);
			case UmlPackage.TIME_EVENT:
				return validateTimeEvent((TimeEvent)value, diagnostics, context);
			case UmlPackage.TIME_EXPRESSION:
				return validateTimeExpression((TimeExpression)value, diagnostics, context);
			case UmlPackage.OBSERVATION:
				return validateObservation((Observation)value, diagnostics, context);
			case UmlPackage.COMMUNICATION_PATH:
				return validateCommunicationPath((CommunicationPath)value, diagnostics, context);
			case UmlPackage.DEVICE:
				return validateDevice((Device)value, diagnostics, context);
			case UmlPackage.NODE:
				return validateNode((Node)value, diagnostics, context);
			case UmlPackage.EXECUTION_ENVIRONMENT:
				return validateExecutionEnvironment((ExecutionEnvironment)value, diagnostics, context);
			case UmlPackage.INFORMATION_FLOW:
				return validateInformationFlow((InformationFlow)value, diagnostics, context);
			case UmlPackage.MESSAGE:
				return validateMessage((Message)value, diagnostics, context);
			case UmlPackage.INTERACTION:
				return validateInteraction((Interaction)value, diagnostics, context);
			case UmlPackage.INTERACTION_FRAGMENT:
				return validateInteractionFragment((InteractionFragment)value, diagnostics, context);
			case UmlPackage.LIFELINE:
				return validateLifeline((Lifeline)value, diagnostics, context);
			case UmlPackage.PART_DECOMPOSITION:
				return validatePartDecomposition((PartDecomposition)value, diagnostics, context);
			case UmlPackage.INTERACTION_USE:
				return validateInteractionUse((InteractionUse)value, diagnostics, context);
			case UmlPackage.GATE:
				return validateGate((Gate)value, diagnostics, context);
			case UmlPackage.MESSAGE_END:
				return validateMessageEnd((MessageEnd)value, diagnostics, context);
			case UmlPackage.INTERACTION_OPERAND:
				return validateInteractionOperand((InteractionOperand)value, diagnostics, context);
			case UmlPackage.INTERACTION_CONSTRAINT:
				return validateInteractionConstraint((InteractionConstraint)value, diagnostics, context);
			case UmlPackage.GENERAL_ORDERING:
				return validateGeneralOrdering((GeneralOrdering)value, diagnostics, context);
			case UmlPackage.OCCURRENCE_SPECIFICATION:
				return validateOccurrenceSpecification((OccurrenceSpecification)value, diagnostics, context);
			case UmlPackage.INFORMATION_ITEM:
				return validateInformationItem((InformationItem)value, diagnostics, context);
			case UmlPackage.ACTION_EXECUTION_SPECIFICATION:
				return validateActionExecutionSpecification((ActionExecutionSpecification)value, diagnostics, context);
			case UmlPackage.EXECUTION_SPECIFICATION:
				return validateExecutionSpecification((ExecutionSpecification)value, diagnostics, context);
			case UmlPackage.BEHAVIOR_EXECUTION_SPECIFICATION:
				return validateBehaviorExecutionSpecification((BehaviorExecutionSpecification)value, diagnostics, context);
			case UmlPackage.COMBINED_FRAGMENT:
				return validateCombinedFragment((CombinedFragment)value, diagnostics, context);
			case UmlPackage.CONSIDER_IGNORE_FRAGMENT:
				return validateConsiderIgnoreFragment((ConsiderIgnoreFragment)value, diagnostics, context);
			case UmlPackage.CONTINUATION:
				return validateContinuation((Continuation)value, diagnostics, context);
			case UmlPackage.DESTRUCTION_OCCURRENCE_SPECIFICATION:
				return validateDestructionOccurrenceSpecification((DestructionOccurrenceSpecification)value, diagnostics, context);
			case UmlPackage.MESSAGE_OCCURRENCE_SPECIFICATION:
				return validateMessageOccurrenceSpecification((MessageOccurrenceSpecification)value, diagnostics, context);
			case UmlPackage.EXECUTION_OCCURRENCE_SPECIFICATION:
				return validateExecutionOccurrenceSpecification((ExecutionOccurrenceSpecification)value, diagnostics, context);
			case UmlPackage.STATE_INVARIANT:
				return validateStateInvariant((StateInvariant)value, diagnostics, context);
			case UmlPackage.FINAL_STATE:
				return validateFinalState((FinalState)value, diagnostics, context);
			case UmlPackage.PROTOCOL_TRANSITION:
				return validateProtocolTransition((ProtocolTransition)value, diagnostics, context);
			case UmlPackage.ASSOCIATION_CLASS:
				return validateAssociationClass((AssociationClass)value, diagnostics, context);
			case UmlPackage.COMPONENT:
				return validateComponent((Component)value, diagnostics, context);
			case UmlPackage.COMPONENT_REALIZATION:
				return validateComponentRealization((ComponentRealization)value, diagnostics, context);
			case UmlPackage.ACTOR:
				return validateActor((Actor)value, diagnostics, context);
			case UmlPackage.DURATION:
				return validateDuration((Duration)value, diagnostics, context);
			case UmlPackage.DURATION_CONSTRAINT:
				return validateDurationConstraint((DurationConstraint)value, diagnostics, context);
			case UmlPackage.INTERVAL_CONSTRAINT:
				return validateIntervalConstraint((IntervalConstraint)value, diagnostics, context);
			case UmlPackage.INTERVAL:
				return validateInterval((Interval)value, diagnostics, context);
			case UmlPackage.DURATION_INTERVAL:
				return validateDurationInterval((DurationInterval)value, diagnostics, context);
			case UmlPackage.DURATION_OBSERVATION:
				return validateDurationObservation((DurationObservation)value, diagnostics, context);
			case UmlPackage.LITERAL_BOOLEAN:
				return validateLiteralBoolean((LiteralBoolean)value, diagnostics, context);
			case UmlPackage.LITERAL_SPECIFICATION:
				return validateLiteralSpecification((LiteralSpecification)value, diagnostics, context);
			case UmlPackage.LITERAL_INTEGER:
				return validateLiteralInteger((LiteralInteger)value, diagnostics, context);
			case UmlPackage.LITERAL_NULL:
				return validateLiteralNull((LiteralNull)value, diagnostics, context);
			case UmlPackage.LITERAL_REAL:
				return validateLiteralReal((LiteralReal)value, diagnostics, context);
			case UmlPackage.LITERAL_STRING:
				return validateLiteralString((LiteralString)value, diagnostics, context);
			case UmlPackage.LITERAL_UNLIMITED_NATURAL:
				return validateLiteralUnlimitedNatural((LiteralUnlimitedNatural)value, diagnostics, context);
			case UmlPackage.TIME_CONSTRAINT:
				return validateTimeConstraint((TimeConstraint)value, diagnostics, context);
			case UmlPackage.TIME_INTERVAL:
				return validateTimeInterval((TimeInterval)value, diagnostics, context);
			case UmlPackage.TIME_OBSERVATION:
				return validateTimeObservation((TimeObservation)value, diagnostics, context);
			case UmlPackage.VISIBILITY_KIND:
				return validateVisibilityKind((VisibilityKind)value, diagnostics, context);
			case UmlPackage.PARAMETER_DIRECTION_KIND:
				return validateParameterDirectionKind((ParameterDirectionKind)value, diagnostics, context);
			case UmlPackage.PARAMETER_EFFECT_KIND:
				return validateParameterEffectKind((ParameterEffectKind)value, diagnostics, context);
			case UmlPackage.CALL_CONCURRENCY_KIND:
				return validateCallConcurrencyKind((CallConcurrencyKind)value, diagnostics, context);
			case UmlPackage.TRANSITION_KIND:
				return validateTransitionKind((TransitionKind)value, diagnostics, context);
			case UmlPackage.PSEUDOSTATE_KIND:
				return validatePseudostateKind((PseudostateKind)value, diagnostics, context);
			case UmlPackage.AGGREGATION_KIND:
				return validateAggregationKind((AggregationKind)value, diagnostics, context);
			case UmlPackage.CONNECTOR_KIND:
				return validateConnectorKind((ConnectorKind)value, diagnostics, context);
			case UmlPackage.OBJECT_NODE_ORDERING_KIND:
				return validateObjectNodeOrderingKind((ObjectNodeOrderingKind)value, diagnostics, context);
			case UmlPackage.EXPANSION_KIND:
				return validateExpansionKind((ExpansionKind)value, diagnostics, context);
			case UmlPackage.MESSAGE_KIND:
				return validateMessageKind((MessageKind)value, diagnostics, context);
			case UmlPackage.MESSAGE_SORT:
				return validateMessageSort((MessageSort)value, diagnostics, context);
			case UmlPackage.INTERACTION_OPERATOR_KIND:
				return validateInteractionOperatorKind((InteractionOperatorKind)value, diagnostics, context);
			default:
				return true;
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityContent(ActivityContent activityContent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return validate_EveryDefaultConstraint(activityContent, diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivity(Activity activity, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(activity, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_most_one_behavior(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_parameters_match(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_feature_of_context_classifier(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivity_maximum_one_parameter_node(activity, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivity_maximum_two_parameter_nodes(activity, diagnostics, context);
		return result;
	}

	/**
	 * Validates the maximum_one_parameter_node constraint of '<em>Activity</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivity_maximum_one_parameter_node(Activity activity, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activity.maximum_one_parameter_node(diagnostics, context);
	}

	/**
	 * Validates the maximum_two_parameter_nodes constraint of '<em>Activity</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivity_maximum_two_parameter_nodes(Activity activity, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activity.maximum_two_parameter_nodes(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavior(Behavior behavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(behavior, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_most_one_behavior(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_parameters_match(behavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_feature_of_context_classifier(behavior, diagnostics, context);
		return result;
	}

	/**
	 * Validates the most_one_behavior constraint of '<em>Behavior</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavior_most_one_behavior(Behavior behavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return behavior.most_one_behavior(diagnostics, context);
	}

	/**
	 * Validates the parameters_match constraint of '<em>Behavior</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavior_parameters_match(Behavior behavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return behavior.parameters_match(diagnostics, context);
	}

	/**
	 * Validates the feature_of_context_classifier constraint of '<em>Behavior</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavior_feature_of_context_classifier(Behavior behavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return behavior.feature_of_context_classifier(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClass(uml.Class class_, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(class_, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(class_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(class_, diagnostics, context);
		return result;
	}

	/**
	 * Validates the passive_class constraint of '<em>Class</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClass_passive_class(uml.Class class_, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return class_.passive_class(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavioredClassifier(BehavioredClassifier behavioredClassifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(behavioredClassifier, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(behavioredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(behavioredClassifier, diagnostics, context);
		return result;
	}

	/**
	 * Validates the class_behavior constraint of '<em>Behaviored Classifier</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavioredClassifier_class_behavior(BehavioredClassifier behavioredClassifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return behavioredClassifier.class_behavior(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifier(Classifier classifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(classifier, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(classifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(classifier, diagnostics, context);
		return result;
	}

	/**
	 * Validates the specialize_type constraint of '<em>Classifier</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifier_specialize_type(Classifier classifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifier.specialize_type(diagnostics, context);
	}

	/**
	 * Validates the maps_to_generalization_set constraint of '<em>Classifier</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifier_maps_to_generalization_set(Classifier classifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifier.maps_to_generalization_set(diagnostics, context);
	}

	/**
	 * Validates the non_final_parents constraint of '<em>Classifier</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifier_non_final_parents(Classifier classifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifier.non_final_parents(diagnostics, context);
	}

	/**
	 * Validates the no_cycles_in_generalization constraint of '<em>Classifier</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifier_no_cycles_in_generalization(Classifier classifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifier.no_cycles_in_generalization(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamespace(Namespace namespace, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(namespace, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(namespace, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(namespace, diagnostics, context);
		return result;
	}

	/**
	 * Validates the members_distinguishable constraint of '<em>Namespace</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamespace_members_distinguishable(Namespace namespace, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return namespace.members_distinguishable(diagnostics, context);
	}

	/**
	 * Validates the cannot_import_self constraint of '<em>Namespace</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamespace_cannot_import_self(Namespace namespace, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return namespace.cannot_import_self(diagnostics, context);
	}

	/**
	 * Validates the cannot_import_ownedMembers constraint of '<em>Namespace</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamespace_cannot_import_ownedMembers(Namespace namespace, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return namespace.cannot_import_ownedMembers(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamedElement(NamedElement namedElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(namedElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(namedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(namedElement, diagnostics, context);
		return result;
	}

	/**
	 * Validates the visibility_needs_ownership constraint of '<em>Named Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamedElement_visibility_needs_ownership(NamedElement namedElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return namedElement.visibility_needs_ownership(diagnostics, context);
	}

	/**
	 * Validates the has_qualified_name constraint of '<em>Named Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamedElement_has_qualified_name(NamedElement namedElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return namedElement.has_qualified_name(diagnostics, context);
	}

	/**
	 * Validates the has_no_qualified_name constraint of '<em>Named Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNamedElement_has_no_qualified_name(NamedElement namedElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return namedElement.has_no_qualified_name(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateElement(Element element, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(element, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(element, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(element, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(element, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(element, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(element, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(element, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(element, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(element, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(element, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(element, diagnostics, context);
		return result;
	}

	/**
	 * Validates the has_owner constraint of '<em>Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateElement_has_owner(Element element, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return element.has_owner(diagnostics, context);
	}

	/**
	 * Validates the not_own_self constraint of '<em>Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateElement_not_own_self(Element element, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return element.not_own_self(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateComment(Comment comment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(comment, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(comment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(comment, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(stereotype, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateStereotype_binaryAssociationsOnly(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateStereotype_generalize(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateStereotype_name_not_clash(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateStereotype_associationEndOwnership(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateStereotype_base_property_upper_bound(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateStereotype_base_property_multiplicity_single_extension(stereotype, diagnostics, context);
		if (result || diagnostics != null) result &= validateStereotype_base_property_multiplicity_multiple_extension(stereotype, diagnostics, context);
		return result;
	}

	/**
	 * Validates the binaryAssociationsOnly constraint of '<em>Stereotype</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype_binaryAssociationsOnly(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stereotype.binaryAssociationsOnly(diagnostics, context);
	}

	/**
	 * Validates the generalize constraint of '<em>Stereotype</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype_generalize(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stereotype.generalize(diagnostics, context);
	}

	/**
	 * Validates the name_not_clash constraint of '<em>Stereotype</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype_name_not_clash(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stereotype.name_not_clash(diagnostics, context);
	}

	/**
	 * Validates the associationEndOwnership constraint of '<em>Stereotype</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype_associationEndOwnership(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stereotype.associationEndOwnership(diagnostics, context);
	}

	/**
	 * Validates the base_property_upper_bound constraint of '<em>Stereotype</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype_base_property_upper_bound(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stereotype.base_property_upper_bound(diagnostics, context);
	}

	/**
	 * Validates the base_property_multiplicity_single_extension constraint of '<em>Stereotype</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype_base_property_multiplicity_single_extension(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stereotype.base_property_multiplicity_single_extension(diagnostics, context);
	}

	/**
	 * Validates the base_property_multiplicity_multiple_extension constraint of '<em>Stereotype</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStereotype_base_property_multiplicity_multiple_extension(Stereotype stereotype, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stereotype.base_property_multiplicity_multiple_extension(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateImage(Image image, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(image, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(image, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(image, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(image, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(image, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(image, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(image, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(image, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(image, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(image, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(image, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProfile(Profile profile, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(profile, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackage_elements_public_or_private(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateProfile_metaclass_reference_not_specialized(profile, diagnostics, context);
		if (result || diagnostics != null) result &= validateProfile_references_same_metamodel(profile, diagnostics, context);
		return result;
	}

	/**
	 * Validates the metaclass_reference_not_specialized constraint of '<em>Profile</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProfile_metaclass_reference_not_specialized(Profile profile, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return profile.metaclass_reference_not_specialized(diagnostics, context);
	}

	/**
	 * Validates the references_same_metamodel constraint of '<em>Profile</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProfile_references_same_metamodel(Profile profile, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return profile.references_same_metamodel(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePackage(uml.Package package_, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(package_, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(package_, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackage_elements_public_or_private(package_, diagnostics, context);
		return result;
	}

	/**
	 * Validates the elements_public_or_private constraint of '<em>Package</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePackage_elements_public_or_private(uml.Package package_, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return package_.elements_public_or_private(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePackageableElement(PackageableElement packageableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(packageableElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(packageableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(packageableElement, diagnostics, context);
		return result;
	}

	/**
	 * Validates the namespace_needs_visibility constraint of '<em>Packageable Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePackageableElement_namespace_needs_visibility(PackageableElement packageableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return packageableElement.namespace_needs_visibility(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameterableElement(ParameterableElement parameterableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(parameterableElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(parameterableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(parameterableElement, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateParameter(TemplateParameter templateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(templateParameter, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(templateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateParameter_must_be_compatible(templateParameter, diagnostics, context);
		return result;
	}

	/**
	 * Validates the must_be_compatible constraint of '<em>Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateParameter_must_be_compatible(TemplateParameter templateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return templateParameter.must_be_compatible(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateSignature(TemplateSignature templateSignature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(templateSignature, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateSignature_own_elements(templateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateSignature_unique_parameters(templateSignature, diagnostics, context);
		return result;
	}

	/**
	 * Validates the own_elements constraint of '<em>Template Signature</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateSignature_own_elements(TemplateSignature templateSignature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return templateSignature.own_elements(diagnostics, context);
	}

	/**
	 * Validates the unique_parameters constraint of '<em>Template Signature</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateSignature_unique_parameters(TemplateSignature templateSignature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return templateSignature.unique_parameters(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateableElement(TemplateableElement templateableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(templateableElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(templateableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(templateableElement, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateBinding(TemplateBinding templateBinding, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(templateBinding, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateBinding_parameter_substitution_formal(templateBinding, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateBinding_one_parameter_substitution(templateBinding, diagnostics, context);
		return result;
	}

	/**
	 * Validates the parameter_substitution_formal constraint of '<em>Template Binding</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateBinding_parameter_substitution_formal(TemplateBinding templateBinding, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return templateBinding.parameter_substitution_formal(diagnostics, context);
	}

	/**
	 * Validates the one_parameter_substitution constraint of '<em>Template Binding</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateBinding_one_parameter_substitution(TemplateBinding templateBinding, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return templateBinding.one_parameter_substitution(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDirectedRelationship(DirectedRelationship directedRelationship, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(directedRelationship, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(directedRelationship, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(directedRelationship, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRelationship(Relationship relationship, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(relationship, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(relationship, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(relationship, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateParameterSubstitution(TemplateParameterSubstitution templateParameterSubstitution, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(templateParameterSubstitution, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(templateParameterSubstitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateParameterSubstitution_must_be_compatible(templateParameterSubstitution, diagnostics, context);
		return result;
	}

	/**
	 * Validates the must_be_compatible constraint of '<em>Template Parameter Substitution</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTemplateParameterSubstitution_must_be_compatible(TemplateParameterSubstitution templateParameterSubstitution, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return templateParameterSubstitution.must_be_compatible(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateType(Type type, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(type, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(type, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(type, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(type, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(type, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(type, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(type, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(type, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(type, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(type, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(type, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(type, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(type, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(type, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(type, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociation(Association association, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(association, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(association, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(association, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(association, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(association, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(association, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(association, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(association, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(association, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_number(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_types(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_binary_associations(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_association_ends(association, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_ends_must_be_typed(association, diagnostics, context);
		return result;
	}

	/**
	 * Validates the specialized_end_number constraint of '<em>Association</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociation_specialized_end_number(Association association, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return association.specialized_end_number(diagnostics, context);
	}

	/**
	 * Validates the specialized_end_types constraint of '<em>Association</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociation_specialized_end_types(Association association, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return association.specialized_end_types(diagnostics, context);
	}

	/**
	 * Validates the binary_associations constraint of '<em>Association</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociation_binary_associations(Association association, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return association.binary_associations(diagnostics, context);
	}

	/**
	 * Validates the association_ends constraint of '<em>Association</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociation_association_ends(Association association, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return association.association_ends(diagnostics, context);
	}

	/**
	 * Validates the ends_must_be_typed constraint of '<em>Association</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociation_ends_must_be_typed(Association association, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return association.ends_must_be_typed(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(property, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(property, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(property, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(property, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(property, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(property, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(property, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(property, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetting_context_conforms(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_derived_union_is_read_only(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_multiplicity_of_composite(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_redefined_property_inherited(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetting_rules(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_binding_to_attribute(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_derived_union_is_derived(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_deployment_target(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetted_property_names(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_type_of_opposite_end(property, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_qualified_is_association_end(property, diagnostics, context);
		return result;
	}

	/**
	 * Validates the subsetting_context_conforms constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_subsetting_context_conforms(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.subsetting_context_conforms(diagnostics, context);
	}

	/**
	 * Validates the derived_union_is_read_only constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_derived_union_is_read_only(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.derived_union_is_read_only(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_composite constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_multiplicity_of_composite(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.multiplicity_of_composite(diagnostics, context);
	}

	/**
	 * Validates the redefined_property_inherited constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_redefined_property_inherited(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.redefined_property_inherited(diagnostics, context);
	}

	/**
	 * Validates the subsetting_rules constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_subsetting_rules(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.subsetting_rules(diagnostics, context);
	}

	/**
	 * Validates the binding_to_attribute constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_binding_to_attribute(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.binding_to_attribute(diagnostics, context);
	}

	/**
	 * Validates the derived_union_is_derived constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_derived_union_is_derived(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.derived_union_is_derived(diagnostics, context);
	}

	/**
	 * Validates the deployment_target constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_deployment_target(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.deployment_target(diagnostics, context);
	}

	/**
	 * Validates the subsetted_property_names constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_subsetted_property_names(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.subsetted_property_names(diagnostics, context);
	}

	/**
	 * Validates the type_of_opposite_end constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_type_of_opposite_end(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.type_of_opposite_end(diagnostics, context);
	}

	/**
	 * Validates the qualified_is_association_end constraint of '<em>Property</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProperty_qualified_is_association_end(Property property, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return property.qualified_is_association_end(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectableElement(ConnectableElement connectableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(connectableElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(connectableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(connectableElement, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTypedElement(TypedElement typedElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(typedElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(typedElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(typedElement, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectorEnd(ConnectorEnd connectorEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(connectorEnd, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnectorEnd_role_and_part_with_port(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnectorEnd_part_with_port_empty(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnectorEnd_multiplicity(connectorEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnectorEnd_self_part_with_port(connectorEnd, diagnostics, context);
		return result;
	}

	/**
	 * Validates the role_and_part_with_port constraint of '<em>Connector End</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectorEnd_role_and_part_with_port(ConnectorEnd connectorEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connectorEnd.role_and_part_with_port(diagnostics, context);
	}

	/**
	 * Validates the part_with_port_empty constraint of '<em>Connector End</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectorEnd_part_with_port_empty(ConnectorEnd connectorEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connectorEnd.part_with_port_empty(diagnostics, context);
	}

	/**
	 * Validates the multiplicity constraint of '<em>Connector End</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectorEnd_multiplicity(ConnectorEnd connectorEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connectorEnd.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the self_part_with_port constraint of '<em>Connector End</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectorEnd_self_part_with_port(ConnectorEnd connectorEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connectorEnd.self_part_with_port(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMultiplicityElement(MultiplicityElement multiplicityElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(multiplicityElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(multiplicityElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(multiplicityElement, diagnostics, context);
		return result;
	}

	/**
	 * Validates the upper_ge_lower constraint of '<em>Multiplicity Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMultiplicityElement_upper_ge_lower(MultiplicityElement multiplicityElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return multiplicityElement.upper_ge_lower(diagnostics, context);
	}

	/**
	 * Validates the lower_ge_0 constraint of '<em>Multiplicity Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMultiplicityElement_lower_ge_0(MultiplicityElement multiplicityElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return multiplicityElement.lower_ge_0(diagnostics, context);
	}

	/**
	 * Validates the value_specification_no_side_effects constraint of '<em>Multiplicity Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMultiplicityElement_value_specification_no_side_effects(MultiplicityElement multiplicityElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return multiplicityElement.value_specification_no_side_effects(diagnostics, context);
	}

	/**
	 * Validates the value_specification_constant constraint of '<em>Multiplicity Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMultiplicityElement_value_specification_constant(MultiplicityElement multiplicityElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return multiplicityElement.value_specification_constant(diagnostics, context);
	}

	/**
	 * Validates the lower_is_integer constraint of '<em>Multiplicity Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMultiplicityElement_lower_is_integer(MultiplicityElement multiplicityElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return multiplicityElement.lower_is_integer(diagnostics, context);
	}

	/**
	 * Validates the upper_is_unlimitedNatural constraint of '<em>Multiplicity Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMultiplicityElement_upper_is_unlimitedNatural(MultiplicityElement multiplicityElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return multiplicityElement.upper_is_unlimitedNatural(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateValueSpecification(ValueSpecification valueSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(valueSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(valueSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(valueSpecification, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectableElementTemplateParameter(ConnectableElementTemplateParameter connectableElementTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(connectableElementTemplateParameter, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(connectableElementTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateParameter_must_be_compatible(connectableElementTemplateParameter, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDeploymentTarget(DeploymentTarget deploymentTarget, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(deploymentTarget, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(deploymentTarget, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(deploymentTarget, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDeployment(Deployment deployment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(deployment, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(deployment, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(deployment, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDependency(Dependency dependency, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(dependency, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(dependency, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(dependency, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDeploymentSpecification(DeploymentSpecification deploymentSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(deploymentSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateDeploymentSpecification_deployment_target(deploymentSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateDeploymentSpecification_deployed_elements(deploymentSpecification, diagnostics, context);
		return result;
	}

	/**
	 * Validates the deployment_target constraint of '<em>Deployment Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDeploymentSpecification_deployment_target(DeploymentSpecification deploymentSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return deploymentSpecification.deployment_target(diagnostics, context);
	}

	/**
	 * Validates the deployed_elements constraint of '<em>Deployment Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDeploymentSpecification_deployed_elements(DeploymentSpecification deploymentSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return deploymentSpecification.deployed_elements(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateArtifact(Artifact artifact, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(artifact, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(artifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(artifact, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDeployedArtifact(DeployedArtifact deployedArtifact, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(deployedArtifact, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(deployedArtifact, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(deployedArtifact, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateManifestation(Manifestation manifestation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(manifestation, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(manifestation, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(manifestation, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAbstraction(Abstraction abstraction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(abstraction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(abstraction, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(abstraction, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOpaqueExpression(OpaqueExpression opaqueExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(opaqueExpression, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateOpaqueExpression_language_body_size(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateOpaqueExpression_one_return_result_parameter(opaqueExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateOpaqueExpression_only_return_result_parameters(opaqueExpression, diagnostics, context);
		return result;
	}

	/**
	 * Validates the language_body_size constraint of '<em>Opaque Expression</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOpaqueExpression_language_body_size(OpaqueExpression opaqueExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return opaqueExpression.language_body_size(diagnostics, context);
	}

	/**
	 * Validates the one_return_result_parameter constraint of '<em>Opaque Expression</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOpaqueExpression_one_return_result_parameter(OpaqueExpression opaqueExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return opaqueExpression.one_return_result_parameter(diagnostics, context);
	}

	/**
	 * Validates the only_return_result_parameters constraint of '<em>Opaque Expression</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOpaqueExpression_only_return_result_parameters(OpaqueExpression opaqueExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return opaqueExpression.only_return_result_parameters(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameter(Parameter parameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(parameter, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameter_in_and_out(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameter_not_exception(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameter_connector_end(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameter_reentrant_behaviors(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameter_stream_and_exception(parameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameter_object_effect(parameter, diagnostics, context);
		return result;
	}

	/**
	 * Validates the in_and_out constraint of '<em>Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameter_in_and_out(Parameter parameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameter.in_and_out(diagnostics, context);
	}

	/**
	 * Validates the not_exception constraint of '<em>Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameter_not_exception(Parameter parameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameter.not_exception(diagnostics, context);
	}

	/**
	 * Validates the connector_end constraint of '<em>Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameter_connector_end(Parameter parameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameter.connector_end(diagnostics, context);
	}

	/**
	 * Validates the reentrant_behaviors constraint of '<em>Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameter_reentrant_behaviors(Parameter parameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameter.reentrant_behaviors(diagnostics, context);
	}

	/**
	 * Validates the stream_and_exception constraint of '<em>Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameter_stream_and_exception(Parameter parameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameter.stream_and_exception(diagnostics, context);
	}

	/**
	 * Validates the object_effect constraint of '<em>Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameter_object_effect(Parameter parameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameter.object_effect(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOperation(Operation operation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(operation, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioralFeature_abstract_no_method(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateOperation_at_most_one_return(operation, diagnostics, context);
		if (result || diagnostics != null) result &= validateOperation_only_body_for_query(operation, diagnostics, context);
		return result;
	}

	/**
	 * Validates the at_most_one_return constraint of '<em>Operation</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOperation_at_most_one_return(Operation operation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return operation.at_most_one_return(diagnostics, context);
	}

	/**
	 * Validates the only_body_for_query constraint of '<em>Operation</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOperation_only_body_for_query(Operation operation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return operation.only_body_for_query(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavioralFeature(BehavioralFeature behavioralFeature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(behavioralFeature, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(behavioralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioralFeature_abstract_no_method(behavioralFeature, diagnostics, context);
		return result;
	}

	/**
	 * Validates the abstract_no_method constraint of '<em>Behavioral Feature</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehavioralFeature_abstract_no_method(BehavioralFeature behavioralFeature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return behavioralFeature.abstract_no_method(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFeature(Feature feature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(feature, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(feature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(feature, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRedefinableElement(RedefinableElement redefinableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(redefinableElement, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(redefinableElement, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(redefinableElement, diagnostics, context);
		return result;
	}

	/**
	 * Validates the redefinition_consistent constraint of '<em>Redefinable Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRedefinableElement_redefinition_consistent(RedefinableElement redefinableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return redefinableElement.redefinition_consistent(diagnostics, context);
	}

	/**
	 * Validates the non_leaf_redefinition constraint of '<em>Redefinable Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRedefinableElement_non_leaf_redefinition(RedefinableElement redefinableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return redefinableElement.non_leaf_redefinition(diagnostics, context);
	}

	/**
	 * Validates the redefinition_context_valid constraint of '<em>Redefinable Element</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRedefinableElement_redefinition_context_valid(RedefinableElement redefinableElement, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return redefinableElement.redefinition_context_valid(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameterSet(ParameterSet parameterSet, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(parameterSet, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameterSet_same_parameterized_entity(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameterSet_input(parameterSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateParameterSet_two_parameter_sets(parameterSet, diagnostics, context);
		return result;
	}

	/**
	 * Validates the same_parameterized_entity constraint of '<em>Parameter Set</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameterSet_same_parameterized_entity(ParameterSet parameterSet, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameterSet.same_parameterized_entity(diagnostics, context);
	}

	/**
	 * Validates the input constraint of '<em>Parameter Set</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameterSet_input(ParameterSet parameterSet, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameterSet.input(diagnostics, context);
	}

	/**
	 * Validates the two_parameter_sets constraint of '<em>Parameter Set</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameterSet_two_parameter_sets(ParameterSet parameterSet, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return parameterSet.two_parameter_sets(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConstraint(Constraint constraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(constraint, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_boolean_value(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_no_side_effects(constraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_not_apply_to_self(constraint, diagnostics, context);
		return result;
	}

	/**
	 * Validates the boolean_value constraint of '<em>Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConstraint_boolean_value(Constraint constraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return constraint.boolean_value(diagnostics, context);
	}

	/**
	 * Validates the no_side_effects constraint of '<em>Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConstraint_no_side_effects(Constraint constraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return constraint.no_side_effects(diagnostics, context);
	}

	/**
	 * Validates the not_apply_to_self constraint of '<em>Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConstraint_not_apply_to_self(Constraint constraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return constraint.not_apply_to_self(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDataType(DataType dataType, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(dataType, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(dataType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(dataType, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInterface(Interface interface_, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interface_, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(interface_, diagnostics, context);
		if (result || diagnostics != null) result &= validateInterface_visibility(interface_, diagnostics, context);
		return result;
	}

	/**
	 * Validates the visibility constraint of '<em>Interface</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInterface_visibility(Interface interface_, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interface_.visibility(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReception(Reception reception, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(reception, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioralFeature_abstract_no_method(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateReception_same_name_as_signal(reception, diagnostics, context);
		if (result || diagnostics != null) result &= validateReception_same_structure_as_signal(reception, diagnostics, context);
		return result;
	}

	/**
	 * Validates the same_name_as_signal constraint of '<em>Reception</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReception_same_name_as_signal(Reception reception, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reception.same_name_as_signal(diagnostics, context);
	}

	/**
	 * Validates the same_structure_as_signal constraint of '<em>Reception</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReception_same_structure_as_signal(Reception reception, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reception.same_structure_as_signal(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSignal(Signal signal, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(signal, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(signal, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(signal, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolStateMachine(ProtocolStateMachine protocolStateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(protocolStateMachine, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_most_one_behavior(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_parameters_match(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_feature_of_context_classifier(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_connection_points(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_classifier_context(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_method(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_context_classifier(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateProtocolStateMachine_deep_or_shallow_history(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateProtocolStateMachine_entry_exit_do(protocolStateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateProtocolStateMachine_protocol_transitions(protocolStateMachine, diagnostics, context);
		return result;
	}

	/**
	 * Validates the deep_or_shallow_history constraint of '<em>Protocol State Machine</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolStateMachine_deep_or_shallow_history(ProtocolStateMachine protocolStateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return protocolStateMachine.deep_or_shallow_history(diagnostics, context);
	}

	/**
	 * Validates the entry_exit_do constraint of '<em>Protocol State Machine</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolStateMachine_entry_exit_do(ProtocolStateMachine protocolStateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return protocolStateMachine.entry_exit_do(diagnostics, context);
	}

	/**
	 * Validates the protocol_transitions constraint of '<em>Protocol State Machine</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolStateMachine_protocol_transitions(ProtocolStateMachine protocolStateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return protocolStateMachine.protocol_transitions(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStateMachine(StateMachine stateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(stateMachine, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_most_one_behavior(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_parameters_match(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_feature_of_context_classifier(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_connection_points(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_classifier_context(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_method(stateMachine, diagnostics, context);
		if (result || diagnostics != null) result &= validateStateMachine_context_classifier(stateMachine, diagnostics, context);
		return result;
	}

	/**
	 * Validates the connection_points constraint of '<em>State Machine</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStateMachine_connection_points(StateMachine stateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stateMachine.connection_points(diagnostics, context);
	}

	/**
	 * Validates the classifier_context constraint of '<em>State Machine</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStateMachine_classifier_context(StateMachine stateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stateMachine.classifier_context(diagnostics, context);
	}

	/**
	 * Validates the method constraint of '<em>State Machine</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStateMachine_method(StateMachine stateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stateMachine.method(diagnostics, context);
	}

	/**
	 * Validates the context_classifier constraint of '<em>State Machine</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStateMachine_context_classifier(StateMachine stateMachine, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stateMachine.context_classifier(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(pseudostate, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_transitions_outgoing(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_choice_vertex(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_outgoing_from_initial(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_join_vertex(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_junction_vertex(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_history_vertices(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_initial_vertex(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_fork_vertex(pseudostate, diagnostics, context);
		if (result || diagnostics != null) result &= validatePseudostate_transitions_incoming(pseudostate, diagnostics, context);
		return result;
	}

	/**
	 * Validates the transitions_outgoing constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_transitions_outgoing(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.transitions_outgoing(diagnostics, context);
	}

	/**
	 * Validates the choice_vertex constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_choice_vertex(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.choice_vertex(diagnostics, context);
	}

	/**
	 * Validates the outgoing_from_initial constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_outgoing_from_initial(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.outgoing_from_initial(diagnostics, context);
	}

	/**
	 * Validates the join_vertex constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_join_vertex(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.join_vertex(diagnostics, context);
	}

	/**
	 * Validates the junction_vertex constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_junction_vertex(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.junction_vertex(diagnostics, context);
	}

	/**
	 * Validates the history_vertices constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_history_vertices(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.history_vertices(diagnostics, context);
	}

	/**
	 * Validates the initial_vertex constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_initial_vertex(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.initial_vertex(diagnostics, context);
	}

	/**
	 * Validates the fork_vertex constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_fork_vertex(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.fork_vertex(diagnostics, context);
	}

	/**
	 * Validates the transitions_incoming constraint of '<em>Pseudostate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostate_transitions_incoming(Pseudostate pseudostate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pseudostate.transitions_incoming(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateVertex(Vertex vertex, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(vertex, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(vertex, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(vertex, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRegion(Region region, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(region, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(region, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(region, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(region, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(region, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(region, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(region, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(region, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateRegion_deep_history_vertex(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateRegion_shallow_history_vertex(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateRegion_owned(region, diagnostics, context);
		if (result || diagnostics != null) result &= validateRegion_initial_vertex(region, diagnostics, context);
		return result;
	}

	/**
	 * Validates the deep_history_vertex constraint of '<em>Region</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRegion_deep_history_vertex(Region region, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return region.deep_history_vertex(diagnostics, context);
	}

	/**
	 * Validates the shallow_history_vertex constraint of '<em>Region</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRegion_shallow_history_vertex(Region region, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return region.shallow_history_vertex(diagnostics, context);
	}

	/**
	 * Validates the owned constraint of '<em>Region</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRegion_owned(Region region, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return region.owned(diagnostics, context);
	}

	/**
	 * Validates the initial_vertex constraint of '<em>Region</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRegion_initial_vertex(Region region, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return region.initial_vertex(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateState(State state, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(state, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(state, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(state, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(state, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(state, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(state, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(state, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(state, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_entry_or_exit(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_submachine_states(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_composite_states(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_destinations_or_sources_of_transitions(state, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_submachine_or_regions(state, diagnostics, context);
		return result;
	}

	/**
	 * Validates the entry_or_exit constraint of '<em>State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateState_entry_or_exit(State state, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return state.entry_or_exit(diagnostics, context);
	}

	/**
	 * Validates the submachine_states constraint of '<em>State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateState_submachine_states(State state, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return state.submachine_states(diagnostics, context);
	}

	/**
	 * Validates the composite_states constraint of '<em>State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateState_composite_states(State state, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return state.composite_states(diagnostics, context);
	}

	/**
	 * Validates the destinations_or_sources_of_transitions constraint of '<em>State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateState_destinations_or_sources_of_transitions(State state, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return state.destinations_or_sources_of_transitions(diagnostics, context);
	}

	/**
	 * Validates the submachine_or_regions constraint of '<em>State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateState_submachine_or_regions(State state, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return state.submachine_or_regions(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectionPointReference(ConnectionPointReference connectionPointReference, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(connectionPointReference, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnectionPointReference_exit_pseudostates(connectionPointReference, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnectionPointReference_entry_pseudostates(connectionPointReference, diagnostics, context);
		return result;
	}

	/**
	 * Validates the exit_pseudostates constraint of '<em>Connection Point Reference</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectionPointReference_exit_pseudostates(ConnectionPointReference connectionPointReference, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connectionPointReference.exit_pseudostates(diagnostics, context);
	}

	/**
	 * Validates the entry_pseudostates constraint of '<em>Connection Point Reference</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectionPointReference_entry_pseudostates(ConnectionPointReference connectionPointReference, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connectionPointReference.entry_pseudostates(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTrigger(Trigger trigger, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(trigger, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(trigger, diagnostics, context);
		if (result || diagnostics != null) result &= validateTrigger_trigger_with_ports(trigger, diagnostics, context);
		return result;
	}

	/**
	 * Validates the trigger_with_ports constraint of '<em>Trigger</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTrigger_trigger_with_ports(Trigger trigger, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return trigger.trigger_with_ports(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateEvent(Event event, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(event, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(event, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(event, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(event, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(event, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(event, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(event, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(event, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(event, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(event, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(event, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(event, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(event, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(event, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(event, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePort(Port port, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(port, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(port, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(port, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(port, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(port, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(port, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(port, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(port, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetting_context_conforms(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_derived_union_is_read_only(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_multiplicity_of_composite(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_redefined_property_inherited(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetting_rules(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_binding_to_attribute(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_derived_union_is_derived(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_deployment_target(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetted_property_names(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_type_of_opposite_end(port, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_qualified_is_association_end(port, diagnostics, context);
		if (result || diagnostics != null) result &= validatePort_port_aggregation(port, diagnostics, context);
		if (result || diagnostics != null) result &= validatePort_default_value(port, diagnostics, context);
		if (result || diagnostics != null) result &= validatePort_encapsulated_owner(port, diagnostics, context);
		return result;
	}

	/**
	 * Validates the port_aggregation constraint of '<em>Port</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePort_port_aggregation(Port port, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return port.port_aggregation(diagnostics, context);
	}

	/**
	 * Validates the default_value constraint of '<em>Port</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePort_default_value(Port port, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return port.default_value(diagnostics, context);
	}

	/**
	 * Validates the encapsulated_owner constraint of '<em>Port</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePort_encapsulated_owner(Port port, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return port.encapsulated_owner(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(transition, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_state_is_external(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_join_segment_guards(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_state_is_internal(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_outgoing_pseudostates(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_join_segment_state(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_fork_segment_state(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_state_is_local(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_initial_transition(transition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_fork_segment_guards(transition, diagnostics, context);
		return result;
	}

	/**
	 * Validates the state_is_external constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_state_is_external(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.state_is_external(diagnostics, context);
	}

	/**
	 * Validates the join_segment_guards constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_join_segment_guards(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.join_segment_guards(diagnostics, context);
	}

	/**
	 * Validates the state_is_internal constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_state_is_internal(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.state_is_internal(diagnostics, context);
	}

	/**
	 * Validates the outgoing_pseudostates constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_outgoing_pseudostates(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.outgoing_pseudostates(diagnostics, context);
	}

	/**
	 * Validates the join_segment_state constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_join_segment_state(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.join_segment_state(diagnostics, context);
	}

	/**
	 * Validates the fork_segment_state constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_fork_segment_state(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.fork_segment_state(diagnostics, context);
	}

	/**
	 * Validates the state_is_local constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_state_is_local(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.state_is_local(diagnostics, context);
	}

	/**
	 * Validates the initial_transition constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_initial_transition(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.initial_transition(diagnostics, context);
	}

	/**
	 * Validates the fork_segment_guards constraint of '<em>Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransition_fork_segment_guards(Transition transition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return transition.fork_segment_guards(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolConformance(ProtocolConformance protocolConformance, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(protocolConformance, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(protocolConformance, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(protocolConformance, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOperationTemplateParameter(OperationTemplateParameter operationTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(operationTemplateParameter, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateParameter_must_be_compatible(operationTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateOperationTemplateParameter_match_default_signature(operationTemplateParameter, diagnostics, context);
		return result;
	}

	/**
	 * Validates the match_default_signature constraint of '<em>Operation Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOperationTemplateParameter_match_default_signature(OperationTemplateParameter operationTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return operationTemplateParameter.match_default_signature(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuralFeature(StructuralFeature structuralFeature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(structuralFeature, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(structuralFeature, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(structuralFeature, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePackageMerge(PackageMerge packageMerge, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(packageMerge, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(packageMerge, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(packageMerge, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProfileApplication(ProfileApplication profileApplication, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(profileApplication, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(profileApplication, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(profileApplication, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateEnumeration(Enumeration enumeration, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(enumeration, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(enumeration, diagnostics, context);
		if (result || diagnostics != null) result &= validateEnumeration_immutable(enumeration, diagnostics, context);
		return result;
	}

	/**
	 * Validates the immutable constraint of '<em>Enumeration</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateEnumeration_immutable(Enumeration enumeration, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return enumeration.immutable(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateEnumerationLiteral(EnumerationLiteral enumerationLiteral, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(enumerationLiteral, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_deployment_artifact(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_structural_feature(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_defining_feature(enumerationLiteral, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_deployment_target(enumerationLiteral, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInstanceSpecification(InstanceSpecification instanceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(instanceSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_deployment_artifact(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_structural_feature(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_defining_feature(instanceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateInstanceSpecification_deployment_target(instanceSpecification, diagnostics, context);
		return result;
	}

	/**
	 * Validates the deployment_artifact constraint of '<em>Instance Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInstanceSpecification_deployment_artifact(InstanceSpecification instanceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return instanceSpecification.deployment_artifact(diagnostics, context);
	}

	/**
	 * Validates the structural_feature constraint of '<em>Instance Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInstanceSpecification_structural_feature(InstanceSpecification instanceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return instanceSpecification.structural_feature(diagnostics, context);
	}

	/**
	 * Validates the defining_feature constraint of '<em>Instance Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInstanceSpecification_defining_feature(InstanceSpecification instanceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return instanceSpecification.defining_feature(diagnostics, context);
	}

	/**
	 * Validates the deployment_target constraint of '<em>Instance Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInstanceSpecification_deployment_target(InstanceSpecification instanceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return instanceSpecification.deployment_target(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSlot(Slot slot, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(slot, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(slot, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(slot, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePrimitiveType(PrimitiveType primitiveType, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(primitiveType, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(primitiveType, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(primitiveType, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateElementImport(ElementImport elementImport, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(elementImport, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validateElementImport_imported_element_is_public(elementImport, diagnostics, context);
		if (result || diagnostics != null) result &= validateElementImport_visibility_public_or_private(elementImport, diagnostics, context);
		return result;
	}

	/**
	 * Validates the imported_element_is_public constraint of '<em>Element Import</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateElementImport_imported_element_is_public(ElementImport elementImport, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return elementImport.imported_element_is_public(diagnostics, context);
	}

	/**
	 * Validates the visibility_public_or_private constraint of '<em>Element Import</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateElementImport_visibility_public_or_private(ElementImport elementImport, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return elementImport.visibility_public_or_private(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePackageImport(PackageImport packageImport, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(packageImport, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(packageImport, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageImport_public_or_private(packageImport, diagnostics, context);
		return result;
	}

	/**
	 * Validates the public_or_private constraint of '<em>Package Import</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePackageImport_public_or_private(PackageImport packageImport, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return packageImport.public_or_private(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtension(Extension extension, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(extension, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_number(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_types(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_binary_associations(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_association_ends(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_ends_must_be_typed(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateExtension_non_owned_end(extension, diagnostics, context);
		if (result || diagnostics != null) result &= validateExtension_is_binary(extension, diagnostics, context);
		return result;
	}

	/**
	 * Validates the non_owned_end constraint of '<em>Extension</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtension_non_owned_end(Extension extension, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return extension.non_owned_end(diagnostics, context);
	}

	/**
	 * Validates the is_binary constraint of '<em>Extension</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtension_is_binary(Extension extension, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return extension.is_binary(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtensionEnd(ExtensionEnd extensionEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(extensionEnd, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetting_context_conforms(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_derived_union_is_read_only(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_multiplicity_of_composite(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_redefined_property_inherited(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetting_rules(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_binding_to_attribute(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_derived_union_is_derived(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_deployment_target(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_subsetted_property_names(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_type_of_opposite_end(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateProperty_qualified_is_association_end(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateExtensionEnd_multiplicity(extensionEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateExtensionEnd_aggregation(extensionEnd, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Extension End</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtensionEnd_multiplicity(ExtensionEnd extensionEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return extensionEnd.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the aggregation constraint of '<em>Extension End</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtensionEnd_aggregation(ExtensionEnd extensionEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return extensionEnd.aggregation(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateModel(Model model, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(model, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(model, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(model, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(model, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(model, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(model, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(model, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(model, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(model, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(model, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(model, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackage_elements_public_or_private(model, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStringExpression(StringExpression stringExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(stringExpression, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateStringExpression_operands(stringExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateStringExpression_subexpressions(stringExpression, diagnostics, context);
		return result;
	}

	/**
	 * Validates the operands constraint of '<em>String Expression</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStringExpression_operands(StringExpression stringExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stringExpression.operands(diagnostics, context);
	}

	/**
	 * Validates the subexpressions constraint of '<em>String Expression</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStringExpression_subexpressions(StringExpression stringExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return stringExpression.subexpressions(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExpression(Expression expression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(expression, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(expression, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(expression, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUsage(Usage usage, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(usage, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(usage, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(usage, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCollaborationUse(CollaborationUse collaborationUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(collaborationUse, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateCollaborationUse_client_elements(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateCollaborationUse_every_role(collaborationUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateCollaborationUse_connectors(collaborationUse, diagnostics, context);
		return result;
	}

	/**
	 * Validates the client_elements constraint of '<em>Collaboration Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCollaborationUse_client_elements(CollaborationUse collaborationUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return collaborationUse.client_elements(diagnostics, context);
	}

	/**
	 * Validates the every_role constraint of '<em>Collaboration Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCollaborationUse_every_role(CollaborationUse collaborationUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return collaborationUse.every_role(diagnostics, context);
	}

	/**
	 * Validates the connectors constraint of '<em>Collaboration Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCollaborationUse_connectors(CollaborationUse collaborationUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return collaborationUse.connectors(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCollaboration(Collaboration collaboration, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(collaboration, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(collaboration, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(collaboration, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuredClassifier(StructuredClassifier structuredClassifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(structuredClassifier, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(structuredClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(structuredClassifier, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnector(Connector connector, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(connector, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnector_types(connector, diagnostics, context);
		if (result || diagnostics != null) result &= validateConnector_roles(connector, diagnostics, context);
		return result;
	}

	/**
	 * Validates the types constraint of '<em>Connector</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnector_types(Connector connector, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connector.types(diagnostics, context);
	}

	/**
	 * Validates the roles constraint of '<em>Connector</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnector_roles(Connector connector, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return connector.roles(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGeneralization(Generalization generalization, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(generalization, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(generalization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(generalization, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGeneralizationSet(GeneralizationSet generalizationSet, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(generalizationSet, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateGeneralizationSet_generalization_same_classifier(generalizationSet, diagnostics, context);
		if (result || diagnostics != null) result &= validateGeneralizationSet_maps_to_generalization_set(generalizationSet, diagnostics, context);
		return result;
	}

	/**
	 * Validates the generalization_same_classifier constraint of '<em>Generalization Set</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGeneralizationSet_generalization_same_classifier(GeneralizationSet generalizationSet, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return generalizationSet.generalization_same_classifier(diagnostics, context);
	}

	/**
	 * Validates the maps_to_generalization_set constraint of '<em>Generalization Set</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGeneralizationSet_maps_to_generalization_set(GeneralizationSet generalizationSet, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return generalizationSet.maps_to_generalization_set(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRedefinableTemplateSignature(RedefinableTemplateSignature redefinableTemplateSignature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(redefinableTemplateSignature, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateSignature_own_elements(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateSignature_unique_parameters(redefinableTemplateSignature, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableTemplateSignature_redefines_parents(redefinableTemplateSignature, diagnostics, context);
		return result;
	}

	/**
	 * Validates the redefines_parents constraint of '<em>Redefinable Template Signature</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRedefinableTemplateSignature_redefines_parents(RedefinableTemplateSignature redefinableTemplateSignature, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return redefinableTemplateSignature.redefines_parents(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUseCase(UseCase useCase, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(useCase, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateUseCase_binary_associations(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateUseCase_no_association_to_use_case(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateUseCase_cannot_include_self(useCase, diagnostics, context);
		if (result || diagnostics != null) result &= validateUseCase_must_have_name(useCase, diagnostics, context);
		return result;
	}

	/**
	 * Validates the binary_associations constraint of '<em>Use Case</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUseCase_binary_associations(UseCase useCase, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return useCase.binary_associations(diagnostics, context);
	}

	/**
	 * Validates the no_association_to_use_case constraint of '<em>Use Case</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUseCase_no_association_to_use_case(UseCase useCase, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return useCase.no_association_to_use_case(diagnostics, context);
	}

	/**
	 * Validates the cannot_include_self constraint of '<em>Use Case</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUseCase_cannot_include_self(UseCase useCase, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return useCase.cannot_include_self(diagnostics, context);
	}

	/**
	 * Validates the must_have_name constraint of '<em>Use Case</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUseCase_must_have_name(UseCase useCase, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return useCase.must_have_name(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtend(Extend extend, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(extend, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(extend, diagnostics, context);
		if (result || diagnostics != null) result &= validateExtend_extension_points(extend, diagnostics, context);
		return result;
	}

	/**
	 * Validates the extension_points constraint of '<em>Extend</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtend_extension_points(Extend extend, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return extend.extension_points(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtensionPoint(ExtensionPoint extensionPoint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(extensionPoint, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(extensionPoint, diagnostics, context);
		if (result || diagnostics != null) result &= validateExtensionPoint_must_have_name(extensionPoint, diagnostics, context);
		return result;
	}

	/**
	 * Validates the must_have_name constraint of '<em>Extension Point</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExtensionPoint_must_have_name(ExtensionPoint extensionPoint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return extensionPoint.must_have_name(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInclude(Include include, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(include, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(include, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(include, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(include, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(include, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(include, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(include, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(include, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(include, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(include, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(include, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(include, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(include, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(include, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSubstitution(Substitution substitution, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(substitution, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(substitution, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(substitution, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRealization(Realization realization, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(realization, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(realization, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(realization, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifierTemplateParameter(ClassifierTemplateParameter classifierTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(classifierTemplateParameter, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateTemplateParameter_must_be_compatible(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifierTemplateParameter_has_constraining_classifier(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifierTemplateParameter_parametered_element_no_features(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifierTemplateParameter_matching_abstract(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifierTemplateParameter_actual_is_classifier(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifierTemplateParameter_constraining_classifiers_constrain_args(classifierTemplateParameter, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifierTemplateParameter_constraining_classifiers_constrain_parametered_element(classifierTemplateParameter, diagnostics, context);
		return result;
	}

	/**
	 * Validates the has_constraining_classifier constraint of '<em>Classifier Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifierTemplateParameter_has_constraining_classifier(ClassifierTemplateParameter classifierTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifierTemplateParameter.has_constraining_classifier(diagnostics, context);
	}

	/**
	 * Validates the parametered_element_no_features constraint of '<em>Classifier Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifierTemplateParameter_parametered_element_no_features(ClassifierTemplateParameter classifierTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifierTemplateParameter.parametered_element_no_features(diagnostics, context);
	}

	/**
	 * Validates the matching_abstract constraint of '<em>Classifier Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifierTemplateParameter_matching_abstract(ClassifierTemplateParameter classifierTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifierTemplateParameter.matching_abstract(diagnostics, context);
	}

	/**
	 * Validates the actual_is_classifier constraint of '<em>Classifier Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifierTemplateParameter_actual_is_classifier(ClassifierTemplateParameter classifierTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifierTemplateParameter.actual_is_classifier(diagnostics, context);
	}

	/**
	 * Validates the constraining_classifiers_constrain_args constraint of '<em>Classifier Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifierTemplateParameter_constraining_classifiers_constrain_args(ClassifierTemplateParameter classifierTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifierTemplateParameter.constraining_classifiers_constrain_args(diagnostics, context);
	}

	/**
	 * Validates the constraining_classifiers_constrain_parametered_element constraint of '<em>Classifier Template Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClassifierTemplateParameter_constraining_classifiers_constrain_parametered_element(ClassifierTemplateParameter classifierTemplateParameter, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return classifierTemplateParameter.constraining_classifiers_constrain_parametered_element(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInterfaceRealization(InterfaceRealization interfaceRealization, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interfaceRealization, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interfaceRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(interfaceRealization, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateEncapsulatedClassifier(EncapsulatedClassifier encapsulatedClassifier, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(encapsulatedClassifier, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(encapsulatedClassifier, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(encapsulatedClassifier, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityGroup(ActivityGroup activityGroup, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(activityGroup, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(activityGroup, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(activityGroup, diagnostics, context);
		return result;
	}

	/**
	 * Validates the nodes_and_edges constraint of '<em>Activity Group</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityGroup_nodes_and_edges(ActivityGroup activityGroup, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityGroup.nodes_and_edges(diagnostics, context);
	}

	/**
	 * Validates the not_contained constraint of '<em>Activity Group</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityGroup_not_contained(ActivityGroup activityGroup, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityGroup.not_contained(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityEdge(ActivityEdge activityEdge, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(activityEdge, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(activityEdge, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityEdge_source_and_target(activityEdge, diagnostics, context);
		return result;
	}

	/**
	 * Validates the source_and_target constraint of '<em>Activity Edge</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityEdge_source_and_target(ActivityEdge activityEdge, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityEdge.source_and_target(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityPartition(ActivityPartition activityPartition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(activityPartition, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityPartition_represents_classifier(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityPartition_represents_property_and_is_contained(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityPartition_represents_property(activityPartition, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityPartition_dimension_not_contained(activityPartition, diagnostics, context);
		return result;
	}

	/**
	 * Validates the represents_classifier constraint of '<em>Activity Partition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityPartition_represents_classifier(ActivityPartition activityPartition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityPartition.represents_classifier(diagnostics, context);
	}

	/**
	 * Validates the represents_property_and_is_contained constraint of '<em>Activity Partition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityPartition_represents_property_and_is_contained(ActivityPartition activityPartition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityPartition.represents_property_and_is_contained(diagnostics, context);
	}

	/**
	 * Validates the represents_property constraint of '<em>Activity Partition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityPartition_represents_property(ActivityPartition activityPartition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityPartition.represents_property(diagnostics, context);
	}

	/**
	 * Validates the dimension_not_contained constraint of '<em>Activity Partition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityPartition_dimension_not_contained(ActivityPartition activityPartition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityPartition.dimension_not_contained(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityNode(ActivityNode activityNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(activityNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(activityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(activityNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInterruptibleActivityRegion(InterruptibleActivityRegion interruptibleActivityRegion, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interruptibleActivityRegion, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(interruptibleActivityRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateInterruptibleActivityRegion_interrupting_edges(interruptibleActivityRegion, diagnostics, context);
		return result;
	}

	/**
	 * Validates the interrupting_edges constraint of '<em>Interruptible Activity Region</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInterruptibleActivityRegion_interrupting_edges(InterruptibleActivityRegion interruptibleActivityRegion, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interruptibleActivityRegion.interrupting_edges(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuredActivityNode(StructuredActivityNode structuredActivityNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(structuredActivityNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_output_pin_edges(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_edges(structuredActivityNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_input_pin_edges(structuredActivityNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the output_pin_edges constraint of '<em>Structured Activity Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuredActivityNode_output_pin_edges(StructuredActivityNode structuredActivityNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuredActivityNode.output_pin_edges(diagnostics, context);
	}

	/**
	 * Validates the edges constraint of '<em>Structured Activity Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuredActivityNode_edges(StructuredActivityNode structuredActivityNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuredActivityNode.edges(diagnostics, context);
	}

	/**
	 * Validates the input_pin_edges constraint of '<em>Structured Activity Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuredActivityNode_input_pin_edges(StructuredActivityNode structuredActivityNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuredActivityNode.input_pin_edges(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAction(Action action, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(action, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(action, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(action, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(action, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(action, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(action, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(action, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(action, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(action, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(action, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExecutableNode(ExecutableNode executableNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(executableNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(executableNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(executableNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExceptionHandler(ExceptionHandler exceptionHandler, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(exceptionHandler, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateExceptionHandler_handler_body_edges(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateExceptionHandler_output_pins(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateExceptionHandler_one_input(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateExceptionHandler_edge_source_target(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateExceptionHandler_handler_body_owner(exceptionHandler, diagnostics, context);
		if (result || diagnostics != null) result &= validateExceptionHandler_exception_input_type(exceptionHandler, diagnostics, context);
		return result;
	}

	/**
	 * Validates the handler_body_edges constraint of '<em>Exception Handler</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExceptionHandler_handler_body_edges(ExceptionHandler exceptionHandler, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return exceptionHandler.handler_body_edges(diagnostics, context);
	}

	/**
	 * Validates the output_pins constraint of '<em>Exception Handler</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExceptionHandler_output_pins(ExceptionHandler exceptionHandler, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return exceptionHandler.output_pins(diagnostics, context);
	}

	/**
	 * Validates the one_input constraint of '<em>Exception Handler</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExceptionHandler_one_input(ExceptionHandler exceptionHandler, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return exceptionHandler.one_input(diagnostics, context);
	}

	/**
	 * Validates the edge_source_target constraint of '<em>Exception Handler</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExceptionHandler_edge_source_target(ExceptionHandler exceptionHandler, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return exceptionHandler.edge_source_target(diagnostics, context);
	}

	/**
	 * Validates the handler_body_owner constraint of '<em>Exception Handler</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExceptionHandler_handler_body_owner(ExceptionHandler exceptionHandler, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return exceptionHandler.handler_body_owner(diagnostics, context);
	}

	/**
	 * Validates the exception_input_type constraint of '<em>Exception Handler</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExceptionHandler_exception_input_type(ExceptionHandler exceptionHandler, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return exceptionHandler.exception_input_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectNode(ObjectNode objectNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(objectNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(objectNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(objectNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the input_output_parameter constraint of '<em>Object Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectNode_input_output_parameter(ObjectNode objectNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectNode.input_output_parameter(diagnostics, context);
	}

	/**
	 * Validates the selection_behavior constraint of '<em>Object Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectNode_selection_behavior(ObjectNode objectNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectNode.selection_behavior(diagnostics, context);
	}

	/**
	 * Validates the object_flow_edges constraint of '<em>Object Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectNode_object_flow_edges(ObjectNode objectNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectNode.object_flow_edges(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInputPin(InputPin inputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(inputPin, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_control_pins(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_not_unique(inputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateInputPin_outgoing_edges_structured_only(inputPin, diagnostics, context);
		return result;
	}

	/**
	 * Validates the outgoing_edges_structured_only constraint of '<em>Input Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInputPin_outgoing_edges_structured_only(InputPin inputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return inputPin.outgoing_edges_structured_only(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePin(Pin pin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(pin, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_control_pins(pin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_not_unique(pin, diagnostics, context);
		return result;
	}

	/**
	 * Validates the control_pins constraint of '<em>Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePin_control_pins(Pin pin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pin.control_pins(diagnostics, context);
	}

	/**
	 * Validates the not_unique constraint of '<em>Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePin_not_unique(Pin pin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return pin.not_unique(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOutputPin(OutputPin outputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(outputPin, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_control_pins(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_not_unique(outputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateOutputPin_incoming_edges_structured_only(outputPin, diagnostics, context);
		return result;
	}

	/**
	 * Validates the incoming_edges_structured_only constraint of '<em>Output Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOutputPin_incoming_edges_structured_only(OutputPin outputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return outputPin.incoming_edges_structured_only(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateVariable(Variable variable, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(variable, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(variable, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(variable, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateValueSpecificationAction(ValueSpecificationAction valueSpecificationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(valueSpecificationAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateValueSpecificationAction_multiplicity(valueSpecificationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateValueSpecificationAction_compatible_type(valueSpecificationAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Value Specification Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateValueSpecificationAction_multiplicity(ValueSpecificationAction valueSpecificationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return valueSpecificationAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the compatible_type constraint of '<em>Value Specification Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateValueSpecificationAction_compatible_type(ValueSpecificationAction valueSpecificationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return valueSpecificationAction.compatible_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateVariableAction(VariableAction variableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(variableAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(variableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateVariableAction_scope_of_variable(variableAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the scope_of_variable constraint of '<em>Variable Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateVariableAction_scope_of_variable(VariableAction variableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return variableAction.scope_of_variable(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteLinkAction(WriteLinkAction writeLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(writeLinkAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_pins(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_association(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_not_static(writeLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteLinkAction_allow_access(writeLinkAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the allow_access constraint of '<em>Write Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteLinkAction_allow_access(WriteLinkAction writeLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return writeLinkAction.allow_access(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkAction(LinkAction linkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(linkAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_pins(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_association(linkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_not_static(linkAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the same_pins constraint of '<em>Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkAction_same_pins(LinkAction linkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkAction.same_pins(diagnostics, context);
	}

	/**
	 * Validates the same_association constraint of '<em>Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkAction_same_association(LinkAction linkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkAction.same_association(diagnostics, context);
	}

	/**
	 * Validates the not_static constraint of '<em>Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkAction_not_static(LinkAction linkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkAction.not_static(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndData(LinkEndData linkEndData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(linkEndData, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_same_type(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_multiplicity(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_end_object_input_pin(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_property_is_association_end(linkEndData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_qualifiers(linkEndData, diagnostics, context);
		return result;
	}

	/**
	 * Validates the same_type constraint of '<em>Link End Data</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndData_same_type(LinkEndData linkEndData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkEndData.same_type(diagnostics, context);
	}

	/**
	 * Validates the multiplicity constraint of '<em>Link End Data</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndData_multiplicity(LinkEndData linkEndData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkEndData.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the end_object_input_pin constraint of '<em>Link End Data</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndData_end_object_input_pin(LinkEndData linkEndData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkEndData.end_object_input_pin(diagnostics, context);
	}

	/**
	 * Validates the property_is_association_end constraint of '<em>Link End Data</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndData_property_is_association_end(LinkEndData linkEndData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkEndData.property_is_association_end(diagnostics, context);
	}

	/**
	 * Validates the qualifiers constraint of '<em>Link End Data</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndData_qualifiers(LinkEndData linkEndData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkEndData.qualifiers(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateQualifierValue(QualifierValue qualifierValue, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(qualifierValue, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateQualifierValue_multiplicity_of_qualifier(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateQualifierValue_type_of_qualifier(qualifierValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateQualifierValue_qualifier_attribute(qualifierValue, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity_of_qualifier constraint of '<em>Qualifier Value</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateQualifierValue_multiplicity_of_qualifier(QualifierValue qualifierValue, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return qualifierValue.multiplicity_of_qualifier(diagnostics, context);
	}

	/**
	 * Validates the type_of_qualifier constraint of '<em>Qualifier Value</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateQualifierValue_type_of_qualifier(QualifierValue qualifierValue, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return qualifierValue.type_of_qualifier(diagnostics, context);
	}

	/**
	 * Validates the qualifier_attribute constraint of '<em>Qualifier Value</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateQualifierValue_qualifier_attribute(QualifierValue qualifierValue, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return qualifierValue.qualifier_attribute(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteStructuralFeatureAction(WriteStructuralFeatureAction writeStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(writeStructuralFeatureAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_multiplicity(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_object_type(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_visibility(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_not_static(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_one_featuring_classifier(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_multiplicity_of_result(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_type_of_value(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_multiplicity_of_value(writeStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_type_of_result(writeStructuralFeatureAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity_of_result constraint of '<em>Write Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteStructuralFeatureAction_multiplicity_of_result(WriteStructuralFeatureAction writeStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return writeStructuralFeatureAction.multiplicity_of_result(diagnostics, context);
	}

	/**
	 * Validates the type_of_value constraint of '<em>Write Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteStructuralFeatureAction_type_of_value(WriteStructuralFeatureAction writeStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return writeStructuralFeatureAction.type_of_value(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_value constraint of '<em>Write Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteStructuralFeatureAction_multiplicity_of_value(WriteStructuralFeatureAction writeStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return writeStructuralFeatureAction.multiplicity_of_value(diagnostics, context);
	}

	/**
	 * Validates the type_of_result constraint of '<em>Write Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteStructuralFeatureAction_type_of_result(WriteStructuralFeatureAction writeStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return writeStructuralFeatureAction.type_of_result(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuralFeatureAction(StructuralFeatureAction structuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(structuralFeatureAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_multiplicity(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_object_type(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_visibility(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_not_static(structuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_one_featuring_classifier(structuralFeatureAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuralFeatureAction_multiplicity(StructuralFeatureAction structuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuralFeatureAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the object_type constraint of '<em>Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuralFeatureAction_object_type(StructuralFeatureAction structuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuralFeatureAction.object_type(diagnostics, context);
	}

	/**
	 * Validates the visibility constraint of '<em>Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuralFeatureAction_visibility(StructuralFeatureAction structuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuralFeatureAction.visibility(diagnostics, context);
	}

	/**
	 * Validates the not_static constraint of '<em>Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuralFeatureAction_not_static(StructuralFeatureAction structuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuralFeatureAction.not_static(diagnostics, context);
	}

	/**
	 * Validates the one_featuring_classifier constraint of '<em>Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStructuralFeatureAction_one_featuring_classifier(StructuralFeatureAction structuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return structuralFeatureAction.one_featuring_classifier(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteVariableAction(WriteVariableAction writeVariableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(writeVariableAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateVariableAction_scope_of_variable(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteVariableAction_value_type(writeVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteVariableAction_multiplicity(writeVariableAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the value_type constraint of '<em>Write Variable Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteVariableAction_value_type(WriteVariableAction writeVariableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return writeVariableAction.value_type(diagnostics, context);
	}

	/**
	 * Validates the multiplicity constraint of '<em>Write Variable Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateWriteVariableAction_multiplicity(WriteVariableAction writeVariableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return writeVariableAction.multiplicity(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptCallAction(AcceptCallAction acceptCallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(acceptCallAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_one_output_pin(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_no_input_pins(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_no_output_pins(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_unmarshall_signal_events(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_conforming_type(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptCallAction_result_pins(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptCallAction_trigger_call_event(acceptCallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptCallAction_unmarshall(acceptCallAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the result_pins constraint of '<em>Accept Call Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptCallAction_result_pins(AcceptCallAction acceptCallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptCallAction.result_pins(diagnostics, context);
	}

	/**
	 * Validates the trigger_call_event constraint of '<em>Accept Call Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptCallAction_trigger_call_event(AcceptCallAction acceptCallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptCallAction.trigger_call_event(diagnostics, context);
	}

	/**
	 * Validates the unmarshall constraint of '<em>Accept Call Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptCallAction_unmarshall(AcceptCallAction acceptCallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptCallAction.unmarshall(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptEventAction(AcceptEventAction acceptEventAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(acceptEventAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_one_output_pin(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_no_input_pins(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_no_output_pins(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_unmarshall_signal_events(acceptEventAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAcceptEventAction_conforming_type(acceptEventAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the one_output_pin constraint of '<em>Accept Event Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptEventAction_one_output_pin(AcceptEventAction acceptEventAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptEventAction.one_output_pin(diagnostics, context);
	}

	/**
	 * Validates the no_input_pins constraint of '<em>Accept Event Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptEventAction_no_input_pins(AcceptEventAction acceptEventAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptEventAction.no_input_pins(diagnostics, context);
	}

	/**
	 * Validates the no_output_pins constraint of '<em>Accept Event Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptEventAction_no_output_pins(AcceptEventAction acceptEventAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptEventAction.no_output_pins(diagnostics, context);
	}

	/**
	 * Validates the unmarshall_signal_events constraint of '<em>Accept Event Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptEventAction_unmarshall_signal_events(AcceptEventAction acceptEventAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptEventAction.unmarshall_signal_events(diagnostics, context);
	}

	/**
	 * Validates the conforming_type constraint of '<em>Accept Event Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAcceptEventAction_conforming_type(AcceptEventAction acceptEventAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return acceptEventAction.conforming_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActionInputPin(ActionInputPin actionInputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(actionInputPin, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_control_pins(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_not_unique(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateInputPin_outgoing_edges_structured_only(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateActionInputPin_input_pin(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateActionInputPin_one_output_pin(actionInputPin, diagnostics, context);
		if (result || diagnostics != null) result &= validateActionInputPin_no_control_or_object_flow(actionInputPin, diagnostics, context);
		return result;
	}

	/**
	 * Validates the input_pin constraint of '<em>Action Input Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActionInputPin_input_pin(ActionInputPin actionInputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return actionInputPin.input_pin(diagnostics, context);
	}

	/**
	 * Validates the one_output_pin constraint of '<em>Action Input Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActionInputPin_one_output_pin(ActionInputPin actionInputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return actionInputPin.one_output_pin(diagnostics, context);
	}

	/**
	 * Validates the no_control_or_object_flow constraint of '<em>Action Input Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActionInputPin_no_control_or_object_flow(ActionInputPin actionInputPin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return actionInputPin.no_control_or_object_flow(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAddStructuralFeatureValueAction(AddStructuralFeatureValueAction addStructuralFeatureValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(addStructuralFeatureValueAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_multiplicity(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_object_type(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_visibility(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_not_static(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_one_featuring_classifier(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_multiplicity_of_result(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_type_of_value(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_multiplicity_of_value(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_type_of_result(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAddStructuralFeatureValueAction_required_value(addStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAddStructuralFeatureValueAction_insertAt_pin(addStructuralFeatureValueAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the required_value constraint of '<em>Add Structural Feature Value Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAddStructuralFeatureValueAction_required_value(AddStructuralFeatureValueAction addStructuralFeatureValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return addStructuralFeatureValueAction.required_value(diagnostics, context);
	}

	/**
	 * Validates the insertAt_pin constraint of '<em>Add Structural Feature Value Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAddStructuralFeatureValueAction_insertAt_pin(AddStructuralFeatureValueAction addStructuralFeatureValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return addStructuralFeatureValueAction.insertAt_pin(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAddVariableValueAction(AddVariableValueAction addVariableValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(addVariableValueAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateVariableAction_scope_of_variable(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteVariableAction_value_type(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteVariableAction_multiplicity(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAddVariableValueAction_required_value(addVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateAddVariableValueAction_insertAt_pin(addVariableValueAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the required_value constraint of '<em>Add Variable Value Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAddVariableValueAction_required_value(AddVariableValueAction addVariableValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return addVariableValueAction.required_value(diagnostics, context);
	}

	/**
	 * Validates the insertAt_pin constraint of '<em>Add Variable Value Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAddVariableValueAction_insertAt_pin(AddVariableValueAction addVariableValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return addVariableValueAction.insertAt_pin(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBroadcastSignalAction(BroadcastSignalAction broadcastSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(broadcastSignalAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateBroadcastSignalAction_number_of_arguments(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateBroadcastSignalAction_type_ordering_multiplicity(broadcastSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateBroadcastSignalAction_no_onport(broadcastSignalAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the number_of_arguments constraint of '<em>Broadcast Signal Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBroadcastSignalAction_number_of_arguments(BroadcastSignalAction broadcastSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return broadcastSignalAction.number_of_arguments(diagnostics, context);
	}

	/**
	 * Validates the type_ordering_multiplicity constraint of '<em>Broadcast Signal Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBroadcastSignalAction_type_ordering_multiplicity(BroadcastSignalAction broadcastSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return broadcastSignalAction.type_ordering_multiplicity(diagnostics, context);
	}

	/**
	 * Validates the no_onport constraint of '<em>Broadcast Signal Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBroadcastSignalAction_no_onport(BroadcastSignalAction broadcastSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return broadcastSignalAction.no_onport(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInvocationAction(InvocationAction invocationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(invocationAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(invocationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(invocationAction, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallAction(CallAction callAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(callAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_argument_pins(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_result_pins(callAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_synchronous_call(callAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the argument_pins constraint of '<em>Call Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallAction_argument_pins(CallAction callAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return callAction.argument_pins(diagnostics, context);
	}

	/**
	 * Validates the result_pins constraint of '<em>Call Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallAction_result_pins(CallAction callAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return callAction.result_pins(diagnostics, context);
	}

	/**
	 * Validates the synchronous_call constraint of '<em>Call Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallAction_synchronous_call(CallAction callAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return callAction.synchronous_call(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallBehaviorAction(CallBehaviorAction callBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(callBehaviorAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_argument_pins(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_result_pins(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_synchronous_call(callBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallBehaviorAction_no_onport(callBehaviorAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_onport constraint of '<em>Call Behavior Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallBehaviorAction_no_onport(CallBehaviorAction callBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return callBehaviorAction.no_onport(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallOperationAction(CallOperationAction callOperationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(callOperationAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_argument_pins(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_result_pins(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_synchronous_call(callOperationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallOperationAction_type_target_pin(callOperationAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_target_pin constraint of '<em>Call Operation Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallOperationAction_type_target_pin(CallOperationAction callOperationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return callOperationAction.type_target_pin(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClause(Clause clause, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(clause, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validateClause_body_output_pins(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validateClause_decider_output(clause, diagnostics, context);
		if (result || diagnostics != null) result &= validateClause_test_and_body(clause, diagnostics, context);
		return result;
	}

	/**
	 * Validates the body_output_pins constraint of '<em>Clause</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClause_body_output_pins(Clause clause, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return clause.body_output_pins(diagnostics, context);
	}

	/**
	 * Validates the decider_output constraint of '<em>Clause</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClause_decider_output(Clause clause, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return clause.decider_output(diagnostics, context);
	}

	/**
	 * Validates the test_and_body constraint of '<em>Clause</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClause_test_and_body(Clause clause, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return clause.test_and_body(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClearAssociationAction(ClearAssociationAction clearAssociationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(clearAssociationAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClearAssociationAction_multiplicity(clearAssociationAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClearAssociationAction_same_type(clearAssociationAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Clear Association Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClearAssociationAction_multiplicity(ClearAssociationAction clearAssociationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return clearAssociationAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the same_type constraint of '<em>Clear Association Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClearAssociationAction_same_type(ClearAssociationAction clearAssociationAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return clearAssociationAction.same_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClearStructuralFeatureAction(ClearStructuralFeatureAction clearStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(clearStructuralFeatureAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_multiplicity(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_object_type(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_visibility(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_not_static(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_one_featuring_classifier(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClearStructuralFeatureAction_type_of_result(clearStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClearStructuralFeatureAction_multiplicity_of_result(clearStructuralFeatureAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_of_result constraint of '<em>Clear Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClearStructuralFeatureAction_type_of_result(ClearStructuralFeatureAction clearStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return clearStructuralFeatureAction.type_of_result(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_result constraint of '<em>Clear Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClearStructuralFeatureAction_multiplicity_of_result(ClearStructuralFeatureAction clearStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return clearStructuralFeatureAction.multiplicity_of_result(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateClearVariableAction(ClearVariableAction clearVariableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(clearVariableAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(clearVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateVariableAction_scope_of_variable(clearVariableAction, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConditionalNode(ConditionalNode conditionalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(conditionalNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_output_pin_edges(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_edges(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_input_pin_edges(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateConditionalNode_result_no_incoming(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateConditionalNode_no_input_pins(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateConditionalNode_one_clause_with_executable_node(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateConditionalNode_matching_output_pins(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateConditionalNode_executable_nodes(conditionalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateConditionalNode_clause_no_predecessor(conditionalNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the result_no_incoming constraint of '<em>Conditional Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConditionalNode_result_no_incoming(ConditionalNode conditionalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return conditionalNode.result_no_incoming(diagnostics, context);
	}

	/**
	 * Validates the no_input_pins constraint of '<em>Conditional Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConditionalNode_no_input_pins(ConditionalNode conditionalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return conditionalNode.no_input_pins(diagnostics, context);
	}

	/**
	 * Validates the one_clause_with_executable_node constraint of '<em>Conditional Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConditionalNode_one_clause_with_executable_node(ConditionalNode conditionalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return conditionalNode.one_clause_with_executable_node(diagnostics, context);
	}

	/**
	 * Validates the matching_output_pins constraint of '<em>Conditional Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConditionalNode_matching_output_pins(ConditionalNode conditionalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return conditionalNode.matching_output_pins(diagnostics, context);
	}

	/**
	 * Validates the executable_nodes constraint of '<em>Conditional Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConditionalNode_executable_nodes(ConditionalNode conditionalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return conditionalNode.executable_nodes(diagnostics, context);
	}

	/**
	 * Validates the clause_no_predecessor constraint of '<em>Conditional Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConditionalNode_clause_no_predecessor(ConditionalNode conditionalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return conditionalNode.clause_no_predecessor(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateLinkAction(CreateLinkAction createLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(createLinkAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_pins(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_association(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_not_static(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteLinkAction_allow_access(createLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateLinkAction_association_not_abstract(createLinkAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the association_not_abstract constraint of '<em>Create Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateLinkAction_association_not_abstract(CreateLinkAction createLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createLinkAction.association_not_abstract(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndCreationData(LinkEndCreationData linkEndCreationData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(linkEndCreationData, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_same_type(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_multiplicity(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_end_object_input_pin(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_property_is_association_end(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_qualifiers(linkEndCreationData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndCreationData_insertAt_pin(linkEndCreationData, diagnostics, context);
		return result;
	}

	/**
	 * Validates the insertAt_pin constraint of '<em>Link End Creation Data</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndCreationData_insertAt_pin(LinkEndCreationData linkEndCreationData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkEndCreationData.insertAt_pin(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateLinkObjectAction(CreateLinkObjectAction createLinkObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(createLinkObjectAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_pins(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_association(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_not_static(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteLinkAction_allow_access(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateLinkAction_association_not_abstract(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateLinkObjectAction_multiplicity(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateLinkObjectAction_type_of_result(createLinkObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateLinkObjectAction_association_class(createLinkObjectAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Create Link Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateLinkObjectAction_multiplicity(CreateLinkObjectAction createLinkObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createLinkObjectAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the type_of_result constraint of '<em>Create Link Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateLinkObjectAction_type_of_result(CreateLinkObjectAction createLinkObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createLinkObjectAction.type_of_result(diagnostics, context);
	}

	/**
	 * Validates the association_class constraint of '<em>Create Link Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateLinkObjectAction_association_class(CreateLinkObjectAction createLinkObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createLinkObjectAction.association_class(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateObjectAction(CreateObjectAction createObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(createObjectAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateObjectAction_classifier_not_abstract(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateObjectAction_multiplicity(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateObjectAction_classifier_not_association_class(createObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCreateObjectAction_same_type(createObjectAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the classifier_not_abstract constraint of '<em>Create Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateObjectAction_classifier_not_abstract(CreateObjectAction createObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createObjectAction.classifier_not_abstract(diagnostics, context);
	}

	/**
	 * Validates the multiplicity constraint of '<em>Create Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateObjectAction_multiplicity(CreateObjectAction createObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createObjectAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the classifier_not_association_class constraint of '<em>Create Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateObjectAction_classifier_not_association_class(CreateObjectAction createObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createObjectAction.classifier_not_association_class(diagnostics, context);
	}

	/**
	 * Validates the same_type constraint of '<em>Create Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCreateObjectAction_same_type(CreateObjectAction createObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return createObjectAction.same_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDestroyLinkAction(DestroyLinkAction destroyLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(destroyLinkAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_pins(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_association(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_not_static(destroyLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteLinkAction_allow_access(destroyLinkAction, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndDestructionData(LinkEndDestructionData linkEndDestructionData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(linkEndDestructionData, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_same_type(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_multiplicity(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_end_object_input_pin(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_property_is_association_end(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndData_qualifiers(linkEndDestructionData, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkEndDestructionData_destroyAt_pin(linkEndDestructionData, diagnostics, context);
		return result;
	}

	/**
	 * Validates the destroyAt_pin constraint of '<em>Link End Destruction Data</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLinkEndDestructionData_destroyAt_pin(LinkEndDestructionData linkEndDestructionData, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return linkEndDestructionData.destroyAt_pin(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDestroyObjectAction(DestroyObjectAction destroyObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(destroyObjectAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateDestroyObjectAction_multiplicity(destroyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateDestroyObjectAction_no_type(destroyObjectAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Destroy Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDestroyObjectAction_multiplicity(DestroyObjectAction destroyObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return destroyObjectAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the no_type constraint of '<em>Destroy Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDestroyObjectAction_no_type(DestroyObjectAction destroyObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return destroyObjectAction.no_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExpansionNode(ExpansionNode expansionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(expansionNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(expansionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateExpansionNode_region_as_input_or_output(expansionNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the region_as_input_or_output constraint of '<em>Expansion Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExpansionNode_region_as_input_or_output(ExpansionNode expansionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return expansionNode.region_as_input_or_output(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExpansionRegion(ExpansionRegion expansionRegion, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(expansionRegion, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_output_pin_edges(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_edges(expansionRegion, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_input_pin_edges(expansionRegion, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(loopNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_output_pin_edges(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_edges(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_input_pin_edges(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_result_no_incoming(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_input_edges(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_executable_nodes(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_body_output_pins(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_setup_test_and_body(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_matching_output_pins(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_matching_loop_variables(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_matching_result_pins(loopNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateLoopNode_loop_variable_outgoing(loopNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the result_no_incoming constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_result_no_incoming(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.result_no_incoming(diagnostics, context);
	}

	/**
	 * Validates the input_edges constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_input_edges(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.input_edges(diagnostics, context);
	}

	/**
	 * Validates the executable_nodes constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_executable_nodes(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.executable_nodes(diagnostics, context);
	}

	/**
	 * Validates the body_output_pins constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_body_output_pins(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.body_output_pins(diagnostics, context);
	}

	/**
	 * Validates the setup_test_and_body constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_setup_test_and_body(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.setup_test_and_body(diagnostics, context);
	}

	/**
	 * Validates the matching_output_pins constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_matching_output_pins(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.matching_output_pins(diagnostics, context);
	}

	/**
	 * Validates the matching_loop_variables constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_matching_loop_variables(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.matching_loop_variables(diagnostics, context);
	}

	/**
	 * Validates the matching_result_pins constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_matching_result_pins(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.matching_result_pins(diagnostics, context);
	}

	/**
	 * Validates the loop_variable_outgoing constraint of '<em>Loop Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLoopNode_loop_variable_outgoing(LoopNode loopNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return loopNode.loop_variable_outgoing(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOpaqueAction(OpaqueAction opaqueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(opaqueAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(opaqueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateOpaqueAction_language_body_size(opaqueAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the language_body_size constraint of '<em>Opaque Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOpaqueAction_language_body_size(OpaqueAction opaqueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return opaqueAction.language_body_size(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRaiseExceptionAction(RaiseExceptionAction raiseExceptionAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(raiseExceptionAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(raiseExceptionAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(raiseExceptionAction, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadExtentAction(ReadExtentAction readExtentAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readExtentAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadExtentAction_type_is_classifier(readExtentAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadExtentAction_multiplicity_of_result(readExtentAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_is_classifier constraint of '<em>Read Extent Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadExtentAction_type_is_classifier(ReadExtentAction readExtentAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readExtentAction.type_is_classifier(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_result constraint of '<em>Read Extent Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadExtentAction_multiplicity_of_result(ReadExtentAction readExtentAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readExtentAction.multiplicity_of_result(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadIsClassifiedObjectAction(ReadIsClassifiedObjectAction readIsClassifiedObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readIsClassifiedObjectAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadIsClassifiedObjectAction_no_type(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadIsClassifiedObjectAction_multiplicity_of_output(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadIsClassifiedObjectAction_boolean_result(readIsClassifiedObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadIsClassifiedObjectAction_multiplicity_of_input(readIsClassifiedObjectAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_type constraint of '<em>Read Is Classified Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadIsClassifiedObjectAction_no_type(ReadIsClassifiedObjectAction readIsClassifiedObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readIsClassifiedObjectAction.no_type(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_output constraint of '<em>Read Is Classified Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadIsClassifiedObjectAction_multiplicity_of_output(ReadIsClassifiedObjectAction readIsClassifiedObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readIsClassifiedObjectAction.multiplicity_of_output(diagnostics, context);
	}

	/**
	 * Validates the boolean_result constraint of '<em>Read Is Classified Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadIsClassifiedObjectAction_boolean_result(ReadIsClassifiedObjectAction readIsClassifiedObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readIsClassifiedObjectAction.boolean_result(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_input constraint of '<em>Read Is Classified Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadIsClassifiedObjectAction_multiplicity_of_input(ReadIsClassifiedObjectAction readIsClassifiedObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readIsClassifiedObjectAction.multiplicity_of_input(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkAction(ReadLinkAction readLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readLinkAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_pins(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_same_association(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateLinkAction_not_static(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkAction_type_and_ordering(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkAction_compatible_multiplicity(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkAction_visibility(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkAction_one_open_end(readLinkAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkAction_navigable_open_end(readLinkAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_and_ordering constraint of '<em>Read Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkAction_type_and_ordering(ReadLinkAction readLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkAction.type_and_ordering(diagnostics, context);
	}

	/**
	 * Validates the compatible_multiplicity constraint of '<em>Read Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkAction_compatible_multiplicity(ReadLinkAction readLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkAction.compatible_multiplicity(diagnostics, context);
	}

	/**
	 * Validates the visibility constraint of '<em>Read Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkAction_visibility(ReadLinkAction readLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkAction.visibility(diagnostics, context);
	}

	/**
	 * Validates the one_open_end constraint of '<em>Read Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkAction_one_open_end(ReadLinkAction readLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkAction.one_open_end(diagnostics, context);
	}

	/**
	 * Validates the navigable_open_end constraint of '<em>Read Link Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkAction_navigable_open_end(ReadLinkAction readLinkAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkAction.navigable_open_end(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readLinkObjectEndAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndAction_property(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndAction_multiplicity_of_object(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndAction_ends_of_association(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndAction_type_of_result(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndAction_multiplicity_of_result(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndAction_type_of_object(readLinkObjectEndAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndAction_association_of_association(readLinkObjectEndAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the property constraint of '<em>Read Link Object End Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction_property(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndAction.property(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_object constraint of '<em>Read Link Object End Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction_multiplicity_of_object(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndAction.multiplicity_of_object(diagnostics, context);
	}

	/**
	 * Validates the ends_of_association constraint of '<em>Read Link Object End Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction_ends_of_association(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndAction.ends_of_association(diagnostics, context);
	}

	/**
	 * Validates the type_of_result constraint of '<em>Read Link Object End Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction_type_of_result(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndAction.type_of_result(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_result constraint of '<em>Read Link Object End Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction_multiplicity_of_result(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndAction.multiplicity_of_result(diagnostics, context);
	}

	/**
	 * Validates the type_of_object constraint of '<em>Read Link Object End Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction_type_of_object(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndAction.type_of_object(diagnostics, context);
	}

	/**
	 * Validates the association_of_association constraint of '<em>Read Link Object End Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndAction_association_of_association(ReadLinkObjectEndAction readLinkObjectEndAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndAction.association_of_association(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readLinkObjectEndQualifierAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_multiplicity_of_object(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_type_of_object(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_multiplicity_of_qualifier(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_ends_of_association(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_multiplicity_of_result(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_same_type(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_association_of_association(readLinkObjectEndQualifierAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadLinkObjectEndQualifierAction_qualifier_attribute(readLinkObjectEndQualifierAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity_of_object constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_multiplicity_of_object(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.multiplicity_of_object(diagnostics, context);
	}

	/**
	 * Validates the type_of_object constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_type_of_object(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.type_of_object(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_qualifier constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_multiplicity_of_qualifier(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.multiplicity_of_qualifier(diagnostics, context);
	}

	/**
	 * Validates the ends_of_association constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_ends_of_association(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.ends_of_association(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_result constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_multiplicity_of_result(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.multiplicity_of_result(diagnostics, context);
	}

	/**
	 * Validates the same_type constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_same_type(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.same_type(diagnostics, context);
	}

	/**
	 * Validates the association_of_association constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_association_of_association(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.association_of_association(diagnostics, context);
	}

	/**
	 * Validates the qualifier_attribute constraint of '<em>Read Link Object End Qualifier Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadLinkObjectEndQualifierAction_qualifier_attribute(ReadLinkObjectEndQualifierAction readLinkObjectEndQualifierAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readLinkObjectEndQualifierAction.qualifier_attribute(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadSelfAction(ReadSelfAction readSelfAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readSelfAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadSelfAction_contained(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadSelfAction_multiplicity(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadSelfAction_not_static(readSelfAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadSelfAction_type(readSelfAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the contained constraint of '<em>Read Self Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadSelfAction_contained(ReadSelfAction readSelfAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readSelfAction.contained(diagnostics, context);
	}

	/**
	 * Validates the multiplicity constraint of '<em>Read Self Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadSelfAction_multiplicity(ReadSelfAction readSelfAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readSelfAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the not_static constraint of '<em>Read Self Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadSelfAction_not_static(ReadSelfAction readSelfAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readSelfAction.not_static(diagnostics, context);
	}

	/**
	 * Validates the type constraint of '<em>Read Self Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadSelfAction_type(ReadSelfAction readSelfAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readSelfAction.type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadStructuralFeatureAction(ReadStructuralFeatureAction readStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readStructuralFeatureAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_multiplicity(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_object_type(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_visibility(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_not_static(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_one_featuring_classifier(readStructuralFeatureAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadStructuralFeatureAction_type_and_ordering(readStructuralFeatureAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_and_ordering constraint of '<em>Read Structural Feature Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadStructuralFeatureAction_type_and_ordering(ReadStructuralFeatureAction readStructuralFeatureAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readStructuralFeatureAction.type_and_ordering(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadVariableAction(ReadVariableAction readVariableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(readVariableAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateVariableAction_scope_of_variable(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadVariableAction_type_and_ordering(readVariableAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReadVariableAction_compatible_multiplicity(readVariableAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_and_ordering constraint of '<em>Read Variable Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadVariableAction_type_and_ordering(ReadVariableAction readVariableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readVariableAction.type_and_ordering(diagnostics, context);
	}

	/**
	 * Validates the compatible_multiplicity constraint of '<em>Read Variable Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReadVariableAction_compatible_multiplicity(ReadVariableAction readVariableAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return readVariableAction.compatible_multiplicity(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReclassifyObjectAction(ReclassifyObjectAction reclassifyObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(reclassifyObjectAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReclassifyObjectAction_input_pin(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReclassifyObjectAction_classifier_not_abstract(reclassifyObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReclassifyObjectAction_multiplicity(reclassifyObjectAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the input_pin constraint of '<em>Reclassify Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReclassifyObjectAction_input_pin(ReclassifyObjectAction reclassifyObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reclassifyObjectAction.input_pin(diagnostics, context);
	}

	/**
	 * Validates the classifier_not_abstract constraint of '<em>Reclassify Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReclassifyObjectAction_classifier_not_abstract(ReclassifyObjectAction reclassifyObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reclassifyObjectAction.classifier_not_abstract(diagnostics, context);
	}

	/**
	 * Validates the multiplicity constraint of '<em>Reclassify Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReclassifyObjectAction_multiplicity(ReclassifyObjectAction reclassifyObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reclassifyObjectAction.multiplicity(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReduceAction(ReduceAction reduceAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(reduceAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReduceAction_reducer_inputs_output(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReduceAction_input_type_is_collection(reduceAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReduceAction_output_types_are_compatible(reduceAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the reducer_inputs_output constraint of '<em>Reduce Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReduceAction_reducer_inputs_output(ReduceAction reduceAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reduceAction.reducer_inputs_output(diagnostics, context);
	}

	/**
	 * Validates the input_type_is_collection constraint of '<em>Reduce Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReduceAction_input_type_is_collection(ReduceAction reduceAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reduceAction.input_type_is_collection(diagnostics, context);
	}

	/**
	 * Validates the output_types_are_compatible constraint of '<em>Reduce Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReduceAction_output_types_are_compatible(ReduceAction reduceAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return reduceAction.output_types_are_compatible(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRemoveStructuralFeatureValueAction(RemoveStructuralFeatureValueAction removeStructuralFeatureValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(removeStructuralFeatureValueAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_multiplicity(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_object_type(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_visibility(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_not_static(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuralFeatureAction_one_featuring_classifier(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_multiplicity_of_result(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_type_of_value(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_multiplicity_of_value(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteStructuralFeatureAction_type_of_result(removeStructuralFeatureValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRemoveStructuralFeatureValueAction_removeAt_and_value(removeStructuralFeatureValueAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the removeAt_and_value constraint of '<em>Remove Structural Feature Value Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRemoveStructuralFeatureValueAction_removeAt_and_value(RemoveStructuralFeatureValueAction removeStructuralFeatureValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return removeStructuralFeatureValueAction.removeAt_and_value(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRemoveVariableValueAction(RemoveVariableValueAction removeVariableValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(removeVariableValueAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateVariableAction_scope_of_variable(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteVariableAction_value_type(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateWriteVariableAction_multiplicity(removeVariableValueAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRemoveVariableValueAction_removeAt_and_value(removeVariableValueAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the removeAt_and_value constraint of '<em>Remove Variable Value Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateRemoveVariableValueAction_removeAt_and_value(RemoveVariableValueAction removeVariableValueAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return removeVariableValueAction.removeAt_and_value(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReplyAction(ReplyAction replyAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(replyAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReplyAction_pins_match_parameter(replyAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateReplyAction_event_on_reply_to_call_trigger(replyAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the pins_match_parameter constraint of '<em>Reply Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReplyAction_pins_match_parameter(ReplyAction replyAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return replyAction.pins_match_parameter(diagnostics, context);
	}

	/**
	 * Validates the event_on_reply_to_call_trigger constraint of '<em>Reply Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateReplyAction_event_on_reply_to_call_trigger(ReplyAction replyAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return replyAction.event_on_reply_to_call_trigger(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSendObjectAction(SendObjectAction sendObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(sendObjectAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(sendObjectAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateSendObjectAction_type_target_pin(sendObjectAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_target_pin constraint of '<em>Send Object Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSendObjectAction_type_target_pin(SendObjectAction sendObjectAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return sendObjectAction.type_target_pin(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSendSignalAction(SendSignalAction sendSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(sendSignalAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateSendSignalAction_type_ordering_multiplicity(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateSendSignalAction_number_order(sendSignalAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateSendSignalAction_type_target_pin(sendSignalAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the type_ordering_multiplicity constraint of '<em>Send Signal Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSendSignalAction_type_ordering_multiplicity(SendSignalAction sendSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return sendSignalAction.type_ordering_multiplicity(diagnostics, context);
	}

	/**
	 * Validates the number_order constraint of '<em>Send Signal Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSendSignalAction_number_order(SendSignalAction sendSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return sendSignalAction.number_order(diagnostics, context);
	}

	/**
	 * Validates the type_target_pin constraint of '<em>Send Signal Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSendSignalAction_type_target_pin(SendSignalAction sendSignalAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return sendSignalAction.type_target_pin(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSequenceNode(SequenceNode sequenceNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(sequenceNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_nodes_and_edges(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityGroup_not_contained(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_output_pin_edges(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_edges(sequenceNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateStructuredActivityNode_input_pin_edges(sequenceNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStartClassifierBehaviorAction(StartClassifierBehaviorAction startClassifierBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(startClassifierBehaviorAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStartClassifierBehaviorAction_multiplicity(startClassifierBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStartClassifierBehaviorAction_type_has_classifier(startClassifierBehaviorAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Start Classifier Behavior Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStartClassifierBehaviorAction_multiplicity(StartClassifierBehaviorAction startClassifierBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return startClassifierBehaviorAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the type_has_classifier constraint of '<em>Start Classifier Behavior Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStartClassifierBehaviorAction_type_has_classifier(StartClassifierBehaviorAction startClassifierBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return startClassifierBehaviorAction.type_has_classifier(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStartObjectBehaviorAction(StartObjectBehaviorAction startObjectBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(startObjectBehaviorAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_argument_pins(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_result_pins(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateCallAction_synchronous_call(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStartObjectBehaviorAction_multiplicity_of_object(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStartObjectBehaviorAction_type_of_object(startObjectBehaviorAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateStartObjectBehaviorAction_no_onport(startObjectBehaviorAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity_of_object constraint of '<em>Start Object Behavior Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStartObjectBehaviorAction_multiplicity_of_object(StartObjectBehaviorAction startObjectBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return startObjectBehaviorAction.multiplicity_of_object(diagnostics, context);
	}

	/**
	 * Validates the type_of_object constraint of '<em>Start Object Behavior Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStartObjectBehaviorAction_type_of_object(StartObjectBehaviorAction startObjectBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return startObjectBehaviorAction.type_of_object(diagnostics, context);
	}

	/**
	 * Validates the no_onport constraint of '<em>Start Object Behavior Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStartObjectBehaviorAction_no_onport(StartObjectBehaviorAction startObjectBehaviorAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return startObjectBehaviorAction.no_onport(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTestIdentityAction(TestIdentityAction testIdentityAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(testIdentityAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateTestIdentityAction_multiplicity(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateTestIdentityAction_no_type(testIdentityAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateTestIdentityAction_result_is_boolean(testIdentityAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the multiplicity constraint of '<em>Test Identity Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTestIdentityAction_multiplicity(TestIdentityAction testIdentityAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return testIdentityAction.multiplicity(diagnostics, context);
	}

	/**
	 * Validates the no_type constraint of '<em>Test Identity Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTestIdentityAction_no_type(TestIdentityAction testIdentityAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return testIdentityAction.no_type(diagnostics, context);
	}

	/**
	 * Validates the result_is_boolean constraint of '<em>Test Identity Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTestIdentityAction_result_is_boolean(TestIdentityAction testIdentityAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return testIdentityAction.result_is_boolean(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUnmarshallAction(UnmarshallAction unmarshallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(unmarshallAction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateUnmarshallAction_structural_feature(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateUnmarshallAction_number_of_result(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateUnmarshallAction_type_ordering_and_multiplicity(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateUnmarshallAction_multiplicity_of_object(unmarshallAction, diagnostics, context);
		if (result || diagnostics != null) result &= validateUnmarshallAction_object_type(unmarshallAction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the structural_feature constraint of '<em>Unmarshall Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUnmarshallAction_structural_feature(UnmarshallAction unmarshallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return unmarshallAction.structural_feature(diagnostics, context);
	}

	/**
	 * Validates the number_of_result constraint of '<em>Unmarshall Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUnmarshallAction_number_of_result(UnmarshallAction unmarshallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return unmarshallAction.number_of_result(diagnostics, context);
	}

	/**
	 * Validates the type_ordering_and_multiplicity constraint of '<em>Unmarshall Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUnmarshallAction_type_ordering_and_multiplicity(UnmarshallAction unmarshallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return unmarshallAction.type_ordering_and_multiplicity(diagnostics, context);
	}

	/**
	 * Validates the multiplicity_of_object constraint of '<em>Unmarshall Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUnmarshallAction_multiplicity_of_object(UnmarshallAction unmarshallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return unmarshallAction.multiplicity_of_object(diagnostics, context);
	}

	/**
	 * Validates the object_type constraint of '<em>Unmarshall Action</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateUnmarshallAction_object_type(UnmarshallAction unmarshallAction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return unmarshallAction.object_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateValuePin(ValuePin valuePin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(valuePin, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_ge_lower(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_ge_0(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_no_side_effects(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_value_specification_constant(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_lower_is_integer(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateMultiplicityElement_upper_is_unlimitedNatural(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_control_pins(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validatePin_not_unique(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateInputPin_outgoing_edges_structured_only(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateValuePin_no_incoming_edges(valuePin, diagnostics, context);
		if (result || diagnostics != null) result &= validateValuePin_compatible_type(valuePin, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_incoming_edges constraint of '<em>Value Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateValuePin_no_incoming_edges(ValuePin valuePin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return valuePin.no_incoming_edges(diagnostics, context);
	}

	/**
	 * Validates the compatible_type constraint of '<em>Value Pin</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateValuePin_compatible_type(ValuePin valuePin, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return valuePin.compatible_type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityFinalNode(ActivityFinalNode activityFinalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(activityFinalNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(activityFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalNode_no_outgoing_edges(activityFinalNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalNode(FinalNode finalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(finalNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(finalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalNode_no_outgoing_edges(finalNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_outgoing_edges constraint of '<em>Final Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalNode_no_outgoing_edges(FinalNode finalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return finalNode.no_outgoing_edges(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateControlNode(ControlNode controlNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(controlNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(controlNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(controlNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityParameterNode(ActivityParameterNode activityParameterNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(activityParameterNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityParameterNode_no_outgoing_edges(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityParameterNode_has_parameters(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityParameterNode_same_type(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityParameterNode_no_incoming_edges(activityParameterNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityParameterNode_no_edges(activityParameterNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_outgoing_edges constraint of '<em>Activity Parameter Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityParameterNode_no_outgoing_edges(ActivityParameterNode activityParameterNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityParameterNode.no_outgoing_edges(diagnostics, context);
	}

	/**
	 * Validates the has_parameters constraint of '<em>Activity Parameter Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityParameterNode_has_parameters(ActivityParameterNode activityParameterNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityParameterNode.has_parameters(diagnostics, context);
	}

	/**
	 * Validates the same_type constraint of '<em>Activity Parameter Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityParameterNode_same_type(ActivityParameterNode activityParameterNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityParameterNode.same_type(diagnostics, context);
	}

	/**
	 * Validates the no_incoming_edges constraint of '<em>Activity Parameter Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityParameterNode_no_incoming_edges(ActivityParameterNode activityParameterNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityParameterNode.no_incoming_edges(diagnostics, context);
	}

	/**
	 * Validates the no_edges constraint of '<em>Activity Parameter Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActivityParameterNode_no_edges(ActivityParameterNode activityParameterNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return activityParameterNode.no_edges(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCentralBufferNode(CentralBufferNode centralBufferNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(centralBufferNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(centralBufferNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(centralBufferNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateControlFlow(ControlFlow controlFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(controlFlow, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityEdge_source_and_target(controlFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateControlFlow_object_nodes(controlFlow, diagnostics, context);
		return result;
	}

	/**
	 * Validates the object_nodes constraint of '<em>Control Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateControlFlow_object_nodes(ControlFlow controlFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return controlFlow.object_nodes(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDataStoreNode(DataStoreNode dataStoreNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(dataStoreNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_input_output_parameter(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_selection_behavior(dataStoreNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectNode_object_flow_edges(dataStoreNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(decisionNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_zero_input_parameters(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_edges(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_decision_input_flow_incoming(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_two_input_parameters(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_incoming_outgoing_edges(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_incoming_control_one_input_parameter(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_parameters(decisionNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateDecisionNode_incoming_object_one_input_parameter(decisionNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the zero_input_parameters constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_zero_input_parameters(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.zero_input_parameters(diagnostics, context);
	}

	/**
	 * Validates the edges constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_edges(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.edges(diagnostics, context);
	}

	/**
	 * Validates the decision_input_flow_incoming constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_decision_input_flow_incoming(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.decision_input_flow_incoming(diagnostics, context);
	}

	/**
	 * Validates the two_input_parameters constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_two_input_parameters(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.two_input_parameters(diagnostics, context);
	}

	/**
	 * Validates the incoming_outgoing_edges constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_incoming_outgoing_edges(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.incoming_outgoing_edges(diagnostics, context);
	}

	/**
	 * Validates the incoming_control_one_input_parameter constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_incoming_control_one_input_parameter(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.incoming_control_one_input_parameter(diagnostics, context);
	}

	/**
	 * Validates the parameters constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_parameters(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.parameters(diagnostics, context);
	}

	/**
	 * Validates the incoming_object_one_input_parameter constraint of '<em>Decision Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDecisionNode_incoming_object_one_input_parameter(DecisionNode decisionNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return decisionNode.incoming_object_one_input_parameter(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(objectFlow, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateActivityEdge_source_and_target(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_input_and_output_parameter(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_no_executable_nodes(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_transformation_behavior(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_selection_behavior(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_compatible_types(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_same_upper_bounds(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_target(objectFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateObjectFlow_is_multicast_or_is_multireceive(objectFlow, diagnostics, context);
		return result;
	}

	/**
	 * Validates the input_and_output_parameter constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_input_and_output_parameter(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.input_and_output_parameter(diagnostics, context);
	}

	/**
	 * Validates the no_executable_nodes constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_no_executable_nodes(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.no_executable_nodes(diagnostics, context);
	}

	/**
	 * Validates the transformation_behavior constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_transformation_behavior(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.transformation_behavior(diagnostics, context);
	}

	/**
	 * Validates the selection_behavior constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_selection_behavior(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.selection_behavior(diagnostics, context);
	}

	/**
	 * Validates the compatible_types constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_compatible_types(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.compatible_types(diagnostics, context);
	}

	/**
	 * Validates the same_upper_bounds constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_same_upper_bounds(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.same_upper_bounds(diagnostics, context);
	}

	/**
	 * Validates the target constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_target(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.target(diagnostics, context);
	}

	/**
	 * Validates the is_multicast_or_is_multireceive constraint of '<em>Object Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectFlow_is_multicast_or_is_multireceive(ObjectFlow objectFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return objectFlow.is_multicast_or_is_multireceive(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFlowFinalNode(FlowFinalNode flowFinalNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(flowFinalNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(flowFinalNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalNode_no_outgoing_edges(flowFinalNode, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateForkNode(ForkNode forkNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(forkNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateForkNode_edges(forkNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateForkNode_one_incoming_edge(forkNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the edges constraint of '<em>Fork Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateForkNode_edges(ForkNode forkNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return forkNode.edges(diagnostics, context);
	}

	/**
	 * Validates the one_incoming_edge constraint of '<em>Fork Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateForkNode_one_incoming_edge(ForkNode forkNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return forkNode.one_incoming_edge(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInitialNode(InitialNode initialNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(initialNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateInitialNode_no_incoming_edges(initialNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateInitialNode_control_edges(initialNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_incoming_edges constraint of '<em>Initial Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInitialNode_no_incoming_edges(InitialNode initialNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return initialNode.no_incoming_edges(diagnostics, context);
	}

	/**
	 * Validates the control_edges constraint of '<em>Initial Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInitialNode_control_edges(InitialNode initialNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return initialNode.control_edges(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateJoinNode(JoinNode joinNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(joinNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateJoinNode_one_outgoing_edge(joinNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateJoinNode_incoming_object_flow(joinNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the one_outgoing_edge constraint of '<em>Join Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateJoinNode_one_outgoing_edge(JoinNode joinNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return joinNode.one_outgoing_edge(diagnostics, context);
	}

	/**
	 * Validates the incoming_object_flow constraint of '<em>Join Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateJoinNode_incoming_object_flow(JoinNode joinNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return joinNode.incoming_object_flow(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMergeNode(MergeNode mergeNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(mergeNode, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateMergeNode_one_outgoing_edge(mergeNode, diagnostics, context);
		if (result || diagnostics != null) result &= validateMergeNode_edges(mergeNode, diagnostics, context);
		return result;
	}

	/**
	 * Validates the one_outgoing_edge constraint of '<em>Merge Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMergeNode_one_outgoing_edge(MergeNode mergeNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return mergeNode.one_outgoing_edge(diagnostics, context);
	}

	/**
	 * Validates the edges constraint of '<em>Merge Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMergeNode_edges(MergeNode mergeNode, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return mergeNode.edges(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInstanceValue(InstanceValue instanceValue, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(instanceValue, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(instanceValue, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(instanceValue, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAnyReceiveEvent(AnyReceiveEvent anyReceiveEvent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(anyReceiveEvent, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(anyReceiveEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(anyReceiveEvent, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessageEvent(MessageEvent messageEvent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(messageEvent, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(messageEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(messageEvent, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallEvent(CallEvent callEvent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(callEvent, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(callEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(callEvent, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateChangeEvent(ChangeEvent changeEvent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(changeEvent, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(changeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(changeEvent, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFunctionBehavior(FunctionBehavior functionBehavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(functionBehavior, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_most_one_behavior(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_parameters_match(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_feature_of_context_classifier(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateFunctionBehavior_one_output_parameter(functionBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateFunctionBehavior_types_of_parameters(functionBehavior, diagnostics, context);
		return result;
	}

	/**
	 * Validates the one_output_parameter constraint of '<em>Function Behavior</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFunctionBehavior_one_output_parameter(FunctionBehavior functionBehavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return functionBehavior.one_output_parameter(diagnostics, context);
	}

	/**
	 * Validates the types_of_parameters constraint of '<em>Function Behavior</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFunctionBehavior_types_of_parameters(FunctionBehavior functionBehavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return functionBehavior.types_of_parameters(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOpaqueBehavior(OpaqueBehavior opaqueBehavior, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(opaqueBehavior, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_most_one_behavior(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_parameters_match(opaqueBehavior, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_feature_of_context_classifier(opaqueBehavior, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateSignalEvent(SignalEvent signalEvent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(signalEvent, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(signalEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(signalEvent, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeEvent(TimeEvent timeEvent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(timeEvent, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(timeEvent, diagnostics, context);
		if (result || diagnostics != null) result &= validateTimeEvent_when_non_negative(timeEvent, diagnostics, context);
		return result;
	}

	/**
	 * Validates the when_non_negative constraint of '<em>Time Event</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeEvent_when_non_negative(TimeEvent timeEvent, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return timeEvent.when_non_negative(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeExpression(TimeExpression timeExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(timeExpression, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(timeExpression, diagnostics, context);
		if (result || diagnostics != null) result &= validateTimeExpression_no_expr_requires_observation(timeExpression, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_expr_requires_observation constraint of '<em>Time Expression</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeExpression_no_expr_requires_observation(TimeExpression timeExpression, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return timeExpression.no_expr_requires_observation(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObservation(Observation observation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(observation, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(observation, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(observation, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCommunicationPath(CommunicationPath communicationPath, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(communicationPath, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_number(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_types(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_binary_associations(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_association_ends(communicationPath, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_ends_must_be_typed(communicationPath, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDevice(Device device, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(device, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(device, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(device, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(device, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(device, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(device, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(device, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(device, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(device, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(device, diagnostics, context);
		if (result || diagnostics != null) result &= validateNode_internal_structure(device, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNode(Node node, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(node, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(node, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(node, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(node, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(node, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(node, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(node, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(node, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(node, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(node, diagnostics, context);
		if (result || diagnostics != null) result &= validateNode_internal_structure(node, diagnostics, context);
		return result;
	}

	/**
	 * Validates the internal_structure constraint of '<em>Node</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateNode_internal_structure(Node node, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return node.internal_structure(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExecutionEnvironment(ExecutionEnvironment executionEnvironment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(executionEnvironment, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(executionEnvironment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNode_internal_structure(executionEnvironment, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationFlow(InformationFlow informationFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(informationFlow, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateInformationFlow_must_conform(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateInformationFlow_sources_and_targets_kind(informationFlow, diagnostics, context);
		if (result || diagnostics != null) result &= validateInformationFlow_convey_classifiers(informationFlow, diagnostics, context);
		return result;
	}

	/**
	 * Validates the must_conform constraint of '<em>Information Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationFlow_must_conform(InformationFlow informationFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return informationFlow.must_conform(diagnostics, context);
	}

	/**
	 * Validates the sources_and_targets_kind constraint of '<em>Information Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationFlow_sources_and_targets_kind(InformationFlow informationFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return informationFlow.sources_and_targets_kind(diagnostics, context);
	}

	/**
	 * Validates the convey_classifiers constraint of '<em>Information Flow</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationFlow_convey_classifiers(InformationFlow informationFlow, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return informationFlow.convey_classifiers(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(message, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(message, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(message, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(message, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(message, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(message, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(message, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(message, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_sending_receiving_message_event(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_arguments(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_cannot_cross_boundaries(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_signature_is_signal(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_occurrence_specifications(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_signature_refer_to(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_signature_is_operation_request(message, diagnostics, context);
		if (result || diagnostics != null) result &= validateMessage_signature_is_operation_reply(message, diagnostics, context);
		return result;
	}

	/**
	 * Validates the sending_receiving_message_event constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_sending_receiving_message_event(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.sending_receiving_message_event(diagnostics, context);
	}

	/**
	 * Validates the arguments constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_arguments(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.arguments(diagnostics, context);
	}

	/**
	 * Validates the cannot_cross_boundaries constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_cannot_cross_boundaries(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.cannot_cross_boundaries(diagnostics, context);
	}

	/**
	 * Validates the signature_is_signal constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_signature_is_signal(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.signature_is_signal(diagnostics, context);
	}

	/**
	 * Validates the occurrence_specifications constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_occurrence_specifications(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.occurrence_specifications(diagnostics, context);
	}

	/**
	 * Validates the signature_refer_to constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_signature_refer_to(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.signature_refer_to(diagnostics, context);
	}

	/**
	 * Validates the signature_is_operation_request constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_signature_is_operation_request(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.signature_is_operation_request(diagnostics, context);
	}

	/**
	 * Validates the signature_is_operation_reply constraint of '<em>Message</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessage_signature_is_operation_reply(Message message, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return message.signature_is_operation_reply(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteraction(Interaction interaction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interaction, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_most_one_behavior(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_parameters_match(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavior_feature_of_context_classifier(interaction, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteraction_not_contained(interaction, diagnostics, context);
		return result;
	}

	/**
	 * Validates the not_contained constraint of '<em>Interaction</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteraction_not_contained(Interaction interaction, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interaction.not_contained(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionFragment(InteractionFragment interactionFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interactionFragment, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interactionFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interactionFragment, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLifeline(Lifeline lifeline, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(lifeline, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateLifeline_selector_specified(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateLifeline_interaction_uses_share_lifeline(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateLifeline_same_classifier(lifeline, diagnostics, context);
		if (result || diagnostics != null) result &= validateLifeline_selector_int_or_string(lifeline, diagnostics, context);
		return result;
	}

	/**
	 * Validates the selector_specified constraint of '<em>Lifeline</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLifeline_selector_specified(Lifeline lifeline, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return lifeline.selector_specified(diagnostics, context);
	}

	/**
	 * Validates the interaction_uses_share_lifeline constraint of '<em>Lifeline</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLifeline_interaction_uses_share_lifeline(Lifeline lifeline, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return lifeline.interaction_uses_share_lifeline(diagnostics, context);
	}

	/**
	 * Validates the same_classifier constraint of '<em>Lifeline</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLifeline_same_classifier(Lifeline lifeline, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return lifeline.same_classifier(diagnostics, context);
	}

	/**
	 * Validates the selector_int_or_string constraint of '<em>Lifeline</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLifeline_selector_int_or_string(Lifeline lifeline, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return lifeline.selector_int_or_string(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePartDecomposition(PartDecomposition partDecomposition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(partDecomposition, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_gates_match(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_arguments_are_constants(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_returnValueRecipient_coverage(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_arguments_correspond_to_parameters(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_returnValue_type_recipient_correspondence(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_all_lifelines(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validatePartDecomposition_commutativity_of_decomposition(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validatePartDecomposition_assume(partDecomposition, diagnostics, context);
		if (result || diagnostics != null) result &= validatePartDecomposition_parts_of_internal_structures(partDecomposition, diagnostics, context);
		return result;
	}

	/**
	 * Validates the commutativity_of_decomposition constraint of '<em>Part Decomposition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePartDecomposition_commutativity_of_decomposition(PartDecomposition partDecomposition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return partDecomposition.commutativity_of_decomposition(diagnostics, context);
	}

	/**
	 * Validates the assume constraint of '<em>Part Decomposition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePartDecomposition_assume(PartDecomposition partDecomposition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return partDecomposition.assume(diagnostics, context);
	}

	/**
	 * Validates the parts_of_internal_structures constraint of '<em>Part Decomposition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePartDecomposition_parts_of_internal_structures(PartDecomposition partDecomposition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return partDecomposition.parts_of_internal_structures(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionUse(InteractionUse interactionUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interactionUse, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_gates_match(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_arguments_are_constants(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_returnValueRecipient_coverage(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_arguments_correspond_to_parameters(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_returnValue_type_recipient_correspondence(interactionUse, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionUse_all_lifelines(interactionUse, diagnostics, context);
		return result;
	}

	/**
	 * Validates the gates_match constraint of '<em>Interaction Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionUse_gates_match(InteractionUse interactionUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionUse.gates_match(diagnostics, context);
	}

	/**
	 * Validates the arguments_are_constants constraint of '<em>Interaction Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionUse_arguments_are_constants(InteractionUse interactionUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionUse.arguments_are_constants(diagnostics, context);
	}

	/**
	 * Validates the returnValueRecipient_coverage constraint of '<em>Interaction Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionUse_returnValueRecipient_coverage(InteractionUse interactionUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionUse.returnValueRecipient_coverage(diagnostics, context);
	}

	/**
	 * Validates the arguments_correspond_to_parameters constraint of '<em>Interaction Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionUse_arguments_correspond_to_parameters(InteractionUse interactionUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionUse.arguments_correspond_to_parameters(diagnostics, context);
	}

	/**
	 * Validates the returnValue_type_recipient_correspondence constraint of '<em>Interaction Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionUse_returnValue_type_recipient_correspondence(InteractionUse interactionUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionUse.returnValue_type_recipient_correspondence(diagnostics, context);
	}

	/**
	 * Validates the all_lifelines constraint of '<em>Interaction Use</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionUse_all_lifelines(InteractionUse interactionUse, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionUse.all_lifelines(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(gate, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateGate_actual_gate_matched(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateGate_inside_cf_matched(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateGate_outside_cf_matched(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateGate_formal_gate_distinguishable(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateGate_actual_gate_distinguishable(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateGate_outside_cf_gate_distinguishable(gate, diagnostics, context);
		if (result || diagnostics != null) result &= validateGate_inside_cf_gate_distinguishable(gate, diagnostics, context);
		return result;
	}

	/**
	 * Validates the actual_gate_matched constraint of '<em>Gate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate_actual_gate_matched(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return gate.actual_gate_matched(diagnostics, context);
	}

	/**
	 * Validates the inside_cf_matched constraint of '<em>Gate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate_inside_cf_matched(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return gate.inside_cf_matched(diagnostics, context);
	}

	/**
	 * Validates the outside_cf_matched constraint of '<em>Gate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate_outside_cf_matched(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return gate.outside_cf_matched(diagnostics, context);
	}

	/**
	 * Validates the formal_gate_distinguishable constraint of '<em>Gate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate_formal_gate_distinguishable(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return gate.formal_gate_distinguishable(diagnostics, context);
	}

	/**
	 * Validates the actual_gate_distinguishable constraint of '<em>Gate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate_actual_gate_distinguishable(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return gate.actual_gate_distinguishable(diagnostics, context);
	}

	/**
	 * Validates the outside_cf_gate_distinguishable constraint of '<em>Gate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate_outside_cf_gate_distinguishable(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return gate.outside_cf_gate_distinguishable(diagnostics, context);
	}

	/**
	 * Validates the inside_cf_gate_distinguishable constraint of '<em>Gate</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGate_inside_cf_gate_distinguishable(Gate gate, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return gate.inside_cf_gate_distinguishable(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessageEnd(MessageEnd messageEnd, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(messageEnd, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(messageEnd, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(messageEnd, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionOperand(InteractionOperand interactionOperand, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interactionOperand, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionOperand_guard_contain_references(interactionOperand, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionOperand_guard_directly_prior(interactionOperand, diagnostics, context);
		return result;
	}

	/**
	 * Validates the guard_contain_references constraint of '<em>Interaction Operand</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionOperand_guard_contain_references(InteractionOperand interactionOperand, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionOperand.guard_contain_references(diagnostics, context);
	}

	/**
	 * Validates the guard_directly_prior constraint of '<em>Interaction Operand</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionOperand_guard_directly_prior(InteractionOperand interactionOperand, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionOperand.guard_directly_prior(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionConstraint(InteractionConstraint interactionConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interactionConstraint, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_boolean_value(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_no_side_effects(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_not_apply_to_self(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionConstraint_minint_maxint(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionConstraint_minint_non_negative(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionConstraint_maxint_positive(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionConstraint_dynamic_variables(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionConstraint_global_data(interactionConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateInteractionConstraint_maxint_greater_equal_minint(interactionConstraint, diagnostics, context);
		return result;
	}

	/**
	 * Validates the minint_maxint constraint of '<em>Interaction Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionConstraint_minint_maxint(InteractionConstraint interactionConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionConstraint.minint_maxint(diagnostics, context);
	}

	/**
	 * Validates the minint_non_negative constraint of '<em>Interaction Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionConstraint_minint_non_negative(InteractionConstraint interactionConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionConstraint.minint_non_negative(diagnostics, context);
	}

	/**
	 * Validates the maxint_positive constraint of '<em>Interaction Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionConstraint_maxint_positive(InteractionConstraint interactionConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionConstraint.maxint_positive(diagnostics, context);
	}

	/**
	 * Validates the dynamic_variables constraint of '<em>Interaction Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionConstraint_dynamic_variables(InteractionConstraint interactionConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionConstraint.dynamic_variables(diagnostics, context);
	}

	/**
	 * Validates the global_data constraint of '<em>Interaction Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionConstraint_global_data(InteractionConstraint interactionConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionConstraint.global_data(diagnostics, context);
	}

	/**
	 * Validates the maxint_greater_equal_minint constraint of '<em>Interaction Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionConstraint_maxint_greater_equal_minint(InteractionConstraint interactionConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return interactionConstraint.maxint_greater_equal_minint(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGeneralOrdering(GeneralOrdering generalOrdering, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(generalOrdering, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(generalOrdering, diagnostics, context);
		if (result || diagnostics != null) result &= validateGeneralOrdering_irreflexive_transitive_closure(generalOrdering, diagnostics, context);
		return result;
	}

	/**
	 * Validates the irreflexive_transitive_closure constraint of '<em>General Ordering</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateGeneralOrdering_irreflexive_transitive_closure(GeneralOrdering generalOrdering, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return generalOrdering.irreflexive_transitive_closure(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateOccurrenceSpecification(OccurrenceSpecification occurrenceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(occurrenceSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(occurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(occurrenceSpecification, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationItem(InformationItem informationItem, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(informationItem, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateInformationItem_sources_and_targets(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateInformationItem_has_no(informationItem, diagnostics, context);
		if (result || diagnostics != null) result &= validateInformationItem_not_instantiable(informationItem, diagnostics, context);
		return result;
	}

	/**
	 * Validates the sources_and_targets constraint of '<em>Information Item</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationItem_sources_and_targets(InformationItem informationItem, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return informationItem.sources_and_targets(diagnostics, context);
	}

	/**
	 * Validates the has_no constraint of '<em>Information Item</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationItem_has_no(InformationItem informationItem, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return informationItem.has_no(diagnostics, context);
	}

	/**
	 * Validates the not_instantiable constraint of '<em>Information Item</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInformationItem_not_instantiable(InformationItem informationItem, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return informationItem.not_instantiable(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActionExecutionSpecification(ActionExecutionSpecification actionExecutionSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(actionExecutionSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateExecutionSpecification_same_lifeline(actionExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateActionExecutionSpecification_action_referenced(actionExecutionSpecification, diagnostics, context);
		return result;
	}

	/**
	 * Validates the action_referenced constraint of '<em>Action Execution Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActionExecutionSpecification_action_referenced(ActionExecutionSpecification actionExecutionSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return actionExecutionSpecification.action_referenced(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExecutionSpecification(ExecutionSpecification executionSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(executionSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(executionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateExecutionSpecification_same_lifeline(executionSpecification, diagnostics, context);
		return result;
	}

	/**
	 * Validates the same_lifeline constraint of '<em>Execution Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExecutionSpecification_same_lifeline(ExecutionSpecification executionSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return executionSpecification.same_lifeline(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateBehaviorExecutionSpecification(BehaviorExecutionSpecification behaviorExecutionSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(behaviorExecutionSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(behaviorExecutionSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateExecutionSpecification_same_lifeline(behaviorExecutionSpecification, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCombinedFragment(CombinedFragment combinedFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(combinedFragment, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateCombinedFragment_break_(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateCombinedFragment_consider_and_ignore(combinedFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateCombinedFragment_opt_loop_break_neg(combinedFragment, diagnostics, context);
		return result;
	}

	/**
	 * Validates the break_ constraint of '<em>Combined Fragment</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCombinedFragment_break_(CombinedFragment combinedFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return combinedFragment.break_(diagnostics, context);
	}

	/**
	 * Validates the consider_and_ignore constraint of '<em>Combined Fragment</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCombinedFragment_consider_and_ignore(CombinedFragment combinedFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return combinedFragment.consider_and_ignore(diagnostics, context);
	}

	/**
	 * Validates the opt_loop_break_neg constraint of '<em>Combined Fragment</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCombinedFragment_opt_loop_break_neg(CombinedFragment combinedFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return combinedFragment.opt_loop_break_neg(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConsiderIgnoreFragment(ConsiderIgnoreFragment considerIgnoreFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(considerIgnoreFragment, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateCombinedFragment_break_(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateCombinedFragment_consider_and_ignore(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateCombinedFragment_opt_loop_break_neg(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateConsiderIgnoreFragment_consider_or_ignore(considerIgnoreFragment, diagnostics, context);
		if (result || diagnostics != null) result &= validateConsiderIgnoreFragment_type(considerIgnoreFragment, diagnostics, context);
		return result;
	}

	/**
	 * Validates the consider_or_ignore constraint of '<em>Consider Ignore Fragment</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConsiderIgnoreFragment_consider_or_ignore(ConsiderIgnoreFragment considerIgnoreFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return considerIgnoreFragment.consider_or_ignore(diagnostics, context);
	}

	/**
	 * Validates the type constraint of '<em>Consider Ignore Fragment</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConsiderIgnoreFragment_type(ConsiderIgnoreFragment considerIgnoreFragment, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return considerIgnoreFragment.type(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateContinuation(Continuation continuation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(continuation, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateContinuation_first_or_last_interaction_fragment(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateContinuation_same_name(continuation, diagnostics, context);
		if (result || diagnostics != null) result &= validateContinuation_global(continuation, diagnostics, context);
		return result;
	}

	/**
	 * Validates the first_or_last_interaction_fragment constraint of '<em>Continuation</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateContinuation_first_or_last_interaction_fragment(Continuation continuation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return continuation.first_or_last_interaction_fragment(diagnostics, context);
	}

	/**
	 * Validates the same_name constraint of '<em>Continuation</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateContinuation_same_name(Continuation continuation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return continuation.same_name(diagnostics, context);
	}

	/**
	 * Validates the global constraint of '<em>Continuation</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateContinuation_global(Continuation continuation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return continuation.global(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDestructionOccurrenceSpecification(DestructionOccurrenceSpecification destructionOccurrenceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(destructionOccurrenceSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(destructionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateDestructionOccurrenceSpecification_no_occurrence_specifications_below(destructionOccurrenceSpecification, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_occurrence_specifications_below constraint of '<em>Destruction Occurrence Specification</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDestructionOccurrenceSpecification_no_occurrence_specifications_below(DestructionOccurrenceSpecification destructionOccurrenceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return destructionOccurrenceSpecification.no_occurrence_specifications_below(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessageOccurrenceSpecification(MessageOccurrenceSpecification messageOccurrenceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(messageOccurrenceSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(messageOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(messageOccurrenceSpecification, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExecutionOccurrenceSpecification(ExecutionOccurrenceSpecification executionOccurrenceSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(executionOccurrenceSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(executionOccurrenceSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(executionOccurrenceSpecification, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateStateInvariant(StateInvariant stateInvariant, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(stateInvariant, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(stateInvariant, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(stateInvariant, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalState(FinalState finalState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(finalState, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_entry_or_exit(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_submachine_states(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_composite_states(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_destinations_or_sources_of_transitions(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateState_submachine_or_regions(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalState_no_exit_behavior(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalState_no_outgoing_transitions(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalState_no_regions(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalState_cannot_reference_submachine(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalState_no_entry_behavior(finalState, diagnostics, context);
		if (result || diagnostics != null) result &= validateFinalState_no_state_behavior(finalState, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_exit_behavior constraint of '<em>Final State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalState_no_exit_behavior(FinalState finalState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return finalState.no_exit_behavior(diagnostics, context);
	}

	/**
	 * Validates the no_outgoing_transitions constraint of '<em>Final State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalState_no_outgoing_transitions(FinalState finalState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return finalState.no_outgoing_transitions(diagnostics, context);
	}

	/**
	 * Validates the no_regions constraint of '<em>Final State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalState_no_regions(FinalState finalState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return finalState.no_regions(diagnostics, context);
	}

	/**
	 * Validates the cannot_reference_submachine constraint of '<em>Final State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalState_cannot_reference_submachine(FinalState finalState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return finalState.cannot_reference_submachine(diagnostics, context);
	}

	/**
	 * Validates the no_entry_behavior constraint of '<em>Final State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalState_no_entry_behavior(FinalState finalState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return finalState.no_entry_behavior(diagnostics, context);
	}

	/**
	 * Validates the no_state_behavior constraint of '<em>Final State</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateFinalState_no_state_behavior(FinalState finalState, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return finalState.no_state_behavior(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolTransition(ProtocolTransition protocolTransition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(protocolTransition, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_state_is_external(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_join_segment_guards(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_state_is_internal(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_outgoing_pseudostates(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_join_segment_state(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_fork_segment_state(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_state_is_local(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_initial_transition(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateTransition_fork_segment_guards(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateProtocolTransition_refers_to_operation(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateProtocolTransition_associated_actions(protocolTransition, diagnostics, context);
		if (result || diagnostics != null) result &= validateProtocolTransition_belongs_to_psm(protocolTransition, diagnostics, context);
		return result;
	}

	/**
	 * Validates the refers_to_operation constraint of '<em>Protocol Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolTransition_refers_to_operation(ProtocolTransition protocolTransition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return protocolTransition.refers_to_operation(diagnostics, context);
	}

	/**
	 * Validates the associated_actions constraint of '<em>Protocol Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolTransition_associated_actions(ProtocolTransition protocolTransition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return protocolTransition.associated_actions(diagnostics, context);
	}

	/**
	 * Validates the belongs_to_psm constraint of '<em>Protocol Transition</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateProtocolTransition_belongs_to_psm(ProtocolTransition protocolTransition, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return protocolTransition.belongs_to_psm(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociationClass(AssociationClass associationClass, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(associationClass, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_number(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_specialized_end_types(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_binary_associations(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_association_ends(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociation_ends_must_be_typed(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociationClass_cannot_be_defined(associationClass, diagnostics, context);
		if (result || diagnostics != null) result &= validateAssociationClass_disjoint_attributes_ends(associationClass, diagnostics, context);
		return result;
	}

	/**
	 * Validates the cannot_be_defined constraint of '<em>Association Class</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociationClass_cannot_be_defined(AssociationClass associationClass, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return associationClass.cannot_be_defined(diagnostics, context);
	}

	/**
	 * Validates the disjoint_attributes_ends constraint of '<em>Association Class</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAssociationClass_disjoint_attributes_ends(AssociationClass associationClass, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return associationClass.disjoint_attributes_ends(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateComponent(Component component, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(component, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(component, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(component, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(component, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(component, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(component, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(component, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(component, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(component, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateClass_passive_class(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateComponent_no_nested_classifiers(component, diagnostics, context);
		if (result || diagnostics != null) result &= validateComponent_no_packaged_elements(component, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_nested_classifiers constraint of '<em>Component</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateComponent_no_nested_classifiers(Component component, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return component.no_nested_classifiers(diagnostics, context);
	}

	/**
	 * Validates the no_packaged_elements constraint of '<em>Component</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateComponent_no_packaged_elements(Component component, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return component.no_packaged_elements(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateComponentRealization(ComponentRealization componentRealization, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(componentRealization, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(componentRealization, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(componentRealization, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActor(Actor actor, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(actor, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_members_distinguishable(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_self(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamespace_cannot_import_ownedMembers(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_consistent(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_non_leaf_redefinition(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateRedefinableElement_redefinition_context_valid(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_specialize_type(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_maps_to_generalization_set(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_non_final_parents(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateClassifier_no_cycles_in_generalization(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateBehavioredClassifier_class_behavior(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateActor_associations(actor, diagnostics, context);
		if (result || diagnostics != null) result &= validateActor_must_have_name(actor, diagnostics, context);
		return result;
	}

	/**
	 * Validates the associations constraint of '<em>Actor</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActor_associations(Actor actor, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return actor.associations(diagnostics, context);
	}

	/**
	 * Validates the must_have_name constraint of '<em>Actor</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateActor_must_have_name(Actor actor, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return actor.must_have_name(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDuration(Duration duration, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(duration, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(duration, diagnostics, context);
		if (result || diagnostics != null) result &= validateDuration_no_expr_requires_observation(duration, diagnostics, context);
		return result;
	}

	/**
	 * Validates the no_expr_requires_observation constraint of '<em>Duration</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDuration_no_expr_requires_observation(Duration duration, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return duration.no_expr_requires_observation(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDurationConstraint(DurationConstraint durationConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(durationConstraint, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_boolean_value(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_no_side_effects(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_not_apply_to_self(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateDurationConstraint_first_event_multiplicity(durationConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateDurationConstraint_has_one_or_two_constrainedElements(durationConstraint, diagnostics, context);
		return result;
	}

	/**
	 * Validates the first_event_multiplicity constraint of '<em>Duration Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDurationConstraint_first_event_multiplicity(DurationConstraint durationConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return durationConstraint.first_event_multiplicity(diagnostics, context);
	}

	/**
	 * Validates the has_one_or_two_constrainedElements constraint of '<em>Duration Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDurationConstraint_has_one_or_two_constrainedElements(DurationConstraint durationConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return durationConstraint.has_one_or_two_constrainedElements(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateIntervalConstraint(IntervalConstraint intervalConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(intervalConstraint, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_boolean_value(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_no_side_effects(intervalConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_not_apply_to_self(intervalConstraint, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInterval(Interval interval, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(interval, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(interval, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(interval, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDurationInterval(DurationInterval durationInterval, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(durationInterval, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(durationInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(durationInterval, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDurationObservation(DurationObservation durationObservation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(durationObservation, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(durationObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateDurationObservation_first_event_multiplicity(durationObservation, diagnostics, context);
		return result;
	}

	/**
	 * Validates the first_event_multiplicity constraint of '<em>Duration Observation</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateDurationObservation_first_event_multiplicity(DurationObservation durationObservation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return durationObservation.first_event_multiplicity(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLiteralBoolean(LiteralBoolean literalBoolean, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(literalBoolean, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(literalBoolean, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(literalBoolean, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLiteralSpecification(LiteralSpecification literalSpecification, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(literalSpecification, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(literalSpecification, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(literalSpecification, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLiteralInteger(LiteralInteger literalInteger, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(literalInteger, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(literalInteger, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(literalInteger, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLiteralNull(LiteralNull literalNull, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(literalNull, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(literalNull, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(literalNull, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLiteralReal(LiteralReal literalReal, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(literalReal, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(literalReal, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(literalReal, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLiteralString(LiteralString literalString, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(literalString, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(literalString, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(literalString, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateLiteralUnlimitedNatural(LiteralUnlimitedNatural literalUnlimitedNatural, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(literalUnlimitedNatural, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(literalUnlimitedNatural, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(literalUnlimitedNatural, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeConstraint(TimeConstraint timeConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(timeConstraint, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_boolean_value(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_no_side_effects(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateConstraint_not_apply_to_self(timeConstraint, diagnostics, context);
		if (result || diagnostics != null) result &= validateTimeConstraint_has_one_constrainedElement(timeConstraint, diagnostics, context);
		return result;
	}

	/**
	 * Validates the has_one_constrainedElement constraint of '<em>Time Constraint</em>'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeConstraint_has_one_constrainedElement(TimeConstraint timeConstraint, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return timeConstraint.has_one_constrainedElement(diagnostics, context);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeInterval(TimeInterval timeInterval, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(timeInterval, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(timeInterval, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(timeInterval, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTimeObservation(TimeObservation timeObservation, DiagnosticChain diagnostics, Map<Object, Object> context) {
		if (!validate_NoCircularContainment(timeObservation, diagnostics, context)) return false;
		boolean result = validate_EveryMultiplicityConforms(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryDataValueConforms(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryReferenceIsContained(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryBidirectionalReferenceIsPaired(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryProxyResolves(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_UniqueID(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryKeyUnique(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validate_EveryMapEntryUnique(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_has_owner(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateElement_not_own_self(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_visibility_needs_ownership(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_qualified_name(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validateNamedElement_has_no_qualified_name(timeObservation, diagnostics, context);
		if (result || diagnostics != null) result &= validatePackageableElement_namespace_needs_visibility(timeObservation, diagnostics, context);
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateVisibilityKind(VisibilityKind visibilityKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameterDirectionKind(ParameterDirectionKind parameterDirectionKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateParameterEffectKind(ParameterEffectKind parameterEffectKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateCallConcurrencyKind(CallConcurrencyKind callConcurrencyKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateTransitionKind(TransitionKind transitionKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validatePseudostateKind(PseudostateKind pseudostateKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateAggregationKind(AggregationKind aggregationKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateConnectorKind(ConnectorKind connectorKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateObjectNodeOrderingKind(ObjectNodeOrderingKind objectNodeOrderingKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateExpansionKind(ExpansionKind expansionKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessageKind(MessageKind messageKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateMessageSort(MessageSort messageSort, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean validateInteractionOperatorKind(InteractionOperatorKind interactionOperatorKind, DiagnosticChain diagnostics, Map<Object, Object> context) {
		return true;
	}

	/**
	 * Returns the resource locator that will be used to fetch messages for this validator's diagnostics.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public ResourceLocator getResourceLocator() {
		// TODO
		// Specialize this to return a resource locator for messages specific to this validator.
		// Ensure that you remove @generated or mark it @generated NOT
		return super.getResourceLocator();
	}

} //UmlValidator
