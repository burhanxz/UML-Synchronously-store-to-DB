/**
 */
package sysml.activities.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.InternalEObject;
import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import core.store.MyStore;
import sysml.activities.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class ActivitiesFactoryImpl extends EFactoryImpl implements ActivitiesFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static ActivitiesFactory init() {
		try {
			ActivitiesFactory theActivitiesFactory = (ActivitiesFactory)EPackage.Registry.INSTANCE.getEFactory(ActivitiesPackage.eNS_URI);
			if (theActivitiesFactory != null) {
				return theActivitiesFactory;
			}
		}
		catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new ActivitiesFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ActivitiesFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	 
	public EObject createGen(EClass eClass) {
		switch (eClass.getClassifierID()) {
			case ActivitiesPackage.OPTIONAL: return createOptional();
			case ActivitiesPackage.RATE: return createRate();
			case ActivitiesPackage.PROBABILITY: return createProbability();
			case ActivitiesPackage.CONTINUOUS: return createContinuous();
			case ActivitiesPackage.DISCRETE: return createDiscrete();
			case ActivitiesPackage.CONTROL_OPERATOR: return createControlOperator();
			case ActivitiesPackage.NO_BUFFER: return createNoBuffer();
			case ActivitiesPackage.OVERWRITE: return createOverwrite();
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
	public Optional createOptional() {
		OptionalImpl optional = new OptionalImpl();
		return optional;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Rate createRate() {
		RateImpl rate = new RateImpl();
		return rate;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Probability createProbability() {
		ProbabilityImpl probability = new ProbabilityImpl();
		return probability;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Continuous createContinuous() {
		ContinuousImpl continuous = new ContinuousImpl();
		return continuous;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Discrete createDiscrete() {
		DiscreteImpl discrete = new DiscreteImpl();
		return discrete;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ControlOperator createControlOperator() {
		ControlOperatorImpl controlOperator = new ControlOperatorImpl();
		return controlOperator;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NoBuffer createNoBuffer() {
		NoBufferImpl noBuffer = new NoBufferImpl();
		return noBuffer;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Overwrite createOverwrite() {
		OverwriteImpl overwrite = new OverwriteImpl();
		return overwrite;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ActivitiesPackage getActivitiesPackage() {
		return (ActivitiesPackage)getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static ActivitiesPackage getPackage() {
		return ActivitiesPackage.eINSTANCE;
	}

} //ActivitiesFactoryImpl
