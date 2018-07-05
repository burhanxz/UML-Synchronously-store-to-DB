/**
 */
package sysml.modelelements.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.InternalEObject;
import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import core.store.MyStore;
import sysml.modelelements.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class ModelelementsFactoryImpl extends EFactoryImpl implements ModelelementsFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static ModelelementsFactory init() {
		try {
			ModelelementsFactory theModelelementsFactory = (ModelelementsFactory)EPackage.Registry.INSTANCE.getEFactory(ModelelementsPackage.eNS_URI);
			if (theModelelementsFactory != null) {
				return theModelelementsFactory;
			}
		}
		catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new ModelelementsFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ModelelementsFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	 
	public EObject createGen(EClass eClass) {
		switch (eClass.getClassifierID()) {
			case ModelelementsPackage.CONFORM: return createConform();
			case ModelelementsPackage.VIEW: return createView();
			case ModelelementsPackage.VIEW_POINT: return createViewPoint();
			case ModelelementsPackage.RATIONALE: return createRationale();
			case ModelelementsPackage.PROBLEM: return createProblem();
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
	public Conform createConform() {
		ConformImpl conform = new ConformImpl();
		return conform;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public View createView() {
		ViewImpl view = new ViewImpl();
		return view;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ViewPoint createViewPoint() {
		ViewPointImpl viewPoint = new ViewPointImpl();
		return viewPoint;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Rationale createRationale() {
		RationaleImpl rationale = new RationaleImpl();
		return rationale;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Problem createProblem() {
		ProblemImpl problem = new ProblemImpl();
		return problem;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ModelelementsPackage getModelelementsPackage() {
		return (ModelelementsPackage)getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static ModelelementsPackage getPackage() {
		return ModelelementsPackage.eINSTANCE;
	}

} //ModelelementsFactoryImpl
