/**
 */
package standard;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EOperation;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.EReference;

/**
 * <!-- begin-user-doc -->
 * The <b>Package</b> for the model.
 * It contains accessors for the meta objects to represent
 * <ul>
 *   <li>each class,</li>
 *   <li>each feature of each class,</li>
 *   <li>each operation of each class,</li>
 *   <li>each enum,</li>
 *   <li>and each data type</li>
 * </ul>
 * <!-- end-user-doc -->
 * @see standard.StandardFactory
 * @model kind="package"
 *        annotation="http://www.eclipse.org/uml2/2.0.0/UML originalName='Standard'"
 * @generated
 */
public interface StandardPackage extends EPackage {
	/**
	 * The package name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNAME = "standard";

	/**
	 * The package namespace URI.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_URI = "http://www.eclipse.org/uml2/5.0.0/UML/Profile/Standard";

	/**
	 * The package namespace name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_PREFIX = "standard";

	/**
	 * The singleton instance of the package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	StandardPackage eINSTANCE = standard.impl.StandardPackageImpl.init();

	/**
	 * The meta object id for the '{@link standard.impl.AuxiliaryImpl <em>Auxiliary</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.AuxiliaryImpl
	 * @see standard.impl.StandardPackageImpl#getAuxiliary()
	 * @generated
	 */
	int AUXILIARY = 0;

	/**
	 * The feature id for the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int AUXILIARY__BASE_CLASS = 0;

	/**
	 * The number of structural features of the '<em>Auxiliary</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int AUXILIARY_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Auxiliary</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int AUXILIARY_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.CallImpl <em>Call</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.CallImpl
	 * @see standard.impl.StandardPackageImpl#getCall()
	 * @generated
	 */
	int CALL = 1;

	/**
	 * The feature id for the '<em><b>Base Usage</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CALL__BASE_USAGE = 0;

	/**
	 * The number of structural features of the '<em>Call</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CALL_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Client and supplier are operations</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CALL___CLIENT_AND_SUPPLIER_ARE_OPERATIONS__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Call</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CALL_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.CreateImpl <em>Create</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.CreateImpl
	 * @see standard.impl.StandardPackageImpl#getCreate()
	 * @generated
	 */
	int CREATE = 2;

	/**
	 * The feature id for the '<em><b>Base Behavioral Feature</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CREATE__BASE_BEHAVIORAL_FEATURE = 0;

	/**
	 * The feature id for the '<em><b>Base Usage</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CREATE__BASE_USAGE = 1;

	/**
	 * The number of structural features of the '<em>Create</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CREATE_FEATURE_COUNT = 2;

	/**
	 * The operation id for the '<em>Client and supplier are classifiers</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CREATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Create</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CREATE_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.DeriveImpl <em>Derive</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.DeriveImpl
	 * @see standard.impl.StandardPackageImpl#getDerive()
	 * @generated
	 */
	int DERIVE = 3;

	/**
	 * The feature id for the '<em><b>Computation</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DERIVE__COMPUTATION = 0;

	/**
	 * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DERIVE__BASE_ABSTRACTION = 1;

	/**
	 * The number of structural features of the '<em>Derive</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DERIVE_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>Derive</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DERIVE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.DestroyImpl <em>Destroy</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.DestroyImpl
	 * @see standard.impl.StandardPackageImpl#getDestroy()
	 * @generated
	 */
	int DESTROY = 4;

	/**
	 * The feature id for the '<em><b>Base Behavioral Feature</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DESTROY__BASE_BEHAVIORAL_FEATURE = 0;

	/**
	 * The number of structural features of the '<em>Destroy</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DESTROY_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Destroy</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DESTROY_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.FileImpl <em>File</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.FileImpl
	 * @see standard.impl.StandardPackageImpl#getFile()
	 * @generated
	 */
	int FILE = 6;

	/**
	 * The feature id for the '<em><b>Base Artifact</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FILE__BASE_ARTIFACT = 0;

	/**
	 * The number of structural features of the '<em>File</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FILE_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>File</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FILE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.DocumentImpl <em>Document</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.DocumentImpl
	 * @see standard.impl.StandardPackageImpl#getDocument()
	 * @generated
	 */
	int DOCUMENT = 5;

	/**
	 * The feature id for the '<em><b>Base Artifact</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DOCUMENT__BASE_ARTIFACT = FILE__BASE_ARTIFACT;

	/**
	 * The number of structural features of the '<em>Document</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DOCUMENT_FEATURE_COUNT = FILE_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Document</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DOCUMENT_OPERATION_COUNT = FILE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link standard.impl.EntityImpl <em>Entity</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.EntityImpl
	 * @see standard.impl.StandardPackageImpl#getEntity()
	 * @generated
	 */
	int ENTITY = 7;

	/**
	 * The feature id for the '<em><b>Base Component</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ENTITY__BASE_COMPONENT = 0;

	/**
	 * The number of structural features of the '<em>Entity</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ENTITY_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Entity</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ENTITY_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.ExecutableImpl <em>Executable</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ExecutableImpl
	 * @see standard.impl.StandardPackageImpl#getExecutable()
	 * @generated
	 */
	int EXECUTABLE = 8;

	/**
	 * The feature id for the '<em><b>Base Artifact</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXECUTABLE__BASE_ARTIFACT = FILE__BASE_ARTIFACT;

	/**
	 * The number of structural features of the '<em>Executable</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXECUTABLE_FEATURE_COUNT = FILE_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Executable</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXECUTABLE_OPERATION_COUNT = FILE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link standard.impl.FocusImpl <em>Focus</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.FocusImpl
	 * @see standard.impl.StandardPackageImpl#getFocus()
	 * @generated
	 */
	int FOCUS = 9;

	/**
	 * The feature id for the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FOCUS__BASE_CLASS = 0;

	/**
	 * The number of structural features of the '<em>Focus</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FOCUS_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Focus</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FOCUS_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.FrameworkImpl <em>Framework</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.FrameworkImpl
	 * @see standard.impl.StandardPackageImpl#getFramework()
	 * @generated
	 */
	int FRAMEWORK = 10;

	/**
	 * The feature id for the '<em><b>Base Package</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FRAMEWORK__BASE_PACKAGE = 0;

	/**
	 * The number of structural features of the '<em>Framework</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FRAMEWORK_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Framework</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FRAMEWORK_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.ImplementImpl <em>Implement</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ImplementImpl
	 * @see standard.impl.StandardPackageImpl#getImplement()
	 * @generated
	 */
	int IMPLEMENT = 11;

	/**
	 * The feature id for the '<em><b>Base Component</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENT__BASE_COMPONENT = 0;

	/**
	 * The number of structural features of the '<em>Implement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENT_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Implements specification</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENT___IMPLEMENTS_SPECIFICATION__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Implement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENT_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.ImplementationClassImpl <em>Implementation Class</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ImplementationClassImpl
	 * @see standard.impl.StandardPackageImpl#getImplementationClass()
	 * @generated
	 */
	int IMPLEMENTATION_CLASS = 12;

	/**
	 * The feature id for the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENTATION_CLASS__BASE_CLASS = 0;

	/**
	 * The number of structural features of the '<em>Implementation Class</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENTATION_CLASS_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Cannot be realization</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENTATION_CLASS___CANNOT_BE_REALIZATION__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Implementation Class</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int IMPLEMENTATION_CLASS_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.InstantiateImpl <em>Instantiate</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.InstantiateImpl
	 * @see standard.impl.StandardPackageImpl#getInstantiate()
	 * @generated
	 */
	int INSTANTIATE = 13;

	/**
	 * The feature id for the '<em><b>Base Usage</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INSTANTIATE__BASE_USAGE = 0;

	/**
	 * The number of structural features of the '<em>Instantiate</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INSTANTIATE_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Client and supplier are classifiers</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INSTANTIATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Instantiate</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INSTANTIATE_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.LibraryImpl <em>Library</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.LibraryImpl
	 * @see standard.impl.StandardPackageImpl#getLibrary()
	 * @generated
	 */
	int LIBRARY = 14;

	/**
	 * The feature id for the '<em><b>Base Artifact</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LIBRARY__BASE_ARTIFACT = FILE__BASE_ARTIFACT;

	/**
	 * The number of structural features of the '<em>Library</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LIBRARY_FEATURE_COUNT = FILE_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Library</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LIBRARY_OPERATION_COUNT = FILE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link standard.impl.MetaclassImpl <em>Metaclass</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.MetaclassImpl
	 * @see standard.impl.StandardPackageImpl#getMetaclass()
	 * @generated
	 */
	int METACLASS = 15;

	/**
	 * The feature id for the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METACLASS__BASE_CLASS = 0;

	/**
	 * The number of structural features of the '<em>Metaclass</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METACLASS_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Metaclass</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METACLASS_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.ModelLibraryImpl <em>Model Library</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ModelLibraryImpl
	 * @see standard.impl.StandardPackageImpl#getModelLibrary()
	 * @generated
	 */
	int MODEL_LIBRARY = 16;

	/**
	 * The feature id for the '<em><b>Base Package</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int MODEL_LIBRARY__BASE_PACKAGE = 0;

	/**
	 * The number of structural features of the '<em>Model Library</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int MODEL_LIBRARY_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Model Library</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int MODEL_LIBRARY_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.ProcessImpl <em>Process</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ProcessImpl
	 * @see standard.impl.StandardPackageImpl#getProcess()
	 * @generated
	 */
	int PROCESS = 17;

	/**
	 * The feature id for the '<em><b>Base Component</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PROCESS__BASE_COMPONENT = 0;

	/**
	 * The number of structural features of the '<em>Process</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PROCESS_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Process</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PROCESS_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.RealizationImpl <em>Realization</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.RealizationImpl
	 * @see standard.impl.StandardPackageImpl#getRealization()
	 * @generated
	 */
	int REALIZATION = 18;

	/**
	 * The feature id for the '<em><b>Base Classifier</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REALIZATION__BASE_CLASSIFIER = 0;

	/**
	 * The number of structural features of the '<em>Realization</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REALIZATION_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Cannot be implementation Class</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REALIZATION___CANNOT_BE_IMPLEMENTATION_CLASS__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Realization</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REALIZATION_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.RefineImpl <em>Refine</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.RefineImpl
	 * @see standard.impl.StandardPackageImpl#getRefine()
	 * @generated
	 */
	int REFINE = 19;

	/**
	 * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REFINE__BASE_ABSTRACTION = 0;

	/**
	 * The number of structural features of the '<em>Refine</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REFINE_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Refine</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REFINE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.ResponsibilityImpl <em>Responsibility</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ResponsibilityImpl
	 * @see standard.impl.StandardPackageImpl#getResponsibility()
	 * @generated
	 */
	int RESPONSIBILITY = 20;

	/**
	 * The feature id for the '<em><b>Base Usage</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int RESPONSIBILITY__BASE_USAGE = 0;

	/**
	 * The number of structural features of the '<em>Responsibility</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int RESPONSIBILITY_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Responsibility</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int RESPONSIBILITY_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.ScriptImpl <em>Script</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ScriptImpl
	 * @see standard.impl.StandardPackageImpl#getScript()
	 * @generated
	 */
	int SCRIPT = 21;

	/**
	 * The feature id for the '<em><b>Base Artifact</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SCRIPT__BASE_ARTIFACT = FILE__BASE_ARTIFACT;

	/**
	 * The number of structural features of the '<em>Script</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SCRIPT_FEATURE_COUNT = FILE_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Script</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SCRIPT_OPERATION_COUNT = FILE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link standard.impl.SendImpl <em>Send</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.SendImpl
	 * @see standard.impl.StandardPackageImpl#getSend()
	 * @generated
	 */
	int SEND = 22;

	/**
	 * The feature id for the '<em><b>Base Usage</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SEND__BASE_USAGE = 0;

	/**
	 * The number of structural features of the '<em>Send</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SEND_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Client operation sends supplier signal</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SEND___CLIENT_OPERATION_SENDS_SUPPLIER_SIGNAL__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Send</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SEND_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.ServiceImpl <em>Service</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.ServiceImpl
	 * @see standard.impl.StandardPackageImpl#getService()
	 * @generated
	 */
	int SERVICE = 23;

	/**
	 * The feature id for the '<em><b>Base Component</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SERVICE__BASE_COMPONENT = 0;

	/**
	 * The number of structural features of the '<em>Service</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SERVICE_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Service</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SERVICE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.SourceImpl <em>Source</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.SourceImpl
	 * @see standard.impl.StandardPackageImpl#getSource()
	 * @generated
	 */
	int SOURCE = 24;

	/**
	 * The feature id for the '<em><b>Base Artifact</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE__BASE_ARTIFACT = FILE__BASE_ARTIFACT;

	/**
	 * The number of structural features of the '<em>Source</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE_FEATURE_COUNT = FILE_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Source</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SOURCE_OPERATION_COUNT = FILE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link standard.impl.SpecificationImpl <em>Specification</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.SpecificationImpl
	 * @see standard.impl.StandardPackageImpl#getSpecification()
	 * @generated
	 */
	int SPECIFICATION = 25;

	/**
	 * The feature id for the '<em><b>Base Classifier</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPECIFICATION__BASE_CLASSIFIER = 0;

	/**
	 * The number of structural features of the '<em>Specification</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPECIFICATION_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Cannot be type</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPECIFICATION___CANNOT_BE_TYPE__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Specification</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPECIFICATION_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.SubsystemImpl <em>Subsystem</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.SubsystemImpl
	 * @see standard.impl.StandardPackageImpl#getSubsystem()
	 * @generated
	 */
	int SUBSYSTEM = 26;

	/**
	 * The feature id for the '<em><b>Base Component</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SUBSYSTEM__BASE_COMPONENT = 0;

	/**
	 * The number of structural features of the '<em>Subsystem</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SUBSYSTEM_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Subsystem</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SUBSYSTEM_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.TraceImpl <em>Trace</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.TraceImpl
	 * @see standard.impl.StandardPackageImpl#getTrace()
	 * @generated
	 */
	int TRACE = 27;

	/**
	 * The feature id for the '<em><b>Base Abstraction</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TRACE__BASE_ABSTRACTION = 0;

	/**
	 * The number of structural features of the '<em>Trace</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TRACE_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Trace</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TRACE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.TypeImpl <em>Type</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.TypeImpl
	 * @see standard.impl.StandardPackageImpl#getType()
	 * @generated
	 */
	int TYPE = 28;

	/**
	 * The feature id for the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TYPE__BASE_CLASS = 0;

	/**
	 * The number of structural features of the '<em>Type</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TYPE_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Cannot be specification</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TYPE___CANNOT_BE_SPECIFICATION__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Type</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TYPE_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.UtilityImpl <em>Utility</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.UtilityImpl
	 * @see standard.impl.StandardPackageImpl#getUtility()
	 * @generated
	 */
	int UTILITY = 29;

	/**
	 * The feature id for the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UTILITY__BASE_CLASS = 0;

	/**
	 * The number of structural features of the '<em>Utility</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UTILITY_FEATURE_COUNT = 1;

	/**
	 * The operation id for the '<em>Is utility</em>' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UTILITY___IS_UTILITY__DIAGNOSTICCHAIN_MAP = 0;

	/**
	 * The number of operations of the '<em>Utility</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UTILITY_OPERATION_COUNT = 1;

	/**
	 * The meta object id for the '{@link standard.impl.BuildComponentImpl <em>Build Component</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.BuildComponentImpl
	 * @see standard.impl.StandardPackageImpl#getBuildComponent()
	 * @generated
	 */
	int BUILD_COMPONENT = 30;

	/**
	 * The feature id for the '<em><b>Base Component</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BUILD_COMPONENT__BASE_COMPONENT = 0;

	/**
	 * The number of structural features of the '<em>Build Component</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BUILD_COMPONENT_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Build Component</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BUILD_COMPONENT_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.MetamodelImpl <em>Metamodel</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.MetamodelImpl
	 * @see standard.impl.StandardPackageImpl#getMetamodel()
	 * @generated
	 */
	int METAMODEL = 31;

	/**
	 * The feature id for the '<em><b>Base Model</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METAMODEL__BASE_MODEL = 0;

	/**
	 * The number of structural features of the '<em>Metamodel</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METAMODEL_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Metamodel</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METAMODEL_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link standard.impl.SystemModelImpl <em>System Model</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see standard.impl.SystemModelImpl
	 * @see standard.impl.StandardPackageImpl#getSystemModel()
	 * @generated
	 */
	int SYSTEM_MODEL = 32;

	/**
	 * The feature id for the '<em><b>Base Model</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SYSTEM_MODEL__BASE_MODEL = 0;

	/**
	 * The number of structural features of the '<em>System Model</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SYSTEM_MODEL_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>System Model</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SYSTEM_MODEL_OPERATION_COUNT = 0;


	/**
	 * Returns the meta object for class '{@link standard.Auxiliary <em>Auxiliary</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Auxiliary</em>'.
	 * @see standard.Auxiliary
	 * @generated
	 */
	EClass getAuxiliary();

	/**
	 * Returns the meta object for the reference '{@link standard.Auxiliary#getBase_Class <em>Base Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Class</em>'.
	 * @see standard.Auxiliary#getBase_Class()
	 * @see #getAuxiliary()
	 * @generated
	 */
	EReference getAuxiliary_Base_Class();

	/**
	 * Returns the meta object for class '{@link standard.Call <em>Call</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Call</em>'.
	 * @see standard.Call
	 * @generated
	 */
	EClass getCall();

	/**
	 * Returns the meta object for the reference '{@link standard.Call#getBase_Usage <em>Base Usage</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Usage</em>'.
	 * @see standard.Call#getBase_Usage()
	 * @see #getCall()
	 * @generated
	 */
	EReference getCall_Base_Usage();

	/**
	 * Returns the meta object for the '{@link standard.Call#client_and_supplier_are_operations(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client and supplier are operations</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Client and supplier are operations</em>' operation.
	 * @see standard.Call#client_and_supplier_are_operations(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getCall__Client_and_supplier_are_operations__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Create <em>Create</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Create</em>'.
	 * @see standard.Create
	 * @generated
	 */
	EClass getCreate();

	/**
	 * Returns the meta object for the reference '{@link standard.Create#getBase_BehavioralFeature <em>Base Behavioral Feature</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Behavioral Feature</em>'.
	 * @see standard.Create#getBase_BehavioralFeature()
	 * @see #getCreate()
	 * @generated
	 */
	EReference getCreate_Base_BehavioralFeature();

	/**
	 * Returns the meta object for the reference '{@link standard.Create#getBase_Usage <em>Base Usage</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Usage</em>'.
	 * @see standard.Create#getBase_Usage()
	 * @see #getCreate()
	 * @generated
	 */
	EReference getCreate_Base_Usage();

	/**
	 * Returns the meta object for the '{@link standard.Create#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client and supplier are classifiers</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Client and supplier are classifiers</em>' operation.
	 * @see standard.Create#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getCreate__Client_and_supplier_are_classifiers__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Derive <em>Derive</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Derive</em>'.
	 * @see standard.Derive
	 * @generated
	 */
	EClass getDerive();

	/**
	 * Returns the meta object for the containment reference '{@link standard.Derive#getComputation <em>Computation</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference '<em>Computation</em>'.
	 * @see standard.Derive#getComputation()
	 * @see #getDerive()
	 * @generated
	 */
	EReference getDerive_Computation();

	/**
	 * Returns the meta object for the reference '{@link standard.Derive#getBase_Abstraction <em>Base Abstraction</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Abstraction</em>'.
	 * @see standard.Derive#getBase_Abstraction()
	 * @see #getDerive()
	 * @generated
	 */
	EReference getDerive_Base_Abstraction();

	/**
	 * Returns the meta object for class '{@link standard.Destroy <em>Destroy</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Destroy</em>'.
	 * @see standard.Destroy
	 * @generated
	 */
	EClass getDestroy();

	/**
	 * Returns the meta object for the reference '{@link standard.Destroy#getBase_BehavioralFeature <em>Base Behavioral Feature</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Behavioral Feature</em>'.
	 * @see standard.Destroy#getBase_BehavioralFeature()
	 * @see #getDestroy()
	 * @generated
	 */
	EReference getDestroy_Base_BehavioralFeature();

	/**
	 * Returns the meta object for class '{@link standard.Document <em>Document</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Document</em>'.
	 * @see standard.Document
	 * @generated
	 */
	EClass getDocument();

	/**
	 * Returns the meta object for class '{@link standard.File <em>File</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>File</em>'.
	 * @see standard.File
	 * @generated
	 */
	EClass getFile();

	/**
	 * Returns the meta object for the reference '{@link standard.File#getBase_Artifact <em>Base Artifact</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Artifact</em>'.
	 * @see standard.File#getBase_Artifact()
	 * @see #getFile()
	 * @generated
	 */
	EReference getFile_Base_Artifact();

	/**
	 * Returns the meta object for class '{@link standard.Entity <em>Entity</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Entity</em>'.
	 * @see standard.Entity
	 * @generated
	 */
	EClass getEntity();

	/**
	 * Returns the meta object for the reference '{@link standard.Entity#getBase_Component <em>Base Component</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Component</em>'.
	 * @see standard.Entity#getBase_Component()
	 * @see #getEntity()
	 * @generated
	 */
	EReference getEntity_Base_Component();

	/**
	 * Returns the meta object for class '{@link standard.Executable <em>Executable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Executable</em>'.
	 * @see standard.Executable
	 * @generated
	 */
	EClass getExecutable();

	/**
	 * Returns the meta object for class '{@link standard.Focus <em>Focus</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Focus</em>'.
	 * @see standard.Focus
	 * @generated
	 */
	EClass getFocus();

	/**
	 * Returns the meta object for the reference '{@link standard.Focus#getBase_Class <em>Base Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Class</em>'.
	 * @see standard.Focus#getBase_Class()
	 * @see #getFocus()
	 * @generated
	 */
	EReference getFocus_Base_Class();

	/**
	 * Returns the meta object for class '{@link standard.Framework <em>Framework</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Framework</em>'.
	 * @see standard.Framework
	 * @generated
	 */
	EClass getFramework();

	/**
	 * Returns the meta object for the reference '{@link standard.Framework#getBase_Package <em>Base Package</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Package</em>'.
	 * @see standard.Framework#getBase_Package()
	 * @see #getFramework()
	 * @generated
	 */
	EReference getFramework_Base_Package();

	/**
	 * Returns the meta object for class '{@link standard.Implement <em>Implement</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Implement</em>'.
	 * @see standard.Implement
	 * @generated
	 */
	EClass getImplement();

	/**
	 * Returns the meta object for the reference '{@link standard.Implement#getBase_Component <em>Base Component</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Component</em>'.
	 * @see standard.Implement#getBase_Component()
	 * @see #getImplement()
	 * @generated
	 */
	EReference getImplement_Base_Component();

	/**
	 * Returns the meta object for the '{@link standard.Implement#implements_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Implements specification</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Implements specification</em>' operation.
	 * @see standard.Implement#implements_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getImplement__Implements_specification__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.ImplementationClass <em>Implementation Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Implementation Class</em>'.
	 * @see standard.ImplementationClass
	 * @generated
	 */
	EClass getImplementationClass();

	/**
	 * Returns the meta object for the reference '{@link standard.ImplementationClass#getBase_Class <em>Base Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Class</em>'.
	 * @see standard.ImplementationClass#getBase_Class()
	 * @see #getImplementationClass()
	 * @generated
	 */
	EReference getImplementationClass_Base_Class();

	/**
	 * Returns the meta object for the '{@link standard.ImplementationClass#cannot_be_realization(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be realization</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Cannot be realization</em>' operation.
	 * @see standard.ImplementationClass#cannot_be_realization(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getImplementationClass__Cannot_be_realization__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Instantiate <em>Instantiate</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Instantiate</em>'.
	 * @see standard.Instantiate
	 * @generated
	 */
	EClass getInstantiate();

	/**
	 * Returns the meta object for the reference '{@link standard.Instantiate#getBase_Usage <em>Base Usage</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Usage</em>'.
	 * @see standard.Instantiate#getBase_Usage()
	 * @see #getInstantiate()
	 * @generated
	 */
	EReference getInstantiate_Base_Usage();

	/**
	 * Returns the meta object for the '{@link standard.Instantiate#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client and supplier are classifiers</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Client and supplier are classifiers</em>' operation.
	 * @see standard.Instantiate#client_and_supplier_are_classifiers(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getInstantiate__Client_and_supplier_are_classifiers__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Library <em>Library</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Library</em>'.
	 * @see standard.Library
	 * @generated
	 */
	EClass getLibrary();

	/**
	 * Returns the meta object for class '{@link standard.Metaclass <em>Metaclass</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Metaclass</em>'.
	 * @see standard.Metaclass
	 * @generated
	 */
	EClass getMetaclass();

	/**
	 * Returns the meta object for the reference '{@link standard.Metaclass#getBase_Class <em>Base Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Class</em>'.
	 * @see standard.Metaclass#getBase_Class()
	 * @see #getMetaclass()
	 * @generated
	 */
	EReference getMetaclass_Base_Class();

	/**
	 * Returns the meta object for class '{@link standard.ModelLibrary <em>Model Library</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Model Library</em>'.
	 * @see standard.ModelLibrary
	 * @generated
	 */
	EClass getModelLibrary();

	/**
	 * Returns the meta object for the reference '{@link standard.ModelLibrary#getBase_Package <em>Base Package</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Package</em>'.
	 * @see standard.ModelLibrary#getBase_Package()
	 * @see #getModelLibrary()
	 * @generated
	 */
	EReference getModelLibrary_Base_Package();

	/**
	 * Returns the meta object for class '{@link standard.Process <em>Process</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Process</em>'.
	 * @see standard.Process
	 * @generated
	 */
	EClass getProcess();

	/**
	 * Returns the meta object for the reference '{@link standard.Process#getBase_Component <em>Base Component</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Component</em>'.
	 * @see standard.Process#getBase_Component()
	 * @see #getProcess()
	 * @generated
	 */
	EReference getProcess_Base_Component();

	/**
	 * Returns the meta object for class '{@link standard.Realization <em>Realization</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Realization</em>'.
	 * @see standard.Realization
	 * @generated
	 */
	EClass getRealization();

	/**
	 * Returns the meta object for the reference '{@link standard.Realization#getBase_Classifier <em>Base Classifier</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Classifier</em>'.
	 * @see standard.Realization#getBase_Classifier()
	 * @see #getRealization()
	 * @generated
	 */
	EReference getRealization_Base_Classifier();

	/**
	 * Returns the meta object for the '{@link standard.Realization#cannot_be_implementationClass(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be implementation Class</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Cannot be implementation Class</em>' operation.
	 * @see standard.Realization#cannot_be_implementationClass(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getRealization__Cannot_be_implementationClass__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Refine <em>Refine</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Refine</em>'.
	 * @see standard.Refine
	 * @generated
	 */
	EClass getRefine();

	/**
	 * Returns the meta object for the reference '{@link standard.Refine#getBase_Abstraction <em>Base Abstraction</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Abstraction</em>'.
	 * @see standard.Refine#getBase_Abstraction()
	 * @see #getRefine()
	 * @generated
	 */
	EReference getRefine_Base_Abstraction();

	/**
	 * Returns the meta object for class '{@link standard.Responsibility <em>Responsibility</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Responsibility</em>'.
	 * @see standard.Responsibility
	 * @generated
	 */
	EClass getResponsibility();

	/**
	 * Returns the meta object for the reference '{@link standard.Responsibility#getBase_Usage <em>Base Usage</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Usage</em>'.
	 * @see standard.Responsibility#getBase_Usage()
	 * @see #getResponsibility()
	 * @generated
	 */
	EReference getResponsibility_Base_Usage();

	/**
	 * Returns the meta object for class '{@link standard.Script <em>Script</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Script</em>'.
	 * @see standard.Script
	 * @generated
	 */
	EClass getScript();

	/**
	 * Returns the meta object for class '{@link standard.Send <em>Send</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Send</em>'.
	 * @see standard.Send
	 * @generated
	 */
	EClass getSend();

	/**
	 * Returns the meta object for the reference '{@link standard.Send#getBase_Usage <em>Base Usage</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Usage</em>'.
	 * @see standard.Send#getBase_Usage()
	 * @see #getSend()
	 * @generated
	 */
	EReference getSend_Base_Usage();

	/**
	 * Returns the meta object for the '{@link standard.Send#client_operation_sends_supplier_signal(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Client operation sends supplier signal</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Client operation sends supplier signal</em>' operation.
	 * @see standard.Send#client_operation_sends_supplier_signal(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getSend__Client_operation_sends_supplier_signal__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Service <em>Service</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Service</em>'.
	 * @see standard.Service
	 * @generated
	 */
	EClass getService();

	/**
	 * Returns the meta object for the reference '{@link standard.Service#getBase_Component <em>Base Component</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Component</em>'.
	 * @see standard.Service#getBase_Component()
	 * @see #getService()
	 * @generated
	 */
	EReference getService_Base_Component();

	/**
	 * Returns the meta object for class '{@link standard.Source <em>Source</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Source</em>'.
	 * @see standard.Source
	 * @generated
	 */
	EClass getSource();

	/**
	 * Returns the meta object for class '{@link standard.Specification <em>Specification</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Specification</em>'.
	 * @see standard.Specification
	 * @generated
	 */
	EClass getSpecification();

	/**
	 * Returns the meta object for the reference '{@link standard.Specification#getBase_Classifier <em>Base Classifier</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Classifier</em>'.
	 * @see standard.Specification#getBase_Classifier()
	 * @see #getSpecification()
	 * @generated
	 */
	EReference getSpecification_Base_Classifier();

	/**
	 * Returns the meta object for the '{@link standard.Specification#cannot_be_type(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be type</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Cannot be type</em>' operation.
	 * @see standard.Specification#cannot_be_type(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getSpecification__Cannot_be_type__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Subsystem <em>Subsystem</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Subsystem</em>'.
	 * @see standard.Subsystem
	 * @generated
	 */
	EClass getSubsystem();

	/**
	 * Returns the meta object for the reference '{@link standard.Subsystem#getBase_Component <em>Base Component</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Component</em>'.
	 * @see standard.Subsystem#getBase_Component()
	 * @see #getSubsystem()
	 * @generated
	 */
	EReference getSubsystem_Base_Component();

	/**
	 * Returns the meta object for class '{@link standard.Trace <em>Trace</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Trace</em>'.
	 * @see standard.Trace
	 * @generated
	 */
	EClass getTrace();

	/**
	 * Returns the meta object for the reference '{@link standard.Trace#getBase_Abstraction <em>Base Abstraction</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Abstraction</em>'.
	 * @see standard.Trace#getBase_Abstraction()
	 * @see #getTrace()
	 * @generated
	 */
	EReference getTrace_Base_Abstraction();

	/**
	 * Returns the meta object for class '{@link standard.Type <em>Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Type</em>'.
	 * @see standard.Type
	 * @generated
	 */
	EClass getType();

	/**
	 * Returns the meta object for the reference '{@link standard.Type#getBase_Class <em>Base Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Class</em>'.
	 * @see standard.Type#getBase_Class()
	 * @see #getType()
	 * @generated
	 */
	EReference getType_Base_Class();

	/**
	 * Returns the meta object for the '{@link standard.Type#cannot_be_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Cannot be specification</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Cannot be specification</em>' operation.
	 * @see standard.Type#cannot_be_specification(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getType__Cannot_be_specification__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.Utility <em>Utility</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Utility</em>'.
	 * @see standard.Utility
	 * @generated
	 */
	EClass getUtility();

	/**
	 * Returns the meta object for the reference '{@link standard.Utility#getBase_Class <em>Base Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Class</em>'.
	 * @see standard.Utility#getBase_Class()
	 * @see #getUtility()
	 * @generated
	 */
	EReference getUtility_Base_Class();

	/**
	 * Returns the meta object for the '{@link standard.Utility#is_utility(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map) <em>Is utility</em>}' operation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the '<em>Is utility</em>' operation.
	 * @see standard.Utility#is_utility(org.eclipse.emf.common.util.DiagnosticChain, java.util.Map)
	 * @generated
	 */
	EOperation getUtility__Is_utility__DiagnosticChain_Map();

	/**
	 * Returns the meta object for class '{@link standard.BuildComponent <em>Build Component</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Build Component</em>'.
	 * @see standard.BuildComponent
	 * @generated
	 */
	EClass getBuildComponent();

	/**
	 * Returns the meta object for the reference '{@link standard.BuildComponent#getBase_Component <em>Base Component</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Component</em>'.
	 * @see standard.BuildComponent#getBase_Component()
	 * @see #getBuildComponent()
	 * @generated
	 */
	EReference getBuildComponent_Base_Component();

	/**
	 * Returns the meta object for class '{@link standard.Metamodel <em>Metamodel</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Metamodel</em>'.
	 * @see standard.Metamodel
	 * @generated
	 */
	EClass getMetamodel();

	/**
	 * Returns the meta object for the reference '{@link standard.Metamodel#getBase_Model <em>Base Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Model</em>'.
	 * @see standard.Metamodel#getBase_Model()
	 * @see #getMetamodel()
	 * @generated
	 */
	EReference getMetamodel_Base_Model();

	/**
	 * Returns the meta object for class '{@link standard.SystemModel <em>System Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>System Model</em>'.
	 * @see standard.SystemModel
	 * @generated
	 */
	EClass getSystemModel();

	/**
	 * Returns the meta object for the reference '{@link standard.SystemModel#getBase_Model <em>Base Model</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Model</em>'.
	 * @see standard.SystemModel#getBase_Model()
	 * @see #getSystemModel()
	 * @generated
	 */
	EReference getSystemModel_Base_Model();

	/**
	 * Returns the factory that creates the instances of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the factory that creates the instances of the model.
	 * @generated
	 */
	StandardFactory getStandardFactory();

	/**
	 * <!-- begin-user-doc -->
	 * Defines literals for the meta objects that represent
	 * <ul>
	 *   <li>each class,</li>
	 *   <li>each feature of each class,</li>
	 *   <li>each operation of each class,</li>
	 *   <li>each enum,</li>
	 *   <li>and each data type</li>
	 * </ul>
	 * <!-- end-user-doc -->
	 * @generated
	 */
	interface Literals {
		/**
		 * The meta object literal for the '{@link standard.impl.AuxiliaryImpl <em>Auxiliary</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.AuxiliaryImpl
		 * @see standard.impl.StandardPackageImpl#getAuxiliary()
		 * @generated
		 */
		EClass AUXILIARY = eINSTANCE.getAuxiliary();

		/**
		 * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference AUXILIARY__BASE_CLASS = eINSTANCE.getAuxiliary_Base_Class();

		/**
		 * The meta object literal for the '{@link standard.impl.CallImpl <em>Call</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.CallImpl
		 * @see standard.impl.StandardPackageImpl#getCall()
		 * @generated
		 */
		EClass CALL = eINSTANCE.getCall();

		/**
		 * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CALL__BASE_USAGE = eINSTANCE.getCall_Base_Usage();

		/**
		 * The meta object literal for the '<em><b>Client and supplier are operations</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation CALL___CLIENT_AND_SUPPLIER_ARE_OPERATIONS__DIAGNOSTICCHAIN_MAP = eINSTANCE.getCall__Client_and_supplier_are_operations__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.CreateImpl <em>Create</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.CreateImpl
		 * @see standard.impl.StandardPackageImpl#getCreate()
		 * @generated
		 */
		EClass CREATE = eINSTANCE.getCreate();

		/**
		 * The meta object literal for the '<em><b>Base Behavioral Feature</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CREATE__BASE_BEHAVIORAL_FEATURE = eINSTANCE.getCreate_Base_BehavioralFeature();

		/**
		 * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CREATE__BASE_USAGE = eINSTANCE.getCreate_Base_Usage();

		/**
		 * The meta object literal for the '<em><b>Client and supplier are classifiers</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation CREATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP = eINSTANCE.getCreate__Client_and_supplier_are_classifiers__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.DeriveImpl <em>Derive</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.DeriveImpl
		 * @see standard.impl.StandardPackageImpl#getDerive()
		 * @generated
		 */
		EClass DERIVE = eINSTANCE.getDerive();

		/**
		 * The meta object literal for the '<em><b>Computation</b></em>' containment reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference DERIVE__COMPUTATION = eINSTANCE.getDerive_Computation();

		/**
		 * The meta object literal for the '<em><b>Base Abstraction</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference DERIVE__BASE_ABSTRACTION = eINSTANCE.getDerive_Base_Abstraction();

		/**
		 * The meta object literal for the '{@link standard.impl.DestroyImpl <em>Destroy</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.DestroyImpl
		 * @see standard.impl.StandardPackageImpl#getDestroy()
		 * @generated
		 */
		EClass DESTROY = eINSTANCE.getDestroy();

		/**
		 * The meta object literal for the '<em><b>Base Behavioral Feature</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference DESTROY__BASE_BEHAVIORAL_FEATURE = eINSTANCE.getDestroy_Base_BehavioralFeature();

		/**
		 * The meta object literal for the '{@link standard.impl.DocumentImpl <em>Document</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.DocumentImpl
		 * @see standard.impl.StandardPackageImpl#getDocument()
		 * @generated
		 */
		EClass DOCUMENT = eINSTANCE.getDocument();

		/**
		 * The meta object literal for the '{@link standard.impl.FileImpl <em>File</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.FileImpl
		 * @see standard.impl.StandardPackageImpl#getFile()
		 * @generated
		 */
		EClass FILE = eINSTANCE.getFile();

		/**
		 * The meta object literal for the '<em><b>Base Artifact</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FILE__BASE_ARTIFACT = eINSTANCE.getFile_Base_Artifact();

		/**
		 * The meta object literal for the '{@link standard.impl.EntityImpl <em>Entity</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.EntityImpl
		 * @see standard.impl.StandardPackageImpl#getEntity()
		 * @generated
		 */
		EClass ENTITY = eINSTANCE.getEntity();

		/**
		 * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ENTITY__BASE_COMPONENT = eINSTANCE.getEntity_Base_Component();

		/**
		 * The meta object literal for the '{@link standard.impl.ExecutableImpl <em>Executable</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ExecutableImpl
		 * @see standard.impl.StandardPackageImpl#getExecutable()
		 * @generated
		 */
		EClass EXECUTABLE = eINSTANCE.getExecutable();

		/**
		 * The meta object literal for the '{@link standard.impl.FocusImpl <em>Focus</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.FocusImpl
		 * @see standard.impl.StandardPackageImpl#getFocus()
		 * @generated
		 */
		EClass FOCUS = eINSTANCE.getFocus();

		/**
		 * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FOCUS__BASE_CLASS = eINSTANCE.getFocus_Base_Class();

		/**
		 * The meta object literal for the '{@link standard.impl.FrameworkImpl <em>Framework</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.FrameworkImpl
		 * @see standard.impl.StandardPackageImpl#getFramework()
		 * @generated
		 */
		EClass FRAMEWORK = eINSTANCE.getFramework();

		/**
		 * The meta object literal for the '<em><b>Base Package</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FRAMEWORK__BASE_PACKAGE = eINSTANCE.getFramework_Base_Package();

		/**
		 * The meta object literal for the '{@link standard.impl.ImplementImpl <em>Implement</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ImplementImpl
		 * @see standard.impl.StandardPackageImpl#getImplement()
		 * @generated
		 */
		EClass IMPLEMENT = eINSTANCE.getImplement();

		/**
		 * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference IMPLEMENT__BASE_COMPONENT = eINSTANCE.getImplement_Base_Component();

		/**
		 * The meta object literal for the '<em><b>Implements specification</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation IMPLEMENT___IMPLEMENTS_SPECIFICATION__DIAGNOSTICCHAIN_MAP = eINSTANCE.getImplement__Implements_specification__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.ImplementationClassImpl <em>Implementation Class</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ImplementationClassImpl
		 * @see standard.impl.StandardPackageImpl#getImplementationClass()
		 * @generated
		 */
		EClass IMPLEMENTATION_CLASS = eINSTANCE.getImplementationClass();

		/**
		 * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference IMPLEMENTATION_CLASS__BASE_CLASS = eINSTANCE.getImplementationClass_Base_Class();

		/**
		 * The meta object literal for the '<em><b>Cannot be realization</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation IMPLEMENTATION_CLASS___CANNOT_BE_REALIZATION__DIAGNOSTICCHAIN_MAP = eINSTANCE.getImplementationClass__Cannot_be_realization__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.InstantiateImpl <em>Instantiate</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.InstantiateImpl
		 * @see standard.impl.StandardPackageImpl#getInstantiate()
		 * @generated
		 */
		EClass INSTANTIATE = eINSTANCE.getInstantiate();

		/**
		 * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference INSTANTIATE__BASE_USAGE = eINSTANCE.getInstantiate_Base_Usage();

		/**
		 * The meta object literal for the '<em><b>Client and supplier are classifiers</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation INSTANTIATE___CLIENT_AND_SUPPLIER_ARE_CLASSIFIERS__DIAGNOSTICCHAIN_MAP = eINSTANCE.getInstantiate__Client_and_supplier_are_classifiers__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.LibraryImpl <em>Library</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.LibraryImpl
		 * @see standard.impl.StandardPackageImpl#getLibrary()
		 * @generated
		 */
		EClass LIBRARY = eINSTANCE.getLibrary();

		/**
		 * The meta object literal for the '{@link standard.impl.MetaclassImpl <em>Metaclass</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.MetaclassImpl
		 * @see standard.impl.StandardPackageImpl#getMetaclass()
		 * @generated
		 */
		EClass METACLASS = eINSTANCE.getMetaclass();

		/**
		 * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference METACLASS__BASE_CLASS = eINSTANCE.getMetaclass_Base_Class();

		/**
		 * The meta object literal for the '{@link standard.impl.ModelLibraryImpl <em>Model Library</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ModelLibraryImpl
		 * @see standard.impl.StandardPackageImpl#getModelLibrary()
		 * @generated
		 */
		EClass MODEL_LIBRARY = eINSTANCE.getModelLibrary();

		/**
		 * The meta object literal for the '<em><b>Base Package</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference MODEL_LIBRARY__BASE_PACKAGE = eINSTANCE.getModelLibrary_Base_Package();

		/**
		 * The meta object literal for the '{@link standard.impl.ProcessImpl <em>Process</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ProcessImpl
		 * @see standard.impl.StandardPackageImpl#getProcess()
		 * @generated
		 */
		EClass PROCESS = eINSTANCE.getProcess();

		/**
		 * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference PROCESS__BASE_COMPONENT = eINSTANCE.getProcess_Base_Component();

		/**
		 * The meta object literal for the '{@link standard.impl.RealizationImpl <em>Realization</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.RealizationImpl
		 * @see standard.impl.StandardPackageImpl#getRealization()
		 * @generated
		 */
		EClass REALIZATION = eINSTANCE.getRealization();

		/**
		 * The meta object literal for the '<em><b>Base Classifier</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference REALIZATION__BASE_CLASSIFIER = eINSTANCE.getRealization_Base_Classifier();

		/**
		 * The meta object literal for the '<em><b>Cannot be implementation Class</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation REALIZATION___CANNOT_BE_IMPLEMENTATION_CLASS__DIAGNOSTICCHAIN_MAP = eINSTANCE.getRealization__Cannot_be_implementationClass__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.RefineImpl <em>Refine</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.RefineImpl
		 * @see standard.impl.StandardPackageImpl#getRefine()
		 * @generated
		 */
		EClass REFINE = eINSTANCE.getRefine();

		/**
		 * The meta object literal for the '<em><b>Base Abstraction</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference REFINE__BASE_ABSTRACTION = eINSTANCE.getRefine_Base_Abstraction();

		/**
		 * The meta object literal for the '{@link standard.impl.ResponsibilityImpl <em>Responsibility</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ResponsibilityImpl
		 * @see standard.impl.StandardPackageImpl#getResponsibility()
		 * @generated
		 */
		EClass RESPONSIBILITY = eINSTANCE.getResponsibility();

		/**
		 * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference RESPONSIBILITY__BASE_USAGE = eINSTANCE.getResponsibility_Base_Usage();

		/**
		 * The meta object literal for the '{@link standard.impl.ScriptImpl <em>Script</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ScriptImpl
		 * @see standard.impl.StandardPackageImpl#getScript()
		 * @generated
		 */
		EClass SCRIPT = eINSTANCE.getScript();

		/**
		 * The meta object literal for the '{@link standard.impl.SendImpl <em>Send</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.SendImpl
		 * @see standard.impl.StandardPackageImpl#getSend()
		 * @generated
		 */
		EClass SEND = eINSTANCE.getSend();

		/**
		 * The meta object literal for the '<em><b>Base Usage</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SEND__BASE_USAGE = eINSTANCE.getSend_Base_Usage();

		/**
		 * The meta object literal for the '<em><b>Client operation sends supplier signal</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation SEND___CLIENT_OPERATION_SENDS_SUPPLIER_SIGNAL__DIAGNOSTICCHAIN_MAP = eINSTANCE.getSend__Client_operation_sends_supplier_signal__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.ServiceImpl <em>Service</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.ServiceImpl
		 * @see standard.impl.StandardPackageImpl#getService()
		 * @generated
		 */
		EClass SERVICE = eINSTANCE.getService();

		/**
		 * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SERVICE__BASE_COMPONENT = eINSTANCE.getService_Base_Component();

		/**
		 * The meta object literal for the '{@link standard.impl.SourceImpl <em>Source</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.SourceImpl
		 * @see standard.impl.StandardPackageImpl#getSource()
		 * @generated
		 */
		EClass SOURCE = eINSTANCE.getSource();

		/**
		 * The meta object literal for the '{@link standard.impl.SpecificationImpl <em>Specification</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.SpecificationImpl
		 * @see standard.impl.StandardPackageImpl#getSpecification()
		 * @generated
		 */
		EClass SPECIFICATION = eINSTANCE.getSpecification();

		/**
		 * The meta object literal for the '<em><b>Base Classifier</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SPECIFICATION__BASE_CLASSIFIER = eINSTANCE.getSpecification_Base_Classifier();

		/**
		 * The meta object literal for the '<em><b>Cannot be type</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation SPECIFICATION___CANNOT_BE_TYPE__DIAGNOSTICCHAIN_MAP = eINSTANCE.getSpecification__Cannot_be_type__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.SubsystemImpl <em>Subsystem</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.SubsystemImpl
		 * @see standard.impl.StandardPackageImpl#getSubsystem()
		 * @generated
		 */
		EClass SUBSYSTEM = eINSTANCE.getSubsystem();

		/**
		 * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SUBSYSTEM__BASE_COMPONENT = eINSTANCE.getSubsystem_Base_Component();

		/**
		 * The meta object literal for the '{@link standard.impl.TraceImpl <em>Trace</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.TraceImpl
		 * @see standard.impl.StandardPackageImpl#getTrace()
		 * @generated
		 */
		EClass TRACE = eINSTANCE.getTrace();

		/**
		 * The meta object literal for the '<em><b>Base Abstraction</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TRACE__BASE_ABSTRACTION = eINSTANCE.getTrace_Base_Abstraction();

		/**
		 * The meta object literal for the '{@link standard.impl.TypeImpl <em>Type</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.TypeImpl
		 * @see standard.impl.StandardPackageImpl#getType()
		 * @generated
		 */
		EClass TYPE = eINSTANCE.getType();

		/**
		 * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TYPE__BASE_CLASS = eINSTANCE.getType_Base_Class();

		/**
		 * The meta object literal for the '<em><b>Cannot be specification</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation TYPE___CANNOT_BE_SPECIFICATION__DIAGNOSTICCHAIN_MAP = eINSTANCE.getType__Cannot_be_specification__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.UtilityImpl <em>Utility</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.UtilityImpl
		 * @see standard.impl.StandardPackageImpl#getUtility()
		 * @generated
		 */
		EClass UTILITY = eINSTANCE.getUtility();

		/**
		 * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference UTILITY__BASE_CLASS = eINSTANCE.getUtility_Base_Class();

		/**
		 * The meta object literal for the '<em><b>Is utility</b></em>' operation.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EOperation UTILITY___IS_UTILITY__DIAGNOSTICCHAIN_MAP = eINSTANCE.getUtility__Is_utility__DiagnosticChain_Map();

		/**
		 * The meta object literal for the '{@link standard.impl.BuildComponentImpl <em>Build Component</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.BuildComponentImpl
		 * @see standard.impl.StandardPackageImpl#getBuildComponent()
		 * @generated
		 */
		EClass BUILD_COMPONENT = eINSTANCE.getBuildComponent();

		/**
		 * The meta object literal for the '<em><b>Base Component</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference BUILD_COMPONENT__BASE_COMPONENT = eINSTANCE.getBuildComponent_Base_Component();

		/**
		 * The meta object literal for the '{@link standard.impl.MetamodelImpl <em>Metamodel</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.MetamodelImpl
		 * @see standard.impl.StandardPackageImpl#getMetamodel()
		 * @generated
		 */
		EClass METAMODEL = eINSTANCE.getMetamodel();

		/**
		 * The meta object literal for the '<em><b>Base Model</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference METAMODEL__BASE_MODEL = eINSTANCE.getMetamodel_Base_Model();

		/**
		 * The meta object literal for the '{@link standard.impl.SystemModelImpl <em>System Model</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see standard.impl.SystemModelImpl
		 * @see standard.impl.StandardPackageImpl#getSystemModel()
		 * @generated
		 */
		EClass SYSTEM_MODEL = eINSTANCE.getSystemModel();

		/**
		 * The meta object literal for the '<em><b>Base Model</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SYSTEM_MODEL__BASE_MODEL = eINSTANCE.getSystemModel_Base_Model();

	}

} //StandardPackage
