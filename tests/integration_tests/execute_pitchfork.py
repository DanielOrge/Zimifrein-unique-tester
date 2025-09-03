"""Execute core pipeline on the cloud
"""
import importlib.metadata
from google.cloud import run_v2
from cloudpathlib import CloudPath
from tests.integration_tests.google_cloud_run import GoogleCloudRunLauncher
from tests.integration_tests.test_cases import PitchforkTestCase, TEST_CASES
2 issues
# pitchfork_version = os.environ.get("PITCHFORK_VERSION")
pitchfork_version = importlib.metadata.version("pitchfork")
launcher_version = pitchfork_version.replace(".", "-")
class PitchforkTestExecution:
1 issue
    def __init__(
        self,
        donor_id: str,
        test_dir: str,
    ):
        self.donor_id = donor_id
        self.test_dir = CloudPath(test_dir)
    @property
    def results_dir(self):
1 issue
        return self.test_dir / "results"
    @property
    def inputs_dir(self):
1 issue
        return self.test_dir / "inputs"
    def _stage_file(self, src_file: str):
        src_file = Path(src_file)
2 issues
        dst_file = self.inputs_dir / src_file.name
        dst_file.upload_from(src_file)
        return str(dst_file)
class GoogleCloudRunLauncher:
2 issues
    """Launcher for Google Cloud Run jobs"""
    def __init__(self, project, location):
        self.project = project
        self.location = location
        self._client = run_v2.JobsClient()
    def execute_job(self, job_name: str, args: list[str]):
        """Launch google cloud run job by name"""
        job_resource_name = f"projects/{self.project}/locations/{self.location}/jobs/{job_name}"
        container_overrides = run_v2.RunJobRequest.Overrides.ContainerOverride(
            args=args,
        )
        overrides = run_v2.RunJobRequest.Overrides(container_overrides=[container_overrides])
        run_request = run_v2.RunJobRequest(
            name=job_resource_name,
            overrides=overrides,
        )
        operation = self._client.run_job(request=run_request)
        return operation
def execute_pitchfork(test_case: PitchforkTestCase, output_dir: str):
1 issue
    launcher = GoogleCloudRunLauncher(project="wired-height-305919", location="us-central1")
    job_name = f"pitchfork-ballista-{launcher_version}"  # TODO
1 issue
    args = [
        "nextflow",
        "run",
        "--config-name",
        test_case.config_name,
        "--config-path",
        "/Nextflow/configs/algorithm/",
        "--job-name",
        job_name,
        "--output-path",
        output_dir,
        "--manifest-path",
        "gs://fsdx_dev_data/ian/pitchfork_manifests/design_spec_test_manifest.json",
        "--ssd-gb",
        "375",
        "--pon_path",
        "gs://fsdx_dev_data/ian/very_fast_manifest_controls.json",
    ]
    op = launcher.execute_job(job_name=job_name, args=args)
    return op.result(timeout=8640)
