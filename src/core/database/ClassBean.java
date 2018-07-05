package core.database;

public class ClassBean {
	private String nsUri;
	private String className;
	public String getNsUri() {
		return nsUri;
	}
	public void setNsUri(String nsUri) {
		this.nsUri = nsUri;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	@Override
	public String toString() {
		return "nsUri=" + nsUri + ", className=" + className;
	}
	
	
}
