import Tiptap from "@/lib/utils/tiptap";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function DashboardPostEditComponent() {
  return (
    <div className="dashboard__post-edit">
      <div className="dashboard__post-edit__header"></div>
      <section className="dashboard__section">
        <div className="dashboard__section-header">
          <h1 className="dashboard__section-tilte order-2">Post Edit</h1>
          <div className="dashboard__section-actions order-1">
            <Link
              href={"/dashboard"}
              className="dashboard__post-edit__header-back"
            >
              <Icon icon="iwwa:arrow-left" width={30} /> Back
            </Link>
          </div>
        </div>
      </section>

      <section className="tiptap">
        <Tiptap />
      </section>
    </div>
  );
}
