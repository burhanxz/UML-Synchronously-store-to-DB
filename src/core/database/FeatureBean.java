package core.database;

import java.io.Serializable;

import core.util.GeneralHashFunctionLibrary;

public class FeatureBean implements Serializable{
	private String ID;
	private String featureName;
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getFeatureName() {
		return featureName;
	}
	public void setFeatureName(String featureName) {
		this.featureName = featureName;
	}
//	@Override
//	public String toString() {
//		return ID + ":" + featureName;
//	}
	public FeatureBean(String iD, String featureName) {
		ID = iD;
		this.featureName = featureName;
	}
	public FeatureBean() {

	}
	@Override
	public boolean equals(Object obj) {
		if(obj instanceof FeatureBean) {
			FeatureBean bean = (FeatureBean)obj;
			return this.getFeatureName().equals(bean.getFeatureName()) || this.getID().equals(bean.getID());
		}
		return false;
	}
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return new Long(GeneralHashFunctionLibrary
				.APHash(this.getID() + ":" + this.getFeatureName()))
				.intValue();
	}
	
	

}
