package a.database;

import java.io.Serializable;

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
	@Override
	public String toString() {
		return "ID=" + ID + ", featureName=" + featureName;
	}
	

}
