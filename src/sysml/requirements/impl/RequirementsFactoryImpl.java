/**
 */
package sysml.requirements.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.InternalEObject;
import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import core.store.MyStore;
import sysml.requirements.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class RequirementsFactoryImpl extends EFactoryImpl implements RequirementsFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static RequirementsFactory init() {
		try {
			RequirementsFactory theRequirementsFactory = (RequirementsFactory)EPackage.Registry.INSTANCE.getEFactory(RequirementsPackage.eNS_URI);
			if (theRequirementsFactory != null) {
				return theRequirementsFactory;
			}
		}
		catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new RequirementsFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public RequirementsFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
 
	public EObject createGen(EClass eClass) {
		switch (eClass.getClassifierID()) {
			case RequirementsPackage.DERIVE_REQT: return createDeriveReqt();
			case RequirementsPackage.VERIFY: return createVerify();
			case RequirementsPackage.COPY: return createCopy();
			case RequirementsPackage.SATISFY: return createSatisfy();
			case RequirementsPackage.TEST_CASE: return createTestCase();
			case RequirementsPackage.REQUIREMENT: return createRequirement();
			case RequirementsPackage.REQUIREMENT_RELATED: return createRequirementRelated();
			default:
				throw new IllegalArgumentException("The class '" + eClass.getName() + "' is not a valid classifier");
		}
	}

	@Override
	public EObject create(EClass eClass){

		InternalEObject newObject = (InternalEObject) createGen(eClass);
		
		newObject.eSetStore(MyStore.INSTANCE);
		
		return newObject;
	}
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public DeriveReqt createDeriveReqt() {
		DeriveReqtImpl deriveReqt = new DeriveReqtImpl();
		return deriveReqt;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Verify createVerify() {
		VerifyImpl verify = new VerifyImpl();
		return verify;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Copy createCopy() {
		CopyImpl copy = new CopyImpl();
		return copy;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Satisfy createSatisfy() {
		SatisfyImpl satisfy = new SatisfyImpl();
		return satisfy;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public TestCase createTestCase() {
		TestCaseImpl testCase = new TestCaseImpl();
		return testCase;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Requirement createRequirement() {
		RequirementImpl requirement = new RequirementImpl();
		return requirement;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public RequirementRelated createRequirementRelated() {
		RequirementRelatedImpl requirementRelated = new RequirementRelatedImpl();
		return requirementRelated;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public RequirementsPackage getRequirementsPackage() {
		return (RequirementsPackage)getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static RequirementsPackage getPackage() {
		return RequirementsPackage.eINSTANCE;
	}

} //RequirementsFactoryImpl
