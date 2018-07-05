/**
 */
package sysml.modelelements;

import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.emf.ecore.EClass;
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
 * <!-- begin-model-doc -->
 * The supplier/target must be an element stereotyped by <<ViewPoint>>
 * The client/source must be an element stereotyped by <<View>>
 * <!-- end-model-doc -->
 * @see sysml.modelelements.ModelelementsFactory
 * @model kind="package"
 * @generated
 */
public interface ModelelementsPackage extends EPackage {
	/**
	 * The package name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNAME = "modelelements";

	/**
	 * The package namespace URI.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_URI = "http://www.eclipse.org/papyrus/0.7.0/SysML/ModelElements";

	/**
	 * The package namespace name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_PREFIX = "ModelElements";

	/**
	 * The singleton instance of the package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	ModelelementsPackage eINSTANCE = sysml.modelelements.impl.ModelelementsPackageImpl.init();

	/**
	 * The meta object id for the '{@link sysml.modelelements.impl.ConformImpl <em>Conform</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see sysml.modelelements.impl.ConformImpl
	 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getConform()
	 * @generated
	 */
	int CONFORM = 0;

	/**
	 * The feature id for the '<em><b>Base Dependency</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONFORM__BASE_DEPENDENCY = 0;

	/**
	 * The number of structural features of the '<em>Conform</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONFORM_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Conform</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONFORM_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link sysml.modelelements.impl.ViewImpl <em>View</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see sysml.modelelements.impl.ViewImpl
	 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getView()
	 * @generated
	 */
	int VIEW = 1;

	/**
	 * The feature id for the '<em><b>View Point</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW__VIEW_POINT = 0;

	/**
	 * The feature id for the '<em><b>Base Package</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW__BASE_PACKAGE = 1;

	/**
	 * The number of structural features of the '<em>View</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>View</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link sysml.modelelements.impl.ViewPointImpl <em>View Point</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see sysml.modelelements.impl.ViewPointImpl
	 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getViewPoint()
	 * @generated
	 */
	int VIEW_POINT = 2;

	/**
	 * The feature id for the '<em><b>Base Class</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT__BASE_CLASS = 0;

	/**
	 * The feature id for the '<em><b>Stake Holders</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT__STAKE_HOLDERS = 1;

	/**
	 * The feature id for the '<em><b>Purpose</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT__PURPOSE = 2;

	/**
	 * The feature id for the '<em><b>Concerns</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT__CONCERNS = 3;

	/**
	 * The feature id for the '<em><b>Languages</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT__LANGUAGES = 4;

	/**
	 * The feature id for the '<em><b>Methods</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT__METHODS = 5;

	/**
	 * The number of structural features of the '<em>View Point</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT_FEATURE_COUNT = 6;

	/**
	 * The number of operations of the '<em>View Point</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VIEW_POINT_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link sysml.modelelements.impl.RationaleImpl <em>Rationale</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see sysml.modelelements.impl.RationaleImpl
	 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getRationale()
	 * @generated
	 */
	int RATIONALE = 3;

	/**
	 * The feature id for the '<em><b>Base Comment</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int RATIONALE__BASE_COMMENT = 0;

	/**
	 * The number of structural features of the '<em>Rationale</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int RATIONALE_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Rationale</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int RATIONALE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link sysml.modelelements.impl.ProblemImpl <em>Problem</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see sysml.modelelements.impl.ProblemImpl
	 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getProblem()
	 * @generated
	 */
	int PROBLEM = 4;

	/**
	 * The feature id for the '<em><b>Base Comment</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PROBLEM__BASE_COMMENT = 0;

	/**
	 * The number of structural features of the '<em>Problem</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PROBLEM_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Problem</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PROBLEM_OPERATION_COUNT = 0;


	/**
	 * Returns the meta object for class '{@link sysml.modelelements.Conform <em>Conform</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Conform</em>'.
	 * @see sysml.modelelements.Conform
	 * @generated
	 */
	EClass getConform();

	/**
	 * Returns the meta object for the reference '{@link sysml.modelelements.Conform#getBase_Dependency <em>Base Dependency</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Dependency</em>'.
	 * @see sysml.modelelements.Conform#getBase_Dependency()
	 * @see #getConform()
	 * @generated
	 */
	EReference getConform_Base_Dependency();

	/**
	 * Returns the meta object for class '{@link sysml.modelelements.View <em>View</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>View</em>'.
	 * @see sysml.modelelements.View
	 * @generated
	 */
	EClass getView();

	/**
	 * Returns the meta object for the reference '{@link sysml.modelelements.View#getViewPoint <em>View Point</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>View Point</em>'.
	 * @see sysml.modelelements.View#getViewPoint()
	 * @see #getView()
	 * @generated
	 */
	EReference getView_ViewPoint();

	/**
	 * Returns the meta object for the reference '{@link sysml.modelelements.View#getBase_Package <em>Base Package</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Package</em>'.
	 * @see sysml.modelelements.View#getBase_Package()
	 * @see #getView()
	 * @generated
	 */
	EReference getView_Base_Package();

	/**
	 * Returns the meta object for class '{@link sysml.modelelements.ViewPoint <em>View Point</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>View Point</em>'.
	 * @see sysml.modelelements.ViewPoint
	 * @generated
	 */
	EClass getViewPoint();

	/**
	 * Returns the meta object for the reference '{@link sysml.modelelements.ViewPoint#getBase_Class <em>Base Class</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Class</em>'.
	 * @see sysml.modelelements.ViewPoint#getBase_Class()
	 * @see #getViewPoint()
	 * @generated
	 */
	EReference getViewPoint_Base_Class();

	/**
	 * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getStakeHolders <em>Stake Holders</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Stake Holders</em>'.
	 * @see sysml.modelelements.ViewPoint#getStakeHolders()
	 * @see #getViewPoint()
	 * @generated
	 */
	EAttribute getViewPoint_StakeHolders();

	/**
	 * Returns the meta object for the attribute '{@link sysml.modelelements.ViewPoint#getPurpose <em>Purpose</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Purpose</em>'.
	 * @see sysml.modelelements.ViewPoint#getPurpose()
	 * @see #getViewPoint()
	 * @generated
	 */
	EAttribute getViewPoint_Purpose();

	/**
	 * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getConcerns <em>Concerns</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Concerns</em>'.
	 * @see sysml.modelelements.ViewPoint#getConcerns()
	 * @see #getViewPoint()
	 * @generated
	 */
	EAttribute getViewPoint_Concerns();

	/**
	 * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getLanguages <em>Languages</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Languages</em>'.
	 * @see sysml.modelelements.ViewPoint#getLanguages()
	 * @see #getViewPoint()
	 * @generated
	 */
	EAttribute getViewPoint_Languages();

	/**
	 * Returns the meta object for the attribute list '{@link sysml.modelelements.ViewPoint#getMethods <em>Methods</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Methods</em>'.
	 * @see sysml.modelelements.ViewPoint#getMethods()
	 * @see #getViewPoint()
	 * @generated
	 */
	EAttribute getViewPoint_Methods();

	/**
	 * Returns the meta object for class '{@link sysml.modelelements.Rationale <em>Rationale</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Rationale</em>'.
	 * @see sysml.modelelements.Rationale
	 * @generated
	 */
	EClass getRationale();

	/**
	 * Returns the meta object for the reference '{@link sysml.modelelements.Rationale#getBase_Comment <em>Base Comment</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Comment</em>'.
	 * @see sysml.modelelements.Rationale#getBase_Comment()
	 * @see #getRationale()
	 * @generated
	 */
	EReference getRationale_Base_Comment();

	/**
	 * Returns the meta object for class '{@link sysml.modelelements.Problem <em>Problem</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Problem</em>'.
	 * @see sysml.modelelements.Problem
	 * @generated
	 */
	EClass getProblem();

	/**
	 * Returns the meta object for the reference '{@link sysml.modelelements.Problem#getBase_Comment <em>Base Comment</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Base Comment</em>'.
	 * @see sysml.modelelements.Problem#getBase_Comment()
	 * @see #getProblem()
	 * @generated
	 */
	EReference getProblem_Base_Comment();

	/**
	 * Returns the factory that creates the instances of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the factory that creates the instances of the model.
	 * @generated
	 */
	ModelelementsFactory getModelelementsFactory();

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
		 * The meta object literal for the '{@link sysml.modelelements.impl.ConformImpl <em>Conform</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see sysml.modelelements.impl.ConformImpl
		 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getConform()
		 * @generated
		 */
		EClass CONFORM = eINSTANCE.getConform();

		/**
		 * The meta object literal for the '<em><b>Base Dependency</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CONFORM__BASE_DEPENDENCY = eINSTANCE.getConform_Base_Dependency();

		/**
		 * The meta object literal for the '{@link sysml.modelelements.impl.ViewImpl <em>View</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see sysml.modelelements.impl.ViewImpl
		 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getView()
		 * @generated
		 */
		EClass VIEW = eINSTANCE.getView();

		/**
		 * The meta object literal for the '<em><b>View Point</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference VIEW__VIEW_POINT = eINSTANCE.getView_ViewPoint();

		/**
		 * The meta object literal for the '<em><b>Base Package</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference VIEW__BASE_PACKAGE = eINSTANCE.getView_Base_Package();

		/**
		 * The meta object literal for the '{@link sysml.modelelements.impl.ViewPointImpl <em>View Point</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see sysml.modelelements.impl.ViewPointImpl
		 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getViewPoint()
		 * @generated
		 */
		EClass VIEW_POINT = eINSTANCE.getViewPoint();

		/**
		 * The meta object literal for the '<em><b>Base Class</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference VIEW_POINT__BASE_CLASS = eINSTANCE.getViewPoint_Base_Class();

		/**
		 * The meta object literal for the '<em><b>Stake Holders</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute VIEW_POINT__STAKE_HOLDERS = eINSTANCE.getViewPoint_StakeHolders();

		/**
		 * The meta object literal for the '<em><b>Purpose</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute VIEW_POINT__PURPOSE = eINSTANCE.getViewPoint_Purpose();

		/**
		 * The meta object literal for the '<em><b>Concerns</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute VIEW_POINT__CONCERNS = eINSTANCE.getViewPoint_Concerns();

		/**
		 * The meta object literal for the '<em><b>Languages</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute VIEW_POINT__LANGUAGES = eINSTANCE.getViewPoint_Languages();

		/**
		 * The meta object literal for the '<em><b>Methods</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute VIEW_POINT__METHODS = eINSTANCE.getViewPoint_Methods();

		/**
		 * The meta object literal for the '{@link sysml.modelelements.impl.RationaleImpl <em>Rationale</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see sysml.modelelements.impl.RationaleImpl
		 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getRationale()
		 * @generated
		 */
		EClass RATIONALE = eINSTANCE.getRationale();

		/**
		 * The meta object literal for the '<em><b>Base Comment</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference RATIONALE__BASE_COMMENT = eINSTANCE.getRationale_Base_Comment();

		/**
		 * The meta object literal for the '{@link sysml.modelelements.impl.ProblemImpl <em>Problem</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see sysml.modelelements.impl.ProblemImpl
		 * @see sysml.modelelements.impl.ModelelementsPackageImpl#getProblem()
		 * @generated
		 */
		EClass PROBLEM = eINSTANCE.getProblem();

		/**
		 * The meta object literal for the '<em><b>Base Comment</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference PROBLEM__BASE_COMMENT = eINSTANCE.getProblem_Base_Comment();

	}

} //ModelelementsPackage
