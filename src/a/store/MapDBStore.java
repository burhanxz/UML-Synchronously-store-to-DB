package a.store;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EStructuralFeature;
import org.eclipse.emf.ecore.InternalEObject;
import org.mapdb.DB;

public class MapDBStore implements InternalEObject.EStore{
	
	private DB database;
	
	

	@Override
	public void add(InternalEObject arg0, EStructuralFeature arg1, int arg2, Object arg3) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void clear(InternalEObject arg0, EStructuralFeature arg1) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean contains(InternalEObject arg0, EStructuralFeature arg1, Object arg2) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public EObject create(EClass arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object get(InternalEObject arg0, EStructuralFeature arg1, int arg2) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public InternalEObject getContainer(InternalEObject arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public EStructuralFeature getContainingFeature(InternalEObject arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int hashCode(InternalEObject arg0, EStructuralFeature arg1) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int indexOf(InternalEObject arg0, EStructuralFeature arg1, Object arg2) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean isEmpty(InternalEObject arg0, EStructuralFeature arg1) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isSet(InternalEObject arg0, EStructuralFeature arg1) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int lastIndexOf(InternalEObject arg0, EStructuralFeature arg1, Object arg2) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Object move(InternalEObject arg0, EStructuralFeature arg1, int arg2, int arg3) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object remove(InternalEObject arg0, EStructuralFeature arg1, int arg2) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object set(InternalEObject arg0, EStructuralFeature arg1, int arg2, Object arg3) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int size(InternalEObject arg0, EStructuralFeature arg1) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Object[] toArray(InternalEObject arg0, EStructuralFeature arg1) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T[] toArray(InternalEObject arg0, EStructuralFeature arg1, T[] arg2) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void unset(InternalEObject arg0, EStructuralFeature arg1) {
		// TODO Auto-generated method stub
		
	}
	
}
